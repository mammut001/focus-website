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
        tryDemo: "体验计时器",
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
        title: "让投入的每一分钟，\n都清晰可见。",
        description: "专注计时、工作记录、目标、收入分析、桌面小组件和 Apple Watch，集中在一个安静清晰的 App 中。",
        appStore: "在 App Store 下载",
        appStoreUrl: "https://apps.apple.com/us/app/focus-mint-focus-timer-study/id6759029810",
        learnMore: "试试 30 秒计时器",
        seeCapabilities: "了解 FocusMint 的功能",
        tags: ["专注计时", "目标与收入", "iPhone + Apple Watch"],
        mockup: {
            timer: "00:30",
            status: "专注中",
            mode: "工作",
            watchTime: "25:00",
            watchMode: "专注",
        },
    },
    story: {
        steps: [
            {
                title: "选择适合你的方式开始。",
                description: "需要结构感时用倒计时，想简单开始就用正计时，长时间工作可以用打卡模式。",
                screenshots: ["home", "modes"],
            },
            {
                title: "每次专注都有记录。",
                description: "回顾你做了什么、花了多久，以及你的专注时间如何累积。",
                screenshots: ["sessions"],
            },
            {
                title: "让时间转化为进步。",
                description: "设定时间或收入目标，追踪进行中和已完成的目标，看清时间投入的价值。",
                screenshots: ["goals", "income-goal"],
            },
            {
                title: "发现时间背后的规律。",
                description: "周视图和热力图让你轻松了解自己的专注模式。",
                screenshots: ["heatmap", "weekly-chart"],
            },
        ],
    },
    ecosystem: {
        title: "专注状态，随身同步。",
        subtitle: "Apple Watch、桌面小组件和实时活动，让专注数据触手可及。",
        tabs: [
            {
                title: "Apple Watch",
                desc: "直接在手表上开始、暂停和查看专注进度与目标。",
                points: [
                    "手腕上开始和停止专注",
                    "查看目标快照",
                    "专注结束触感反馈",
                ],
            },
            {
                title: "桌面小组件",
                desc: "无需打开 App，直接从小组件开始或停止工作，查看实时进度。",
                points: [
                    "从小组件开始和停止",
                    "实时收入和经过时间",
                    "选择工作配置",
                ],
            },
            {
                title: "实时活动",
                desc: "在灵动岛或锁屏上随时查看专注状态。",
                points: [
                    "锁屏实时计时",
                    "灵动岛集成",
                    "快速停止专注",
                ],
            },
        ],
    },
    explorer: {
        title: "探索 App",
        subtitle: "来自 FocusMint 的真实截图。",
        panels: [
            { title: "计时器", desc: "主计时器界面。一键开始专注，切换正计时与倒计时，追踪进度。" },
            { title: "目标", desc: "设定时间或收入目标，追踪进行中、已完成和已失败的目标。" },
            { title: "记录", desc: "查看专注历史，了解你做了什么、花了多久。" },
            { title: "收入", desc: "追踪收入和小费，查看时薪，了解时间的价值。" },
            { title: "洞察", desc: "周视图和热力图揭示你的专注规律。" },
            { title: "手表", desc: "在 Apple Watch 上查看计时器和目标，从手腕开始专注。" },
        ],
    },
    timerDemo: {
        eyebrow: "体验 FocusMint",
        title: "先从一个 30 秒的专注开始。",
        description: "在浏览器中体验最基础的计时流程。",
        start: "开始",
        pause: "暂停",
        resume: "继续",
        reset: "重置",
        done: "完成",
        countdown: "倒计时",
        countUp: "正计时",
        work: "工作",
        study: "学习",
    },
    productGallery: {
        title: "从每一个角度，看清你的时间。",
        subtitle: "开始专注、回顾记录、跟进目标，并发现时间背后的规律。",
        tabs: {
            focus: {
                label: "专注",
                title: "结构化或灵活的专注方式",
                description: "使用倒计时或正计时计时器，配备适合学习、工作或其他活动的专注预设。",
            },
            history: {
                label: "历史",
                title: "记录每一次专注",
                description: "回顾你在何时、专注了什么以及专注了多久。保持你所有付出的准确记录。",
            },
            goals: {
                label: "目标",
                title: "将时间转化为进步",
                description: "设定时间或收入目标，保持动力并看清每次专注的实际价值。",
            },
            insights: {
                label: "洞察",
                title: "发现你的时间规律",
                description: "通过活动热力图和周图表，轻松找出你最具生产力的时间段。",
            },
        },
    },
    supporting: {
        title: "你需要的其他功能",
        subtitle: "精心设计的功能，协同工作。",
        items: [
            { icon: "widgets", title: "小组件与实时活动", desc: "无需打开 App，从主屏幕查看和操作。" },
            { icon: "watch", title: "Apple Watch 同步", desc: "专注记录和目标自动同步到手表。" },
            { icon: "sound", title: "背景白噪音", desc: "雨声、海浪、咖啡馆、森林和壁炉环境音。" },
            { icon: "goal", title: "目标与收入", desc: "设定时间或收入目标，小费也计入进展。" },
            { icon: "tip", title: "小费与打卡", desc: "记录小费并纳入收入统计，长时间工作使用打卡模式。" },
            { icon: "export", title: "CSV 导出", desc: "导出专注记录和收入数据到 CSV。" },
        ],
    },
    download: {
        title: "准备好了？",
        subtitle: "一种更安静的方式，开始专注并了解你的时间。",
        appStore: "在 App Store 下载",
        appStoreUrl: "https://apps.apple.com/us/app/focus-mint-focus-timer-study/id6759029810",
        footnote: "需配备 iPhone 和 Apple Watch。",
    },
    footer: {
        description: "一款安静、简单的专注计时器，适用于 iPhone 和 Apple Watch。",
        product: "产品",
        support: "支持",
        features: "功能",
        tryDemo: "体验计时器",
        changelog: "更新日志",
        privacy: "隐私政策",
        terms: "服务条款",
        copyright: "© 2026 FocusMint. 保留所有权利。",
    },
};
