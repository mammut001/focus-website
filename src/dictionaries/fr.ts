import { Dictionary } from './en';

export const fr: Dictionary = {
    metadata: {
        title: "FocusMint — Minuteur de concentration pour iPhone et Apple Watch",
        description: "Un minuteur de concentration calme pour iPhone et Apple Watch. Suivez vos sessions, révisez vos progrès et comprenez où va votre temps.",
        ogTitle: "FocusMint — Minuteur pour iPhone et Apple Watch",
        ogDescription: "Un minuteur de concentration calme avec suivi des sessions et analyse du temps.",
    },
    navbar: {
        features: "Fonctions",
        howItWorks: "Comment ça marche",
        download: "Télécharger",
        changelog: "Journal",
    },
    changelogPage: {
        title: "Journal des modifications",
        description: "Suivez les dernières mises à jour et améliorations.",
        loading: "Chargement...",
        error: "Échec du chargement. Veuillez réessayer plus tard.",
        noReleases: "Aucune version trouvée.",
        releases: "Versions",
        commits: "Commits",
        viewOnGitHub: "Voir sur GitHub",
    },
    hero: {
        badge: "Minuteur pour iPhone et Apple Watch",
        title: "Concentrez-vous.\nOn garde le temps.",
        description: "Un minuteur de concentration calme pour iPhone et Apple Watch, avec des sessions simples, un suivi clair, et aucune distraction superflue.",
        appStore: "Bientôt sur l'App Store",
        appStoreUrl: "#",
        learnMore: "Voir comment ça marche",
        mockup: {
            timer: "25:00",
            status: "Concentration",
            mode: "Travail",
            watchTime: "25:00",
            watchMode: "Focus",
        },
    },
    productStatement: {
        line: "FocusMint est conçu pour vous aider à {brand}, pas pour vous imposer un système complexe de plus.",
        brandWord: "commencer",
    },
    features: {
        title: "Tout ce qu'il vous faut, rien de superflu",
        subtitle: "Chaque fonction a un seul objectif : vous aider à vous concentrer sans vous gêner.",
        main: [
            {
                title: "Commencez sans tout paramétrer.",
                description: "Choisissez un mode, tapez une fois, et lancez-vous. Utilisez le compte à rebours quand vous avez besoin de structure, ou le chronomètre quand vous voulez simplement commencer.",
                points: [
                    "Modes chronomètre et compte à rebours",
                    "Sessions en un seul tap",
                    "Conçu pour rester discret",
                ],
                mockupIcon: "timer",
                bg: "default",
            },
            {
                title: "Votre minuteur, directement au poignet.",
                description: "Lancez, mettez en pause et consultez votre session sans toucher à votre iPhone. Les données restent synchronisées.",
                points: [
                    "Contrôle depuis la montre",
                    "Retour haptique en fin de session",
                    "Aperçu des objectifs",
                ],
                mockupIcon: "watch",
                bg: "brand",
            },
            {
                title: "Sachez où va votre temps.",
                description: "Consultez vos sessions, comprenez vos habitudes et voyez la valeur de votre investissement. Statistiques, revenus et objectifs en un seul endroit.",
                points: [
                    "Aperçu hebdomadaire",
                    "Suivi des revenus et pourboires",
                    "Progrès et historique des objectifs",
                ],
                mockupIcon: "stats",
                bg: "default",
            },
        ],
        grid: [
            { icon: "clock", title: "Double Mode", desc: "Chronomètre ou compte à rebours." },
            { icon: "check", title: "Objectifs", desc: "Objectifs de temps ou de revenus." },
            { icon: "dollar", title: "Revenus", desc: "Gains horaires et pourboires." },
            { icon: "chart", title: "Statistiques", desc: "Graphiques hebdomadaires et tendances." },
            { icon: "bell", title: "Notifications", desc: "Alertes et retours haptiques." },
            { icon: "play", title: "Horloge", desc: "Minuteur en temps réel avec gains." },
            { icon: "sound", title: "Sons d'ambiance", desc: "Pluie, océan, café, forêt." },
            { icon: "globe", title: "Multilingue", desc: "Anglais, français, chinois." },
            { icon: "download", title: "Export CSV", desc: "Exportez vos données." },
        ],
    },
    howItWorks: {
        title: "Simple par conception",
        subtitle: "Trois étapes pour commencer, rien de plus.",
        steps: {
            step1: {
                title: "Choisissez votre rythme",
                desc: "Utilisez un compte à rebours pour la structure, ou le chronomètre pour commencer simplement.",
            },
            step2: {
                title: "Restez dans la session",
                desc: "FocusMint garde le temps discrètement pendant que vous travaillez.",
            },
            step3: {
                title: "Regardez avec clarté",
                desc: "Revoyez vos sessions et comprenez l'évolution de votre concentration.",
            },
        },
    },
    gallery: {
        title: "Voir en action",
        subtitle: "Captures d'écran réelles de l'application.",
        tabLabels: {
            timer: "Minuteur",
            watch: "Montre",
            stats: "Stats",
            goals: "Objectifs",
            earnings: "Revenus",
        },
        items: {
            timer: {
                title: "Minuteur",
                desc: "Propre, simple et facile à lire.",
                ui: {
                    time: "25:00",
                    status: "Concentration",
                    pause: "Pause",
                    stop: "Arrêt",
                },
            },
            watch: {
                title: "Apple Watch",
                desc: "Votre compagnon au poignet.",
                ui: { time: "25:00", mode: "Focus" },
            },
            stats: {
                title: "Tableau de Bord",
                desc: "Aperçu hebdomadaire de vos sessions.",
                ui: {
                    period: "Cette Semaine",
                    total: "12.5h",
                    trend: "+15% vs Sem. Der.",
                },
            },
            goals: {
                title: "Objectifs",
                desc: "Objectifs actifs, terminés et manqués.",
                ui: {
                    active: "Actif",
                    completed: "Terminé",
                    missed: "Manqué",
                    deadline: "Échéance dans 3 jours",
                },
            },
            earnings: {
                title: "Revenus",
                desc: "Suivez la valeur de votre temps.",
                ui: {
                    period: "Ce Mois",
                    rate: "80€/h × 41h",
                    work: "Travail",
                    study: "Étude",
                },
            },
        },
    },
    download: {
        title: "Prêt quand vous l'êtes.",
        subtitle: "Une façon plus calme de commencer, vous concentrer et comprendre votre temps.",
        appStore: "Bientôt sur l'App Store",
        appStoreUrl: "#",
        footnote: "iPhone et Apple Watch requis.",
    },
    footer: {
        description: "Un minuteur de concentration calme pour iPhone et Apple Watch.",
        product: "Produit",
        support: "Support",
        features: "Fonctions",
        howItWorks: "Comment ça marche",
        changelog: "Journal",
        privacy: "Confidentialité",
        terms: "Conditions",
        copyright: "© 2026 FocusMint. Tous droits réservés.",
    },
};
