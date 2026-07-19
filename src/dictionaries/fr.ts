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
        tryDemo: "Essayer le minuteur",
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
        title: "Rendez votre temps\nvisible.",
        description: "FocusMint réunit sessions de concentration, objectifs, revenus, planification des shifts, widgets et Apple Watch en un seul endroit calme.",
        appStore: "Télécharger sur l'App Store",
        appStoreUrl: "https://apps.apple.com/us/app/focus-mint-focus-timer-study/id6759029810",
        learnMore: "Essayer le minuteur de 30 secondes",
        tags: ["Sessions de focus", "Objectifs & revenus", "iPhone + Apple Watch"],
        mockup: {
            timer: "00:30",
            status: "Concentration",
            mode: "Travail",
            watchTime: "25:00",
            watchMode: "Focus",
        },
    },
    story: {
        steps: [
            {
                title: "Commencez comme vous voulez.",
                description: "Utilisez le compte à rebours ou le Pomodoro pour la structure, le chronomètre pour commencer simplement, ou l'horloge pour les longues sessions.",
                screenshots: ["home", "modes"],
            },
            {
                title: "Chaque session a son histoire.",
                description: "Revoyez ce sur quoi vous avez travaillé, combien de temps cela a pris, et comment vos sessions s'accumulent.",
                screenshots: ["sessions"],
            },
            {
                title: "Transformez le temps en progrès.",
                description: "Fixez des objectifs de temps ou de revenus, suivez les objectifs actifs et terminés, et comprenez la valeur de votre temps.",
                screenshots: ["goals", "income-goal"],
            },
            {
                title: "Voyez les tendances derrière votre temps.",
                description: "Les graphiques hebdomadaires et les heatmaps révèlent quand et comment vous vous concentrez.",
                screenshots: ["heatmap", "weekly-chart"],
            },
        ],
    },
    ecosystem: {
        title: "Votre session vous suit.",
        subtitle: "Apple Watch, widgets et Live Activity gardent vos données de concentration à portée de main.",
        tabs: [
            {
                title: "Apple Watch",
                desc: "Lancez, mettez en pause et suivez vos objectifs directement depuis votre montre.",
                points: [
                    "Lancer et arrêter les sessions depuis le poignet",
                    "Consulter les objectifs",
                    "Retour haptique à la fin",
                ],
            },
            {
                title: "Widgets",
                desc: "Commencez ou arrêtez le travail et voyez la progression en direct sans ouvrir l'app.",
                points: [
                    "Démarrer et arrêter depuis le widget",
                    "Revenus et temps écoulé en direct",
                    "Sélection du profil de travail",
                ],
            },
            {
                title: "Live Activity",
                desc: "Gardez un œil sur votre session depuis l'île dynamique ou l'écran verrouillé.",
                points: [
                    "Minuteur en temps réel sur l'écran verrouillé",
                    "Intégration Dynamic Island",
                    "Accès rapide pour arrêter la session",
                ],
            },
        ],
    },
    explorer: {
        title: "Explorez l'application",
        subtitle: "Captures d'écran réelles de FocusMint.",
        panels: [
            { title: "Minuteur", desc: "L'écran principal du minuteur. Lancez une session en un tap, basculez entre chronomètre et compte à rebours." },
            { title: "Objectifs", desc: "Fixez des objectifs de temps ou de revenus. Suivez les objectifs actifs, terminés et manqués." },
            { title: "Sessions", desc: "Consultez l'historique de vos sessions. Voyez ce sur quoi vous avez travaillé et pendant combien de temps." },
            { title: "Revenus", desc: "Suivez vos revenus et pourboires. Visualisez les taux horaires et la valeur de votre temps." },
            { title: "Aperçus", desc: "Graphiques hebdomadaires et heatmaps révèlent vos habitudes de concentration." },
            { title: "Montre", desc: "Votre minuteur et vos objectifs sur Apple Watch. Lancez, pause et suivez depuis votre poignet." },
        ],
    },
    timerDemo: {
        eyebrow: "Essayer FocusMint",
        title: "Une mini session, directement dans votre navigateur.",
        description: "Lancez la démo de 30 secondes pour découvrir le fonctionnement du minuteur.",
        start: "Démarrer",
        pause: "Pause",
        resume: "Reprendre",
        reset: "Réinitialiser",
        done: "Terminé",
        countdown: "Compte à rebours",
        countUp: "Chronomètre",
        work: "Travail",
        study: "Étude",
    },
    productGallery: {
        title: "Votre temps, sous tous les angles.",
        subtitle: "Lancez une session, passez en revue votre journée, suivez un objectif et découvrez les tendances de votre temps.",
        tabs: {
            focus: {
                label: "Focus",
                title: "Concentration structurée ou flexible",
                description: "Utilisez le compte à rebours, le chronomètre ou le Pomodoro avec des profils adaptés pour l'étude, le travail ou d'autres activités.",
            },
            history: {
                label: "Historique",
                title: "Chaque session enregistrée",
                description: "Consultez ce sur quoi vous avez travaillé, quand et pendant combien de temps. Gardez un historique précis.",
            },
            goals: {
                label: "Objectifs",
                title: "Transformez le temps en progrès",
                description: "Définissez des objectifs de temps ou de revenus pour rester motivé et valoriser votre concentration.",
            },
            insights: {
                label: "Aperçus",
                title: "Découvrez vos habitudes",
                description: "Les heatmaps d'activité et les graphiques hebdomadaires permettent d'identifier facilement vos moments les plus productifs.",
            },
        },
    },
    supporting: {
        title: "Tout le reste dont vous avez besoin",
        subtitle: "Des fonctionnalités conçues pour fonctionner ensemble.",
        items: [
            { icon: "widgets", title: "Widgets et Live Activity", desc: "Commencez ou arrêtez le travail sans ouvrir l'application." },
            { icon: "watch", title: "Synchronisation Apple Watch", desc: "Vos sessions et objectifs se synchronisent automatiquement avec la montre." },
            { icon: "sound", title: "Sons d'ambiance", desc: "Pluie, océan, café, forêt et cheminée pour vous aider à vous concentrer." },
            { icon: "goal", title: "Objectifs et revenus", desc: "Fixez des objectifs de temps ou de revenus. Les pourboires sont inclus." },
            { icon: "shift", title: "Planification des shifts", desc: "Planifiez vos prochains shifts, définissez des rappels et gardez votre emploi du temps au même endroit." },
            { icon: "forecast", title: "Prévision de paie", desc: "Anticipez la prochaine paie, suivez le rythme et réconciliez ce que vous avez vraiment gagné." },
        ],
    },
    download: {
        title: "Prêt quand vous l'êtes.",
        subtitle: "Une façon plus calme de commencer, vous concentrer et comprendre votre temps.",
        appStore: "Télécharger sur l'App Store",
        appStoreUrl: "https://apps.apple.com/us/app/focus-mint-focus-timer-study/id6759029810",
        footnote: "iPhone et Apple Watch requis. Les outils de travail avancés se débloquent avec FocusMint Pro.",
    },
    footer: {
        description: "Un minuteur de concentration calme pour iPhone et Apple Watch.",
        product: "Produit",
        support: "Support",
        features: "Fonctions",
        tryDemo: "Essayer le minuteur",
        changelog: "Journal",
        privacy: "Confidentialité",
        terms: "Conditions",
        copyright: "© 2026 FocusMint. Tous droits réservés.",
    },
};
