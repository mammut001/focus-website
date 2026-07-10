export type Dictionary = {
    metadata: {
        title: string;
        description: string;
        ogTitle: string;
        ogDescription: string;
    };
    navbar: {
        features: string;
        howItWorks: string;
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
        mockup: {
            timer: string;
            status: string;
            mode: string;
            watchTime: string;
            watchMode: string;
        };
    };
    productStatement: {
        line: string;
        brandWord: string;
    };
    features: {
        title: string;
        subtitle: string;
        main: {
            title: string;
            description: string;
            points: string[];
            mockupIcon: string;
            bg: string;
        }[];
        grid: {
            icon: string;
            title: string;
            desc: string;
        }[];
    };
    howItWorks: {
        title: string;
        subtitle: string;
        steps: {
            step1: { title: string; desc: string };
            step2: { title: string; desc: string };
            step3: { title: string; desc: string };
        };
    };
    gallery: {
        title: string;
        subtitle: string;
        tabLabels: {
            timer: string;
            watch: string;
            stats: string;
            goals: string;
            earnings: string;
        };
        items: {
            timer: {
                title: string;
                desc: string;
                ui: {
                    time: string;
                    status: string;
                    pause: string;
                    stop: string;
                };
            };
            watch: {
                title: string;
                desc: string;
                ui: { time: string; mode: string };
            };
            stats: {
                title: string;
                desc: string;
                ui: {
                    period: string;
                    total: string;
                    trend: string;
                };
            };
            goals: {
                title: string;
                desc: string;
                ui: {
                    active: string;
                    completed: string;
                    missed: string;
                    deadline: string;
                };
            };
            earnings: {
                title: string;
                desc: string;
                ui: {
                    period: string;
                    rate: string;
                    work: string;
                    study: string;
                };
            };
        };
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
        howItWorks: string;
        changelog: string;
        privacy: string;
        terms: string;
        copyright: string;
    };
};

export const en: Dictionary = {
    metadata: {
        title: "FocusMint — Focus Timer for iPhone and Apple Watch",
        description: "A calm focus timer for iPhone and Apple Watch. Track sessions, review progress, and understand where your time goes.",
        ogTitle: "FocusMint — Focus Timer for iPhone and Apple Watch",
        ogDescription: "A calm focus timer for iPhone and Apple Watch with session tracking and time insights.",
    },
    navbar: {
        features: "Features",
        howItWorks: "How it Works",
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
        badge: "Focus timer for iPhone and Apple Watch",
        title: "Focus on the work.\nWe'll keep the time.",
        description: "A calm focus timer for iPhone and Apple Watch, with simple sessions, clear progress, and no unnecessary distractions.",
        appStore: "Coming soon on the App Store",
        appStoreUrl: "#",
        learnMore: "See how it works",
        mockup: {
            timer: "25:00",
            status: "Focusing",
            mode: "Work Mode",
            watchTime: "25:00",
            watchMode: "Focus",
        },
    },
    productStatement: {
        line: "FocusMint is designed to help you {brand}, not to give you another system to manage.",
        brandWord: "begin",
    },
    features: {
        title: "Everything you need, nothing you don't",
        subtitle: "Every feature serves a single purpose: helping you focus without getting in the way.",
        main: [
            {
                title: "Start without setting everything up.",
                description: "Choose a mode, tap once, and get to work. Use countdown when you need structure, or count up when you simply want to begin.",
                points: [
                    "Countdown and count-up modes",
                    "Simple one-tap sessions",
                    "Designed to stay out of the way",
                ],
                mockupIcon: "timer",
                bg: "default",
            },
            {
                title: "Your timer, right on your wrist.",
                description: "Start, pause, and check your session without reaching for your phone. Apple Watch keeps your focus data in sync.",
                points: [
                    "Start and stop from your wrist",
                    "Haptic feedback for session ends",
                    "Goal snapshots at a glance",
                ],
                mockupIcon: "watch",
                bg: "brand",
            },
            {
                title: "See where your time went.",
                description: "Review your sessions, understand your habits, and see the value of the time you invest. Weekly stats, earnings breakdown, and goal progress in one place.",
                points: [
                    "Weekly session overview",
                    "Income and tips tracking",
                    "Goal progress and history",
                ],
                mockupIcon: "stats",
                bg: "default",
            },
        ],
        grid: [
            { icon: "clock", title: "Dual Mode", desc: "Stopwatch and countdown. Pick what works for you." },
            { icon: "check", title: "Goal Tracking", desc: "Set time or income goals. See progress at a glance." },
            { icon: "dollar", title: "Earnings", desc: "Track hourly earnings and tips per session." },
            { icon: "chart", title: "Statistics", desc: "Weekly charts, mode distribution, and trends." },
            { icon: "bell", title: "Notifications", desc: "Session end alerts and haptic warnings." },
            { icon: "play", title: "Clock In", desc: "Real-time work timer with live earnings." },
            { icon: "sound", title: "Background Sounds", desc: "Rain, ocean, cafe, and forest ambience." },
            { icon: "globe", title: "Multilingual", desc: "English, French, and Chinese interfaces." },
            { icon: "download", title: "Data Export", desc: "Export your sessions to CSV." },
        ],
    },
    howItWorks: {
        title: "Simple by design",
        subtitle: "Three steps to get started, nothing more.",
        steps: {
            step1: {
                title: "Choose what feels right",
                desc: "Use a countdown for structure or count up when you just want to begin.",
            },
            step2: {
                title: "Stay with the session",
                desc: "FocusMint quietly keeps track while you work or study.",
            },
            step3: {
                title: "Look back with clarity",
                desc: "Review your sessions and understand how your focus changes over time.",
            },
        },
    },
    gallery: {
        title: "See it in action",
        subtitle: "Real screenshots from the app.",
        tabLabels: {
            timer: "Timer",
            watch: "Watch",
            stats: "Stats",
            goals: "Goals",
            earnings: "Earnings",
        },
        items: {
            timer: {
                title: "Timer",
                desc: "Clean, simple, and easy to read.",
                ui: {
                    time: "25:00",
                    status: "Focusing",
                    pause: "Pause",
                    stop: "Stop",
                },
            },
            watch: {
                title: "Apple Watch",
                desc: "Your focus companion on wrist.",
                ui: { time: "25:00", mode: "Focus" },
            },
            stats: {
                title: "Dashboard",
                desc: "Weekly overview of your sessions.",
                ui: {
                    period: "This Week",
                    total: "12.5h",
                    trend: "+15% vs Last Week",
                },
            },
            goals: {
                title: "Goal Lifecycle",
                desc: "Active, completed, and missed goals.",
                ui: {
                    active: "Active",
                    completed: "Completed",
                    missed: "Missed",
                    deadline: "Due in 3 days",
                },
            },
            earnings: {
                title: "Earnings",
                desc: "Track your time value and tips.",
                ui: {
                    period: "This Month",
                    rate: "$80/h × 41h",
                    work: "Work",
                    study: "Study",
                },
            },
        },
    },
    download: {
        title: "Ready when you are.",
        subtitle: "A calmer way to begin, focus, and understand your time.",
        appStore: "Coming soon on the App Store",
        appStoreUrl: "#",
        footnote: "iPhone and Apple Watch required.",
    },
    footer: {
        description: "A calm focus timer for iPhone and Apple Watch.",
        product: "Product",
        support: "Support",
        features: "Features",
        howItWorks: "How it Works",
        changelog: "Changelog",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        copyright: "© 2026 FocusMint. All rights reserved.",
    },
};
