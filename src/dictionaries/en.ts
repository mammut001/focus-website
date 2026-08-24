export type Dictionary = {
    metadata: {
        title: string;
        description: string;
        ogTitle: string;
        ogDescription: string;
    };
    navbar: {
        features: string;
        tryDemo: string;
        download: string;
        changelog: string;
    };
    changelogPage: {
        title: string;
        description: string;
        loading: string;
        error: string;
        noReleases: string;
        releases: string;
        commits: string;
        viewOnGitHub: string;
    };
    hero: {
        badge: string;
        title: string;
        description: string;
        appStore: string;
        appStoreUrl: string;
        learnMore: string;
        tags: string[];
        mockup: {
            timer: string;
            status: string;
            mode: string;
            watchTime: string;
            watchMode: string;
        };
    };
    pillars: {
        title: string;
        subtitle: string;
        items: {
            id: 'earn' | 'spend' | 'train';
            label: string;
            title: string;
            description: string;
            points: string[];
            screenshot: string;
            panelTitle: string;
            panelMetric: string;
            panelDetail: string;
        }[];
    };
    story: {
        steps: {
            title: string;
            description: string;
            screenshots: string[];
        }[];
    };
    ecosystem: {
        title: string;
        subtitle: string;
        tabs: {
            title: string;
            desc: string;
            points: string[];
        }[];
    };
    explorer: {
        title: string;
        subtitle: string;
        panels: {
            title: string;
            desc: string;
        }[];
    };
    timerDemo: {
        eyebrow: string;
        title: string;
        description: string;
        start: string;
        pause: string;
        resume: string;
        reset: string;
        done: string;
        countdown: string;
        countUp: string;
        work: string;
        study: string;
    };
    productGallery: {
        title: string;
        subtitle: string;
        tabs: {
            focus: {
                label: string;
                title: string;
                description: string;
            };
            history: {
                label: string;
                title: string;
                description: string;
            };
            goals: {
                label: string;
                title: string;
                description: string;
            };
            insights: {
                label: string;
                title: string;
                description: string;
            };
        };
    };
    supporting: {
        title: string;
        subtitle: string;
        items: {
            icon: string;
            title: string;
            desc: string;
        }[];
    };
    credibility: {
        items: string[];
    };
    download: {
        title: string;
        subtitle: string;
        appStore: string;
        appStoreUrl: string;
        footnote: string;
    };
    footer: {
        description: string;
        product: string;
        support: string;
        features: string;
        tryDemo: string;
        changelog: string;
        privacy: string;
        terms: string;
        copyright: string;
    };
};

