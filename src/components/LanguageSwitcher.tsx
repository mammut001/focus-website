'use client';

import { usePathname, useRouter } from 'next/navigation';

const languages = [
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'fr', label: 'FR', flag: '🇫🇷' },
];

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    
    // Get current language from pathname
    const currentLang = pathname?.split('/')[1] || 'zh';

    const switchLanguage = (langCode: string) => {
        let newPath: string;
        
        if (!pathname || pathname === '/' || pathname === '') {
            newPath = `/${langCode}`;
        } else if (['en', 'zh', 'fr'].includes(pathname.split('/')[1])) {
            // Replace existing language prefix
            const segments = pathname.split('/');
            segments[1] = langCode;
            newPath = segments.join('/');
        } else {
            // Add language prefix
            newPath = `/${langCode}${pathname}`;
        }
        
        router.push(newPath);
    };

    return (
        <div className="flex items-center gap-1">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => switchLanguage(lang.code)}
                    className={`
                        px-3 py-2 rounded-lg text-sm font-medium transition-all min-h-[44px] min-w-[44px]
                        ${currentLang === lang.code 
                            ? 'bg-white/15 text-white border border-white/20' 
                            : 'text-white/50 hover:text-white hover:bg-white/[0.06]'
                        }
                    `}
                >
                    <span className="text-base mr-1">{lang.flag}</span>
                    <span>{lang.label}</span>
                </button>
            ))}
        </div>
    );
}
