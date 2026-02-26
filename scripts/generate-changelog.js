const fs = require('fs');
const path = require('path');
const https = require('https');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO = process.env.GITHUB_REPOSITORY || 'mammut001/FocusApp';
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'changelog.json');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function fetchGitHubData(url) {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'node.js',
                'Accept': 'application/vnd.github.v3+json',
            }
        };

        if (GITHUB_TOKEN) {
            options.headers['Authorization'] = `token ${GITHUB_TOKEN}`;
        }

        https.get(url, options, (res) => {
            let data = '';

            if (res.statusCode !== 200) {
                // Consume response data to free up memory
                res.resume();
                reject(new Error(`Request Failed. Status Code: ${res.statusCode}`));
                return;
            }

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(data);
                    resolve(parsedData);
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', (e) => {
            reject(e);
        });
    });
}

async function generateChangelog() {
    console.log(`Generating changelog for ${REPO}...`);

    try {
        if (!GITHUB_TOKEN) {
            console.warn('Warning: GITHUB_TOKEN is not set. Changelog generation might fail or be rate-limited.');
            // We might still try to fetch if the repo is public, but the user said it is private.
            // If it is private and no token, it will fail with 404.
            // We will write an empty array to avoid breaking the build.
             console.warn('Writing empty changelog due to missing token for private repo.');
             fs.writeFileSync(OUTPUT_FILE, JSON.stringify([]));
             return;
        }

        // Try fetching releases first
        try {
            const releases = await fetchGitHubData(`https://api.github.com/repos/${REPO}/releases`);
            if (releases && releases.length > 0) {
                console.log(`Found ${releases.length} releases.`);
                fs.writeFileSync(OUTPUT_FILE, JSON.stringify(releases, null, 2));
                return;
            }
        } catch (error) {
            console.warn(`Failed to fetch releases: ${error.message}`);
        }

        // If no releases or error, try fetching commits
        console.log('Fetching commits...');
        const commits = await fetchGitHubData(`https://api.github.com/repos/${REPO}/commits`);

        if (Array.isArray(commits)) {
             console.log(`Found ${commits.length} commits.`);
             fs.writeFileSync(OUTPUT_FILE, JSON.stringify(commits, null, 2));
        } else {
            console.warn('Commits response is not an array.');
            fs.writeFileSync(OUTPUT_FILE, JSON.stringify([]));
        }

    } catch (error) {
        console.error('Error generating changelog:', error.message);
        // Ensure file exists even on error to prevent 404 on frontend
        if (!fs.existsSync(OUTPUT_FILE)) {
            fs.writeFileSync(OUTPUT_FILE, JSON.stringify([]));
        }
    }
}

generateChangelog();
