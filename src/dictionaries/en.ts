export type Dictionary = {
    metadata: {
        title: string;
        description: string;
        ogTitle: string;
        ogDescription: string;
    };
    navbar: {
        focus: string;
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
        tagline: string;
        description: string; // The <br> will be handled in component
        appStore: string;
        learnMore: string;
        mockup: {
            timer: string; // 25:00
            status: string; // Focusing
            mode: string; // Work Mode
            watchTime: string; // 15:00
            watchMode: string; // Study
        };
    };
    features: {
        title: string;
        subtitle: string;
        items: {
            dualMode: { title: string; desc: string };
            stats: { title: string; desc: string };
            earnings: { title: string; desc: string };
            watch: { title: string; desc: string };
            goalsLifecycle: { title: string; desc: string };
            bilingual: { title: string; desc: string };
            notifications: { title: string; desc: string };
            export: { title: string; desc: string };
            tips: { title: string; desc: string };
            clockIn: { title: string; desc: string };
            sounds: { title: string; desc: string };
        };
    };
    howItWorks: {
        title: string;
        subtitle: string;
        steps: {
            step1: { title: string; desc: string };
            step2: { title: string; desc: string };
            step3: { title: string; desc: string };
            step4: { title: string; desc: string };
        };
    };
    gallery: {
        title: string;
        subtitle: string;
        items: {
            main: {
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
            income: {
                title: string;
                desc: string;
                ui: {
                    period: string;
                    rate: string;
                    work: string;
                    study: string;
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
            tips: {
                title: string;
                desc: string;
                ui: {
                    period: string;
                    today: string;
                    thisWeek: string;
                    allocation: string;
                };
            };
        };
    };
    stats: {
        title: string;
        subtitle: string;
        items: {
            users: { label: string; suffix: string };
            sessions: { label: string; suffix: string };
            hours: { label: string; suffix: string };
            rating: { label: string; suffix: string };
        };
    };
    download: {
        title: string;
        subtitle: string;
        appStore: string;
        comingSoon: string;
    };
    footer: {
        privacy: string;
        terms: string;
        copyright: string;
    };
};

export const en: Dictionary = {
    metadata: {
        title: "FocusMint — Focus Timer, Goal Tracking & Earnings Analytics for iPhone & Apple Watch",
        description: "FocusMint is a focus timer for iPhone & Apple Watch with goal lifecycle tracking, earnings analytics, tips tracking, clock-in mode, and ambient sounds.",
        ogTitle: "FocusMint — Focus Timer, Goals & Earnings",
        ogDescription: "iPhone + Apple Watch Focus Timer, Goal Lifecycle, Earnings Analytics, Tips Tracking, Clock In",
    },
    navbar: {
        focus: "FocusMint",
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
        badge: "iPhone + Apple Watch",
        title: "FocusMint",
        tagline: "Productivity, Reimagined",
        description: "A powerful focus timer crafted for iPhone and Apple Watch,\nfeaturing goal lifecycle tracking, earnings analytics, tips, and clock-in.",
        appStore: "App Store",
        learnMore: "Learn More",
        mockup: {
            timer: "25:00",
            status: "Focusing",
            mode: "Work Mode",
            watchTime: "15:00",
            watchMode: "Study",
        },
    },
    features: {
        title: "Highlights",
        subtitle: "Built for high achievers, making every minute count",
        items: {
            dualMode: {
                title: "Dual Mode",
                desc: "Stopwatch and Countdown modes. Choose your rhythm for different scenarios",
            },
            stats: {
                title: "Smart Stats",
                desc: "Weekly dashboard, bar charts, and mode distribution at a glance",
            },
            earnings: {
                title: "Earnings Analytics",
                desc: "Base pay vs tips breakdown, effective hourly rate, best day/week, month-over-month comparisons",
            },
            watch: {
                title: "Apple Watch",
                desc: "Focus on your wrist. Live Work controls, goal snapshots, Digital Crown, haptics, complications",
            },
            goalsLifecycle: {
                title: "Goal Lifecycle",
                desc: "Track active, completed, and missed goals. Smart prioritization, time and income goals with saving rates",
            },
            bilingual: {
                title: "Multilingual",
                desc: "English, French, and Chinese. Seamless switching between interfaces",
            },
            notifications: {
                title: "Notifications",
                desc: "Countdown completion alerts. Haptic warnings at 1 min / 30 sec. Background ambient sounds",
            },
            tips: {
                title: "Tips Tracker",
                desc: "Record tips with daily, weekly, or pay-period presets. Allocate across sessions or by date",
            },
            clockIn: {
                title: "Clock In",
                desc: "Real-time work timer with live earnings counter. Live Activity on Dynamic Island. Tip prompt on completion",
            },
            sounds: {
                title: "Background Sounds",
                desc: "Rain, Ocean, Cafe, Forest, and Fireplace ambient sounds to improve focus during sessions",
            },
            export: {
                title: "Data Export",
                desc: "Export your focus data to CSV. Full control over your data",
            },
        },
    },
    howItWorks: {
        title: "Simple Steps",
        subtitle: "Start your focus journey immediately",
        steps: {
            step1: {
                title: "Select Mode",
                desc: "Choose from Work, Study, or Custom modes to fit your needs",
            },
            step2: {
                title: "Start Focus",
                desc: "Use count-up, countdown, or Clock In to track your time",
            },
            step3: {
                title: "Set Goals",
                desc: "Create time or income goals. Track active, completed, and missed progress",
            },
            step4: {
                title: "View Insights",
                desc: "Check earnings analytics, tips breakdown, and smart stats in the dashboard",
            },
        },
    },
    gallery: {
        title: "Previews",
        subtitle: "Pixel-perfect interface design",
        items: {
            main: {
                title: "Main Interface",
                desc: "Elegant ring timer, clear at a glance",
                ui: {
                    time: "25:00",
                    status: "Focusing",
                    pause: "Pause",
                    stop: "Stop",
                },
            },
            watch: {
                title: "Apple Watch",
                desc: "Your focus companion on wrist",
                ui: { time: "15:00", mode: "Study Mode" },
            },
            stats: {
                title: "Dashboard",
                desc: "Weekly views and focus analysis",
                ui: {
                    period: "This Week",
                    total: "12.5h",
                    trend: "+15% vs Last Wk",
                },
            },
            income: {
                title: "Income Track",
                desc: "Auto-calculate hourly value",
                ui: {
                    period: "This Month",
                    rate: "$80/h × 41h",
                    work: "Work",
                    study: "Study",
                },
            },
            goals: {
                title: "Goal Lifecycle",
                desc: "Track active, completed, and missed goals",
                ui: {
                    active: "Active",
                    completed: "Completed",
                    missed: "Missed",
                    deadline: "Due in 3 days",
                },
            },
            tips: {
                title: "Tips Tracker",
                desc: "Record tips with flexible periods",
                ui: {
                    period: "This Pay Period",
                    today: "Today",
                    thisWeek: "This Week",
                    allocation: "Spread across sessions",
                },
            },
        },
    },
    stats: {
        title: "By the Numbers",
        subtitle: "Real data from our users",
        items: {
            users: { label: "Active Users", suffix: "+" },
            sessions: { label: "Focus Sessions", suffix: "+" },
            hours: { label: "Focus Hours", suffix: "h+" },
            rating: { label: "App Rating", suffix: "" },
        },
    },
    download: {
        title: "Download Now",
        subtitle: "Start your focus journey and make every minute valuable",
        appStore: "App Store",
        comingSoon: "Coming soon to App Store · Stay tuned",
    },
    footer: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        copyright: "© 2026 FocusMint. All rights reserved.",
    },
};
