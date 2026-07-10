import { Dictionary } from './en';

export const fr: Dictionary = {
    metadata: {
        title: "FocusMint — Minuteur, Objectifs et Analyse de Revenus pour iPhone & Apple Watch",
        description: "FocusMint est un minuteur de concentration pour iPhone et Apple Watch avec suivi du cycle de vie des objectifs, analyse des revenus, suivi des pourboires, mode horloge et sons d'ambiance.",
        ogTitle: "FocusMint — Minuteur, Objectifs et Revenus",
        ogDescription: "Minuteur iPhone + Apple Watch, cycle de vie des objectifs, analyse des revenus, suivi des pourboires, horloge",
    },
    navbar: {
        focus: "FocusMint",
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
        badge: "iPhone + Apple Watch",
        title: "FocusMint",
        tagline: "La Productivité, Réimaginée",
        description: "Un puissant minuteur de concentration conçu pour iPhone et Apple Watch,\navec suivi des objectifs, analyse des revenus, pourboires et horloge.",
        appStore: "App Store",
        learnMore: "En savoir plus",
        mockup: {
            timer: "25:00",
            status: "Concentration",
            mode: "Travail",
            watchTime: "15:00",
            watchMode: "Étude",
        },
    },
    features: {
        title: "Points Forts",
        subtitle: "Conçu pour les plus performants, chaque minute compte",
        items: {
            dualMode: {
                title: "Double Mode",
                desc: "Chronomètre et compte à rebours. Choisissez votre rythme selon le scénario",
            },
            stats: {
                title: "Stats Intelligentes",
                desc: "Tableau de bord hebdomadaire, graphiques et distribution des modes",
            },
            earnings: {
                title: "Analyse des Revenus",
                desc: "Salaire de base vs pourboires, taux horaire effectif, meilleur jour/semaine, comparaisons mensuelles",
            },
            watch: {
                title: "Apple Watch",
                desc: "Concentration au poignet. Contrôle de l'horloge, instantanés d'objectifs, Digital Crown, retours haptiques, complications",
            },
            goalsLifecycle: {
                title: "Cycle de Vie des Objectifs",
                desc: "Suivez les objectifs actifs, terminés et manqués. Priorisation intelligente, objectifs de temps et de revenus",
            },
            bilingual: {
                title: "Multilingue",
                desc: "Anglais, français et chinois. Basculement transparent entre les interfaces",
            },
            notifications: {
                title: "Notifications",
                desc: "Alertes de fin de compte à rebours. Avertissements haptiques. Sons d'ambiance",
            },
            tips: {
                title: "Suivi des Pourboires",
                desc: "Enregistrez les pourboires par jour, semaine ou période de paie. Répartissez entre les sessions ou par date",
            },
            clockIn: {
                title: "Horloge",
                desc: "Minuteur de travail en temps réel avec compteur de gains. Live Activity sur Dynamic Island",
            },
            sounds: {
                title: "Sons d'Ambiance",
                desc: "Pluie, Océan, Café, Forêt et Cheminée pour améliorer votre concentration",
            },
            export: {
                title: "Exportation",
                desc: "Exportez vos données en CSV. Contrôle total sur vos données",
            },
        },
    },
    howItWorks: {
        title: "Étapes Simples",
        subtitle: "Commencez votre voyage de concentration immédiatement",
        steps: {
            step1: {
                title: "Choisir le Mode",
                desc: "Choisissez parmi Travail, Étude ou Personnalisé selon vos besoins",
            },
            step2: {
                title: "Commencer",
                desc: "Utilisez le chronomètre, le compte à rebours ou l'horloge",
            },
            step3: {
                title: "Définir des Objectifs",
                desc: "Créez des objectifs de temps ou de revenus. Suivez les progrès actifs, terminés et manqués",
            },
            step4: {
                title: "Voir les Insights",
                desc: "Consultez l'analyse des revenus, la répartition des pourboires et les statistiques",
            },
        },
    },
    gallery: {
        title: "Aperçus",
        subtitle: "Interface conçue au pixel près",
        items: {
            main: {
                title: "Interface Principale",
                desc: "Minuteur circulaire élégant, clair d'un coup d'œil",
                ui: {
                    time: "25:00",
                    status: "Concentration",
                    pause: "Pause",
                    stop: "Arrêt",
                },
            },
            watch: {
                title: "Apple Watch",
                desc: "Votre compagnon au poignet",
                ui: { time: "15:00", mode: "Étude" },
            },
            stats: {
                title: "Tableau de Bord",
                desc: "Vues hebdomadaires et analyse",
                ui: {
                    period: "Cette Semaine",
                    total: "12.5h",
                    trend: "+15% vs Der. Sem.",
                },
            },
            income: {
                title: "Revenus",
                desc: "Calcul automatique de la valeur",
                ui: {
                    period: "Ce Mois",
                    rate: "80€/h × 41h",
                    work: "Travail",
                    study: "Étude",
                },
            },
            goals: {
                title: "Cycle des Objectifs",
                desc: "Suivez les objectifs actifs, terminés et manqués",
                ui: {
                    active: "Actif",
                    completed: "Terminé",
                    missed: "Manqué",
                    deadline: "Échéance dans 3 jours",
                },
            },
            tips: {
                title: "Pourboires",
                desc: "Enregistrez les pourboires par période",
                ui: {
                    period: "Cette Période de Paie",
                    today: "Aujourd'hui",
                    thisWeek: "Cette Semaine",
                    allocation: "Répartir sur les sessions",
                },
            },
        },
    },
    stats: {
        title: "En Chiffres",
        subtitle: "Données réelles de nos utilisateurs",
        items: {
            users: { label: "Utilisateurs Actifs", suffix: "+" },
            sessions: { label: "Sessions", suffix: "+" },
            hours: { label: "Heures de Focus", suffix: "h+" },
            rating: { label: "Note App Store", suffix: "" },
        },
    },
    download: {
        title: "Télécharger",
        subtitle: "Commencez votre voyage et rendez chaque minute précieuse",
        appStore: "App Store",
        comingSoon: "Bientôt sur l'App Store · Restez à l'écoute",
    },
    footer: {
        privacy: "Confidentialité",
        terms: "Conditions",
        copyright: "© 2026 FocusMint. Tous droits réservés.",
    },
};
