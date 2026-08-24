const fs = require('fs');
const path = require('path');
const https = require('https');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
// Do not use GITHUB_REPOSITORY — in Actions that is this website repo, not FocusApp.
const REPO = process.env.CHANGELOG_REPO || 'mammut001/FocusApp';
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'changelog.json');
const APP_STORE_URL = 'https://apps.apple.com/us/app/focus-mint-focus-timer-study/id6759029810';

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function readExistingChangelog() {
    try {
        if (!fs.existsSync(OUTPUT_FILE)) return [];
        const parsed = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf8'));
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function keepExistingOrEmpty(reason) {
    const existing = readExistingChangelog();
    if (existing.length > 0) {
        console.warn(`${reason} Keeping ${existing.length} seeded changelog entries.`);
        return;
    }
    console.warn(`${reason} Writing empty changelog.`);
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify([]));
}

function fetchText(url, headers = {}) {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'FocusMintWebsiteChangelog/1.0',
                ...headers,
            },
        };

        https.get(url, options, (res) => {
            let data = '';
            if (res.statusCode !== 200) {
                res.resume();
                reject(new Error(`Request Failed. Status Code: ${res.statusCode}`));
                return;
            }
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function fetchGitHubData(url) {
    const headers = { Accept: 'application/vnd.github.v3+json' };
    if (GITHUB_TOKEN) headers.Authorization = `token ${GITHUB_TOKEN}`;
    const data = await fetchText(url, headers);
    return JSON.parse(data);
}

function parseAppStoreVersions(html) {
    const versionRe = /<span class="[^"]*">(\d+\.\d+(?:\.\d+)?)<\/span>\s*<time datetime="(\d{4}-\d{2}-\d{2})"/g;
    const versions = [];
    let match;
    while ((match = versionRe.exec(html)) !== null) {
        versions.push({
            tag: match[1],
            date: match[2],
            index: match.index,
        });
    }

    const releases = [];
    for (let i = 0; i < versions.length; i++) {
        const current = versions[i];
        const prevIndex = i === 0 ? 0 : versions[i - 1].index;
        const slice = html.slice(prevIndex, current.index);
        const bodies = [...slice.matchAll(/HTML_TAG_START -->([\s\S]*?)<!-- HTML_TAG_END -->/g)]
            .map((m) => m[1]
                .replace(/<[^>]+>/g, '')
                .replace(/&amp;/g, '&')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&quot;/g, '"')
                .replace(/&#39;/g, "'")
                .trim())
            .filter((body) => body && !body.startsWith('{') && !body.includes('@context'));

        const body = bodies.length > 0 ? bodies[bodies.length - 1] : `FocusMint ${current.tag}`;
        const id = Number(current.tag.replace(/\D/g, '')) || releases.length + 1;
        releases.push({
            id,
            name: `FocusMint ${current.tag}`,
            tag_name: current.tag,
            published_at: `${current.date}T12:00:00Z`,
            body,
            html_url: APP_STORE_URL,
        });
    }

    // Dedupe by tag, keep first occurrence (newest first in App Store order)
    const seen = new Set();
    return releases.filter((release) => {
        if (seen.has(release.tag_name)) return false;
        seen.add(release.tag_name);
        return true;
    });
}

async function generateChangelog() {
    console.log(`Generating changelog (repo hint: ${REPO})...`);
    const existing = readExistingChangelog();

    try {
        if (GITHUB_TOKEN) {
            try {
                const releases = await fetchGitHubData(`https://api.github.com/repos/${REPO}/releases`);
                if (Array.isArray(releases) && releases.length > 0) {
                    console.log(`Found ${releases.length} GitHub releases.`);
                    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(releases, null, 2));
                    return;
                }
            } catch (error) {
                console.warn(`GitHub releases unavailable: ${error.message}`);
            }
        } else {
            console.warn('GITHUB_TOKEN is not set; skipping private GitHub fetch.');
        }

        try {
            console.log('Fetching App Store version history...');
            const html = await fetchText(APP_STORE_URL);
            let appStoreReleases = parseAppStoreVersions(html);
            if (appStoreReleases.length > 0) {
                const enrichments = {
                    '1.3.0': '\n\nAlso in recent FocusMint builds: Earn / Spend / Train records, weekly review, and home actions for study, work, expense, and gym.',
                    '1.3.1': '\n\nLifetime FocusMint Pro unlocks advanced work tools.',
                };
                appStoreReleases = appStoreReleases.map((release) => {
                    const extra = enrichments[release.tag_name];
                    if (!extra || release.body.includes('Earn / Spend / Train') || release.body.includes('Lifetime FocusMint Pro')) {
                        return release;
                    }
                    return { ...release, body: `${release.body}${extra}` };
                });
                console.log(`Found ${appStoreReleases.length} App Store versions.`);
                fs.writeFileSync(OUTPUT_FILE, JSON.stringify(appStoreReleases, null, 2));
                return;
            }
        } catch (error) {
            console.warn(`App Store fetch failed: ${error.message}`);
        }

        keepExistingOrEmpty('No remote changelog source available.');
    } catch (error) {
        console.error('Error generating changelog:', error.message);
        if (existing.length > 0) {
            fs.writeFileSync(OUTPUT_FILE, JSON.stringify(existing, null, 2));
            return;
        }
        if (!fs.existsSync(OUTPUT_FILE)) {
            fs.writeFileSync(OUTPUT_FILE, JSON.stringify([]));
        }
    }
}

generateChangelog();
