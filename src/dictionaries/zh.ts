import { Dictionary } from './en';

export const zh: Dictionary = {
    metadata: {
        title: "FocusMint — 专注计时器 | iPhone & Apple Watch",
        description: "一款安静、简单的专注计时器，适用于 iPhone 和 Apple Watch。记录每次投入，追踪进展，看清时间的去向。",
        ogTitle: "FocusMint — 专注计时器",
        ogDescription: "iPhone + Apple Watch 专注计时器，记录专注时间，追踪习惯与进展。",
    },
    navbar: {
        features: "功能",
        howItWorks: "使用方法",
        download: "下载",
        changelog: "更新日志",
    },
    changelogPage: {
        title: "更新日志",
        description: "关注最新更新和改进。",
        loading: "加载中...",
        error: "加载失败。请稍后再试。",
        noReleases: "未找到版本。",
        releases: "版本",
        commits: "提交",
        viewOnGitHub: "在 GitHub 上查看",
    },
    hero: {
        badge: "为 iPhone 和 Apple Watch 打造的专注计时器",
        title: "专注于当下，\n时间交给我们。",
        description: "一款安静、简单的专注计时器，帮助你记录每次投入，看清时间去向，不被多余功能打扰。",
        appStore: "即将登陆 App Store",
        appStoreUrl: "#",
        learnMore: "了解详情",
        mockup: {
            timer: "25:00",
            status: "专注中",
            mode: "工作模式",
            watchTime: "25:00",
            watchMode: "专注",
        },
    },
    productStatement: {
        line: "FocusMint 的目的，是帮助你{brand}，而不是让你维护另一套复杂系统。",
        brandWord: "开始",
    },
    features: {
        title: "你需要的一切，仅此而已",
        subtitle: "每个功能只有一个目标：帮你专注，不添乱。",
        main: [
            {
                title: "无需复杂设置，立即开始。",
                description: "选择模式，点击一下，开始工作。需要结构感时用倒计时，只想开始计时就用正计时。",
                points: [
                    "正计时与倒计时两种模式",
                    "一键开启专注",
                    "专注于任务，而非应用本身",
                ],
                mockupIcon: "timer",
                bg: "default",
            },
            {
                title: "计时器就在你手腕上。",
                description: "无需拿起手机，在 Apple Watch 上即可开始、暂停和查看专注进度，数据自动同步。",
                points: [
                    "手表端开始与停止",
                    "专注结束触感提醒",
                    "目标进度一目了然",
                ],
                mockupIcon: "watch",
                bg: "brand",
            },
            {
                title: "看清你的时间去向。",
                description: "回顾每次专注，了解你的习惯，看到时间的价值。周统计、收入分析、目标进度，一个地方全部呈现。",
                points: [
                    "每周专注概览",
                    "收入与小费记录",
                    "目标进展与历史",
                ],
                mockupIcon: "stats",
                bg: "default",
            },
        ],
        grid: [
            { icon: "clock", title: "双模计时", desc: "正计时和倒计时，切换自如。" },
            { icon: "check", title: "目标追踪", desc: "设定时间或收入目标，随时查看进展。" },
            { icon: "dollar", title: "收入记录", desc: "追踪每小时收入和每次小费。" },
            { icon: "chart", title: "数据统计", desc: "周视图图表、模式分布和趋势。" },
            { icon: "bell", title: "通知提醒", desc: "结束时提醒和触感警告。" },
            { icon: "play", title: "打卡模式", desc: "实时计时，即时收入计算。" },
            { icon: "sound", title: "背景白噪音", desc: "雨声、海浪、咖啡馆、森林。" },
            { icon: "globe", title: "多语言", desc: "中文、英文、法文界面。" },
            { icon: "download", title: "数据导出", desc: "导出专注数据到 CSV。" },
        ],
    },
    howItWorks: {
        title: "简单设计，三步上手",
        subtitle: "没有多余步骤，开始就这么简单。",
        steps: {
            step1: {
                title: "选择适合的方式",
                desc: "用倒计时给自己节奏感，或用正计时随意开始。",
            },
            step2: {
                title: "进入专注状态",
                desc: "FocusMint 安静记录，不打扰你的工作或学习。",
            },
            step3: {
                title: "清晰回顾",
                desc: "查看专注记录，了解你的时间如何变化。",
            },
        },
    },
    gallery: {
        title: "应用预览",
        subtitle: "来自应用的真实截图。",
        tabLabels: {
            timer: "计时器",
            watch: "手表",
            stats: "统计",
            goals: "目标",
            earnings: "收入",
        },
        items: {
            timer: {
                title: "计时器",
                desc: "干净、简洁、一目了然。",
                ui: {
                    time: "25:00",
                    status: "专注中",
                    pause: "暂停",
                    stop: "停止",
                },
            },
            watch: {
                title: "Apple Watch",
                desc: "手腕上的专注伴侣。",
                ui: { time: "25:00", mode: "专注" },
            },
            stats: {
                title: "数据概览",
                desc: "每周专注时间一目了然。",
                ui: {
                    period: "本周",
                    total: "12.5h",
                    trend: "+15% vs 上周",
                },
            },
            goals: {
                title: "目标追踪",
                desc: "进行中、已完成和已失败的目标。",
                ui: {
                    active: "进行中",
                    completed: "已完成",
                    missed: "已失败",
                    deadline: "3天后截止",
                },
            },
            earnings: {
                title: "收入记录",
                desc: "追踪你的时间价值。",
                ui: {
                    period: "本月",
                    rate: "¥80/h × 41h",
                    work: "工作",
                    study: "学习",
                },
            },
        },
    },
    download: {
        title: "准备好了？",
        subtitle: "一种更安静的方式，开始专注，了解你的时间。",
        appStore: "即将登陆 App Store",
        appStoreUrl: "#",
        footnote: "需配备 iPhone 和 Apple Watch。",
    },
    footer: {
        description: "一款安静、简单的专注计时器，适用于 iPhone 和 Apple Watch。",
        product: "产品",
        support: "支持",
        features: "功能",
        howItWorks: "使用方法",
        changelog: "更新日志",
        privacy: "隐私政策",
        terms: "服务条款",
        copyright: "© 2026 FocusMint. 保留所有权利。",
    },
};
