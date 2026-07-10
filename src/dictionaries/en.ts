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
        seeCapabilities: string;
        tags: string[];
        mockup: {
            timer: string;
            status: string;
            mode: string;
            watchTime: string;
            watchMode: string;
        };
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
        title: "FocusMint — Focus Timer for iPhone and Apple Watch",
        description: "A calm focus timer for iPhone and Apple Watch. Track sessions, review progress, and understand where your time goes.",
        ogTitle: "FocusMint — Focus Timer for iPhone and Apple Watch",
        ogDescription: "A calm focus timer for iPhone and Apple Watch with session tracking and time insights.",
    },
    navbar: {
        features: "Features",
        tryDemo: "Try the Timer",
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
        title: "Make your time\nvisible.",
        description: "FocusMint brings focus sessions, goals, earnings, widgets, and Apple Watch together in one calm place.",
        appStore: "Coming soon on the App Store",
        appStoreUrl: "#",
        learnMore: "Try the 30-second timer",
        seeCapabilities: "See what FocusMint can do",
        tags: ["Focus sessions", "Goals & earnings", "iPhone + Apple Watch"],
        mockup: {
            timer: "00:30",
            status: "Focusing",
            mode: "Work",
            watchTime: "25:00",
            watchMode: "Focus",
        },
    },
    story: {
        steps: [
            {
                title: "Start in the way that fits.",
                description: "Use countdown when you need structure, count up when you simply want to begin, or clock in for longer work sessions.",
                screenshots: ["home", "modes"],
            },
            {
                title: "Every session has a history.",
                description: "Review what you worked on, how long it took, and how your sessions add up over time.",
                screenshots: ["sessions"],
            },
            {
                title: "Turn time into progress.",
                description: "Set time or income goals, follow active and completed goals, and understand the value of the time you invest.",
                screenshots: ["goals", "income-goal"],
            },
            {
                title: "See the patterns behind your time.",
                description: "Weekly charts and activity heatmaps make it easier to understand when and how you focus.",
                screenshots: ["heatmap", "weekly-chart"],
            },
        ],
    },
    ecosystem: {
        title: "Your session follows you.",
        subtitle: "Apple Watch, widgets, and Live Activity keep your focus data close at hand.",
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
        eyebrow: "Try FocusMint",
        title: "A small session, right in your browser.",
        description: "Start the 30-second demo to experience the basic timer flow.",
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
        title: "Your time, from every angle.",
        subtitle: "Start a session, review your day, follow a goal, and see the patterns behind your time.",
        tabs: {
            focus: {
                label: "Focus",
                title: "Focus with structure or flexibility",
                description: "Use countdown or count-up timers with work profiles suited for study, work, or other activities.",
            },
            history: {
                label: "History",
                title: "Every session logged",
                description: "Look back at what you worked on, when, and for how long. Keep an accurate log of your effort.",
            },
            goals: {
                label: "Goals",
                title: "Turn time into progress",
                description: "Set hourly or income-based goals to stay motivated and realize the value of your focus.",
            },
            insights: {
                label: "Insights",
                title: "Discover your patterns",
                description: "Activity heatmaps and weekly charts make it easy to spot when you are most productive.",
            },
        },
    },
    supporting: {
        title: "Everything else you need",
        subtitle: "Thoughtfully designed features that work together.",
        items: [
            { icon: "widgets", title: "Widgets & Live Activity", desc: "Start or stop work and see live progress without opening the app." },
            { icon: "watch", title: "Apple Watch Sync", desc: "Your sessions, goals, and timer sync automatically to Apple Watch." },
            { icon: "sound", title: "Background Sounds", desc: "Rain, ocean, café, forest, and fireplace ambience to help you focus." },
            { icon: "goal", title: "Goals & Earnings", desc: "Set time or income goals. Earnings and tips included in goal progress." },
            { icon: "tip", title: "Tips and Clock In", desc: "Record tips and include them in your earnings and goals. Clock in for longer work sessions." },
            { icon: "export", title: "CSV Data Export", desc: "Export your session data and earnings to CSV for your own analysis." },
        ],
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
        tryDemo: "Try the Timer",
        changelog: "Changelog",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        copyright: "© 2026 FocusMint. All rights reserved.",
    },
};
