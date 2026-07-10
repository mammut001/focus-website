import { Dictionary } from './en';

export const zh: Dictionary = {
    metadata: {
        title: "FocusMint — 专注计时、目标追踪与收入分析 | iPhone & Apple Watch",
        description: "FocusMint 是一款为 iPhone 和 Apple Watch 设计的专注计时应用，支持目标生命周期追踪、收入分析、小费记录、打卡模式和背景白噪音。",
        ogTitle: "FocusMint — 专注计时、目标与收入",
        ogDescription: "iPhone + Apple Watch 专注计时，目标生命周期，收入分析，小费追踪，打卡",
    },
    navbar: {
        focus: "FocusMint",
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
        badge: "iPhone + Apple Watch",
        title: "FocusMint",
        tagline: "专注力，从此不同",
        description: "为 iPhone 和 Apple Watch 打造的强大专注计时器，\n支持目标追踪、收入分析、小费记录和打卡模式",
        appStore: "App Store",
        learnMore: "了解更多",
        mockup: {
            timer: "25:00",
            status: "专注中",
            mode: "工作模式",
            watchTime: "15:00",
            watchMode: "学习",
        },
    },
    features: {
        title: "功能亮点",
        subtitle: "专为高效人士打造的专注工具，让每一次专注都有价值",
        items: {
            dualMode: {
                title: "双模计时",
                desc: "正计时和倒计时两种模式，灵活切换，适配不同专注场景",
            },
            stats: {
                title: "智能统计",
                desc: "周视图仪表盘，柱状图和模式分布，数据一目了然",
            },
            earnings: {
                title: "收入分析",
                desc: "基础收入与小费明细，有效时薪，最佳日/周表现，月度对比",
            },
            watch: {
                title: "Apple Watch",
                desc: "手腕上的专注力，打卡控制、目标快照、Digital Crown、触感反馈",
            },
            goalsLifecycle: {
                title: "目标生命周期",
                desc: "追踪进行中、已完成和已失败的目标。智能优先级排序，时间与收入目标",
            },
            bilingual: {
                title: "多语言",
                desc: "中文、英文、法语无缝切换，跨国使用无障碍",
            },
            notifications: {
                title: "通知提醒",
                desc: "倒计时完成通知。最后 1 分钟/30 秒触感警告。背景白噪音",
            },
            tips: {
                title: "小费记录",
                desc: "按天、周或发薪周期记录小费。按会话分配或按日期归整",
            },
            clockIn: {
                title: "打卡模式",
                desc: "实时工作时间记录器，即时收入计数器。支持灵动岛实时活动，完成时提示小费录入",
            },
            sounds: {
                title: "背景白噪音",
                desc: "雨声、海浪、咖啡馆、森林和壁炉等环境音效，提升专注力",
            },
            export: {
                title: "数据导出",
                desc: "导出专注数据到 CSV，完全掌控你的数据",
            },
        },
    },
    howItWorks: {
        title: "简单三步",
        subtitle: "立即开始你的专注之旅",
        steps: {
            step1: {
                title: "选择模式",
                desc: "从学习、工作、自定义模式中选择，或使用打卡模式",
            },
            step2: {
                title: "开始专注",
                desc: "使用正计时、倒计时或打卡模式追踪时间",
            },
            step3: {
                title: "设定目标",
                desc: "创建时间或收入目标，追踪进行中、已完成和已失败的进度",
            },
            step4: {
                title: "查看洞察",
                desc: "在仪表盘查看收入分析、小费明细和智能统计",
            },
        },
    },
    gallery: {
        title: "截图展示",
        subtitle: "精美的界面设计",
        items: {
            main: {
                title: "主界面",
                desc: "简洁优雅的计时器",
                ui: {
                    time: "25:00",
                    status: "专注中",
                    pause: "暂停",
                    stop: "停止",
                },
            },
            watch: {
                title: "Apple Watch",
                desc: "手腕上的专注力",
                ui: { time: "15:00", mode: "学习模式" },
            },
            stats: {
                title: "数据仪表盘",
                desc: "周视图和统计",
                ui: {
                    period: "本周专注",
                    total: "12.5h",
                    trend: "+15% vs 上周",
                },
            },
            income: {
                title: "收入追踪",
                desc: "时薪自动计算",
                ui: {
                    period: "本月收入",
                    rate: "¥80/h × 41h",
                    work: "工作",
                    study: "学习",
                },
            },
            goals: {
                title: "目标生命周期",
                desc: "追踪进行中、已完成和已失败的目标",
                ui: {
                    active: "进行中",
                    completed: "已完成",
                    missed: "已失败",
                    deadline: "3天后截止",
                },
            },
            tips: {
                title: "小费记录",
                desc: "按灵活周期记录小费",
                ui: {
                    period: "本发薪周期",
                    today: "今天",
                    thisWeek: "本周",
                    allocation: "按会话分配",
                },
            },
        },
    },
    stats: {
        title: "数字证明",
        subtitle: "来自用户的真实数据",
        items: {
            users: { label: "活跃用户", suffix: "+" },
            sessions: { label: "专注会话", suffix: "+" },
            hours: { label: "专注时长", suffix: "h+" },
            rating: { label: "App 评分", suffix: "" },
        },
    },
    download: {
        title: "立即下载",
        subtitle: "开启你的专注之旅，让每一分钟都有价值",
        appStore: "App Store",
        comingSoon: "即将上线 App Store · 敬请期待",
    },
    footer: {
        privacy: "隐私政策",
        terms: "服务条款",
        copyright: "© 2026 FocusMint. All rights reserved.",
    },
};
