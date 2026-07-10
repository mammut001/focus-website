'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'zh', label: '中文' },
];

interface LanguageSwitcherProps {
    onLanguageChange?: () => void;
    isMobile?: boolean;
}

export default function LanguageSwitcher({ onLanguageChange, isMobile = false }: LanguageSwitcherProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLang = pathname?.split('/')[1] || 'en';

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    const switchLanguage = (langCode: string) => {
        let newPath: string;
        if (!pathname || pathname === '/' || pathname === '') {
            newPath = `/${langCode}`;
        } else if (['en', 'zh', 'fr'].includes(pathname.split('/')[1])) {
            const segments = pathname.split('/');
            segments[1] = langCode;
            newPath = segments.join('/');
        } else {
            newPath = `/${langCode}${pathname}`;
        }
        router.push(newPath);
        setIsOpen(false);
        if (onLanguageChange) onLanguageChange();
    };

    const currentLangInfo = languages.find(l => l.code === currentLang) || languages[0];

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 px-2.5 py-1.5 text-sm font-medium text-text-secondary hover:text-text-primary rounded-lg hover:bg-black/5 transition-colors min-h-[36px]"
                aria-label="Switch language"
            >
                <span>{currentLangInfo.label}</span>
                <svg
                    className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                    <div className={`absolute ${isMobile ? 'left-0' : 'right-0'} top-full mt-2 w-20 py-1 rounded-xl bg-white border border-border shadow-medium z-50 overflow-hidden`}>
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => switchLanguage(lang.code)}
                                className={`w-full px-3 py-2 text-sm text-left hover:bg-black/5 transition-colors ${currentLang === lang.code ? 'text-brand font-semibold bg-brand-soft/50' : 'text-text-secondary'}`}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