export const en: Dictionary = {
    metadata: {
        title: "FocusMint — Earn, Spend, Train | iPhone, iPad & Apple Watch",
        description: "Start with Today’s 3, then study, work, spend, and train. Records and a Watch companion keep the week visible.",
        ogTitle: "FocusMint — Earn. Spend. Train.",
        ogDescription: "Today’s 3, unified Records, and an Apple Watch companion for focus, work, spending, and training.",
    },
    navbar: {
        features: "Pillars",
        tryDemo: "Try Focus",
        download: "Download",
        changelog: "Changelog",
    },
    changelogPage: {
        title: "Changelog",
        description: "Release notes from the App Store, including FocusMint 1.3.x.",
        loading: "Loading...",
        error: "Failed to load data. Please try again later.",
        noReleases: "No releases found.",
        releases: "Releases",
        commits: "Commits",
        viewOnGitHub: "View on App Store",
    },
    hero: {
        badge: "New Records hub · Watch companion",
        title: "Earn. Spend.\nTrain.",
        description: "Start the day with Today’s 3, then Study, Work, Expense, or Gym. Records shows the pattern. Apple Watch keeps it close.",
        appStore: "Download on the App Store",
        appStoreUrl: "https://apps.apple.com/us/app/focus-mint-focus-timer-study/id6759029810",
        learnMore: "Explore the three pillars",
        tags: ["Today’s 3", "Records", "Watch"],
        mockup: {
            timer: "00:30",
            status: "Focusing",
            mode: "Work",
            watchTime: "25:00",
            watchMode: "Focus",
        },
    },
    pillars: {
        title: "Three pillars. One calm record.",
        subtitle: "FocusMint treats creating, spending, and training as equal parts of how you use your time.",
        items: [
            {
                id: 'earn',
                label: 'Earn',
                title: 'Create with focus.',
                description: 'Study uses Live Focus, Pomodoro, or Manual. Work uses Clock In, Pomodoro, or Manual. Time becomes earnings and goals.',
                points: [
                    'Study and Work from Home',
                    'Today’s 3 daily priorities',
                    'Live Focus, Clock In, Pomodoro, or Manual',
                ],
                screenshot: 'home',
                panelTitle: 'Today’s focus',
                panelMetric: '6h 45m',
                panelDetail: '3 sessions · $157.50 earned',
            },
            {
                id: 'spend',
                label: 'Spend',
                title: 'Spend intentionally.',
                description: 'Log expenses by category and see the time cost — how many hours of work that purchase really took.',
                points: [
                    'Log expenses from the Home actions',
                    'See earned, spent, and kept in Life Flow',
                    'Time cost from your work profiles',
                ],
                screenshot: 'records',
                panelTitle: 'Time cost',
                panelMetric: '≈ 2.5h work',
                panelDetail: '$45 food · based on base hourly rate',
            },
            {
                id: 'train',
                label: 'Train',
                title: 'Train for the long term.',
                description: 'Log strength, cardio, and more. Set a weekly target and build consecutive weeks that hit it.',
                points: [
                    'Gym from Home',
                    'Weekly target in Records',
                    'Today’s 3 and Watch summary stay in sync',
                ],
                screenshot: 'records-analytics',
                panelTitle: 'This week',
                panelMetric: '3 of 4',
                panelDetail: '2 consecutive target weeks',
            },
        ],
    },
    story: {
        steps: [
            {
                title: "Start with Today’s 3.",
                description: "Pick three priorities, then start Study, Work, Expense, or Gym from the same Home screen.",
                screenshots: ["home", "session-setup"],
            },
            {
                title: "See the week as Life Flow.",
                description: "Records Overview shows intentional time, earned, spent, and kept — plus Study, Work, Spend, and Train at a glance.",
                screenshots: ["records", "records-analytics"],
            },
            {
                title: "Inspect the activity ledger.",
                description: "Filter the week by Study, Work, Spend, or Train. Every session is editable in one timeline.",
                screenshots: ["records-activity"],
            },
            {
                title: "Turn time into goals.",
                description: "Set income and time goals, follow pay-period progress, and keep study hours on track.",
                screenshots: ["goals", "home-goals"],
            },
        ],
    },
    ecosystem: {
        title: "A Watch companion, not a second app.",
        subtitle: "Three light pages — Now, Summary, and Sync. Start on the wrist; iPhone stays the source of truth.",
        tabs: [
            {
                title: "Now",
                desc: "Today’s 3, then Quick Start on the same page: 25 or 50 minute focus, or Clock In to a work profile.",
                points: [
                    "Today’s 3 on your wrist",
                    "Continue on iPhone when a task needs the phone",
                    "Quick Start: Focus 25 / 50, or Clock In",
                ],
            },
            {
                title: "Summary",
                desc: "A read-only glance at Focus, Work, Train, and Today’s 3 — synced from iPhone.",
                points: [
                    "Today and This Week",
                    "Focus, Work, Train, and Today’s 3",
                    "Read-only companion surface",
                ],
            },
            {
                title: "Sync",
                desc: "Refresh from iPhone when you need a new snapshot. Cached data stays visible if the phone is away.",
                points: [
                    "Refresh from iPhone",
                    "Shows saved iPhone data when offline",
                    "The phone stays the source of truth",
                ],
            },
        ],
    },
    explorer: {
        title: "Explore the app",
        subtitle: "Real screenshots from FocusMint.",
        panels: [
            { title: "Home", desc: "Today’s 3, then Study, Work, Expense, or Gym." },
            { title: "Goals", desc: "Time and income goals in one list, including pay-period progress." },
            { title: "Records", desc: "Overview for Life Flow, then Activity for the editable ledger." },
            { title: "Work", desc: "Work profiles, Clock In, and paycheck tools." },
            { title: "Analytics", desc: "Daily rhythm, Weekly Review, and heatmap from Records." },
            { title: "Watch", desc: "Now, Summary, and Sync. Quick Start lives on Now." },
        ],
    },
    timerDemo: {
        eyebrow: "Earn — try a focus session",
        title: "A small create session, right in your browser.",
        description: "Thirty seconds of Pomodoro or Live Focus — the two live timers on iPhone.",
        start: "Start",
        pause: "Pause",
        resume: "Resume",
        reset: "Reset",
        done: "Done",
        countdown: "Pomodoro",
        countUp: "Live Focus",
        work: "Work",
        study: "Study",
    },
    productGallery: {
        title: "Your week, from every angle.",
        subtitle: "Today’s 3, unified Records, weekly review, and the patterns behind your time.",
        tabs: {
            focus: {
                label: "Home",
                title: "Start from Today’s 3",
                description: "Study, Work, Expense, or Gym from Home. Study and Work open Live Focus or Clock In, then Pomodoro or Manual.",
            },
            history: {
                label: "Records",
                title: "Overview first, then the ledger",
                description: "Life Flow, highlights, and an editable activity timeline for Study, Work, Spend, and Train.",
            },
            goals: {
                label: "Goals",
                title: "Income and time in one list",
                description: "Pay-period earnings goals next to weekly study hours, with progress you can actually use.",
            },
            insights: {
                label: "Insights",
                title: "Trend, then the analytics grid",
                description: "Daily rhythm in Records, then Weekly Review, heatmap, spend, and earnings by work profile.",
            },
        },
    },
    supporting: {
        title: "Everything else you need",
        subtitle: "Built around Home, Records, and a thin Watch companion.",
        items: [
            { icon: "today", title: "Today’s 3", desc: "Three daily priorities on iPhone and Apple Watch, with continue-on-iPhone when a task needs the phone." },
            { icon: "records", title: "Records hub", desc: "Overview for patterns, Activity for the editable ledger — Study, Work, Spend, Train." },
            { icon: "watch", title: "Watch companion", desc: "Now, Summary, and Sync. Quick Start sits on Now. The phone stays the source of truth." },
            { icon: "widgets", title: "Widgets", desc: "Today, Payday, and Next Shift — plus Smart and Quick Actions, with an optional work profile." },
            { icon: "shift", title: "Pay schedule", desc: "Weekly, every two weeks, or monthly — confirm real paydays so forecasts stay honest." },
            { icon: "pro", title: "Work profiles & Pro", desc: "Separate rates per job. Pro unlocks more profiles, custom modes, and a base-currency override." },
        ],
    },
    download: {
        title: "Ready when you are.",
        subtitle: "A calmer way to earn, spend intentionally, and train for the long term.",
        appStore: "Download on the App Store",
        appStoreUrl: "https://apps.apple.com/us/app/focus-mint-focus-timer-study/id6759029810",
        footnote: "Free on the App Store · iPhone, iPad, and Apple Watch · FocusMint Pro lifetime $4.99.",
    },
    credibility: {
        items: ["Today’s 3", "Records", "Watch", "iPhone · iPad · Watch", "English · Français · 中文"],
    },
    footer: {
        description: "Earn, Spend, and Train — Today’s 3, Records, and a Watch companion on iPhone, iPad, and Apple Watch.",
        product: "Product",
        support: "Support",
        features: "Pillars",
        tryDemo: "Try Focus",
        changelog: "Changelog",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        copyright: "© 2026 FocusMint. All rights reserved.",
    },
};
