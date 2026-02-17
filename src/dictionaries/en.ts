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
            income: { title: string; desc: string };
            watch: { title: string; desc: string };
            goals: { title: string; desc: string };
            bilingual: { title: string; desc: string };
        };
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
        title: "Focus — Minimalist Timer for iPhone & Apple Watch",
        description: "Focus is a minimalist timer app for iPhone & Apple Watch. Supports count-up/countdown, smart stats, and income tracking to boost your productivity.",
        ogTitle: "Focus — Minimalist Focus Timer",
        ogDescription: "iPhone + Apple Watch Focus Timer, Stats Analysis, Income Tracking",
    },
    navbar: {
        focus: "Focus",
        features: "Features",
        howItWorks: "How it Works",
        download: "Download",
    },
    hero: {
        badge: "iPhone + Apple Watch",
        title: "Focus",
        tagline: "Productivity, Reimagined",
        description: "A minimalist focus timer crafted for iPhone and Apple Watch,\ndesigned to help you work and study efficiently.",
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
                desc: "Flexible switching between Count-up and Countdown modes for different scenarios",
            },
            stats: {
                title: "Smart Stats",
                desc: "Weekly dashboard and bar charts to visualize your focus trends at a glance",
            },
            income: {
                title: "Income Tracking",
                desc: "Set your hourly rate and automatically calculate the value of your focus time",
            },
            watch: {
                title: "Apple Watch",
                desc: "Focus on your wrist. Precise control with Digital Crown, raise to wake",
            },
            goals: {
                title: "Daily Goals",
                desc: "Set daily focus targets to build efficient habits and visualize progress",
            },
            bilingual: {
                title: "Bilingual",
                desc: "Seamless switching between English and Chinese interfaces",
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
                desc: "Use count-up or countdown to focus on what matters most",
            },
            step3: {
                title: "View Results",
                desc: "Check your stats and income analysis in the dashboard",
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
        copyright: "© 2026 Focus. All rights reserved.",
    },
};
