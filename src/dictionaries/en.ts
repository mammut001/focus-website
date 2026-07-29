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
        title: "FocusMint — Earn, Spend, Train | iPhone & Apple Watch",
        description: "FocusMint helps you earn with focus, spend with awareness, and train for the long term — with weekly review on iPhone and Apple Watch.",
        ogTitle: "FocusMint — Earn. Spend. Train.",
        ogDescription: "Create with focus, spend intentionally, train for the long term. One calm app for iPhone and Apple Watch.",
    },
    navbar: {
        features: "Pillars",
        tryDemo: "Try Focus",
        download: "Download",
        changelog: "Changelog",
    },
    changelogPage: {
        title: "Changelog",
        description: "Follow the latest updates and improvements.",
        loading: "Loading...",
        error: "Failed to load data. Please try again later.",
        noReleases: "No releases found.",
        releases: "Releases",
        commits: "Commits",
        viewOnGitHub: "View on GitHub",
    },
    hero: {
        badge: "FocusMint for iPhone and Apple Watch",
        title: "Earn. Spend.\nTrain.",
        description: "Create with focus, spend with awareness, and train for the long term — then see how the week comes together.",
        appStore: "Download on the App Store",
        appStoreUrl: "https://apps.apple.com/us/app/focus-mint-focus-timer-study/id6759029810",
        learnMore: "Explore the three pillars",
        tags: ["Earn", "Spend", "Train"],
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
                description: 'Start study or work sessions with countdown, count-up, Pomodoro, or clock-in — then turn time into earnings and goals.',
                points: [
                    'Focus and work sessions from Home',
                    'Goals and live earnings',
                    'Widgets, Watch, and Live Activity',
                ],
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
                    'Housing, food, transport, and more',
                    'Time cost from your hourly rate',
                    'Recorded balance against earnings',
                ],
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
                    'Strength, cardio, mobility, sport',
                    'Weekly session targets',
                    'Streaks of consecutive target weeks',
                ],
                panelTitle: 'This week',
                panelMetric: '3 of 4',
                panelDetail: '2 consecutive target weeks',
            },
        ],
    },
    story: {
        steps: [
            {
                title: "Earn — start the way that fits.",
                description: "Use countdown or Pomodoro when you need structure, count up when you simply want to begin, or clock in for longer work sessions.",
                screenshots: ["home", "modes"],
            },
            {
                title: "Spend — see the time behind money.",
                description: "Add an expense and FocusMint shows its time cost from your hourly rate, so every purchase stays intentional.",
                screenshots: ["earnings"],
            },
            {
                title: "Train — keep the weekly target.",
                description: "Log workouts, track progress toward your weekly goal, and build streaks of consecutive target weeks.",
                screenshots: ["sessions"],
            },
            {
                title: "Weekly Review — see the whole picture.",
                description: "Earn, Spend, and Train land in one timeline. The weekly review shows focus, spending, and training together.",
                screenshots: ["heatmap", "weekly-chart"],
            },
        ],
    },
    ecosystem: {
        title: "Your session follows you.",
        subtitle: "Apple Watch, widgets, and Live Activity keep Earn close while you move through the day.",
        tabs: [
            {
                title: "Apple Watch",
                desc: "Start, pause, review goals, and keep an eye on progress directly from Apple Watch.",
                points: [
                    "Start and stop sessions from your wrist",
                    "View goal snapshots",
                    "Haptic feedback on completion",
                ],
            },
            {
                title: "Home Screen Widgets",
                desc: "Start or stop work and see live progress without opening the app.",
                points: [
                    "Start and stop from the widget",
                    "Live earnings and elapsed time",
                    "Work profile selection",
                ],
            },
            {
                title: "Live Activity",
                desc: "Keep an eye on your session from the Dynamic Island or Lock Screen.",
                points: [
                    "Real-time timer on Lock Screen",
                    "Dynamic Island integration",
                    "Quick access to stop your session",
                ],
            },
        ],
    },
    explorer: {
        title: "Explore the app",
        subtitle: "Real screenshots from FocusMint.",
        panels: [
            { title: "Timer", desc: "The main timer screen. Start a session with one tap, switch between countdown and count-up, and track your progress." },
            { title: "Goals", desc: "Set time or income goals. Track active, completed, and missed goals at a glance." },
            { title: "Sessions", desc: "Review your session history. See what you worked on, for how long, and when." },
            { title: "Earnings", desc: "Track your earnings and tips. See hourly rates and understand the value of your time." },
            { title: "Insights", desc: "Weekly charts and heatmaps reveal your focus patterns over time." },
            { title: "Watch", desc: "Your timer and goals on Apple Watch. Start, pause, and check progress from your wrist." },
        ],
    },
    timerDemo: {
        eyebrow: "Earn — try a focus session",
        title: "A small create session, right in your browser.",
        description: "Start the 30-second demo to feel how Earn begins.",
        start: "Start",
        pause: "Pause",
        resume: "Resume",
        reset: "Reset",
        done: "Done",
        countdown: "Countdown",
        countUp: "Count Up",
        work: "Work",
        study: "Study",
    },
    productGallery: {
        title: "Your week, from every angle.",
        subtitle: "Focus, unified records, weekly review, and the patterns behind your time.",
        tabs: {
            focus: {
                label: "Focus",
                title: "Earn with structure or flexibility",
                description: "Countdown, count-up, or Pomodoro with study, work, and other profiles.",
            },
            history: {
                label: "Records",
                title: "One timeline for Earn, Spend, Train",
                description: "Focus sessions, expenses, and workouts share a single records timeline.",
            },
            goals: {
                label: "Review",
                title: "Weekly Review across three pillars",
                description: "See focus, spending, and training together — with optional Sunday reminders.",
            },
            insights: {
                label: "Insights",
                title: "Discover your patterns",
                description: "Heatmaps and weekly charts make it easy to spot when you create, spend, and train.",
            },
        },
    },
    supporting: {
        title: "Everything else you need",
        subtitle: "Built to support Earn, Spend, and Train together.",
        items: [
            { icon: "records", title: "Unified Records", desc: "Earn, Spend, and Train in one timeline with type and date filters." },
            { icon: "review", title: "Weekly Review Reminder", desc: "Optional Sunday 7 PM reminder to open your full weekly review." },
            { icon: "widgets", title: "Widgets & Watch", desc: "Start focus from Home Screen widgets, Live Activity, and Apple Watch." },
            { icon: "shift", title: "Shift Planner", desc: "Plan upcoming shifts, set reminders, and keep your work schedule in one place." },
            { icon: "forecast", title: "Paycheck Forecast", desc: "Forecast the next paycheck, track pacing, and reconcile what you earned." },
            { icon: "pro", title: "FocusMint Pro", desc: "Unlock advanced work tools and base currency override for weekly review." },
        ],
    },
    download: {
        title: "Ready when you are.",
        subtitle: "A calmer way to earn, spend intentionally, and train for the long term.",
        appStore: "Download on the App Store",
        appStoreUrl: "https://apps.apple.com/us/app/focus-mint-focus-timer-study/id6759029810",
        footnote: "iPhone and Apple Watch required. Advanced work tools unlock with FocusMint Pro.",
    },
    footer: {
        description: "Earn, Spend, and Train — a calm record of how you use your time on iPhone and Apple Watch.",
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
