'use client';

import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const languages = [
    { code: 'en', label: 'EN' },
    { code: 'zh', label: '中' },
    { code: 'fr', label: 'FR' },
];

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Current language code from pathname (e.g. /en/...)
    const currentLang = pathname?.split('/')[1] || 'zh';

    useEffect(() => {
        // Close dropdown when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const switchLanguage = (langCode: string) => {
        if (!pathname) return;
        
        // Handle different path formats
        let newPath: string;
        if (pathname === '/' || pathname === '') {
            newPath = `/${langCode}`;
        } else if (pathname.startsWith('/en') || pathname.startsWith('/zh') || pathname.startsWith('/fr')) {
            const segments = pathname.split('/');
            segments[1] = langCode;
            newPath = segments.join('/');
        } else {
            newPath = `/${langCode}${pathname}`;
        }
        
        router.push(newPath);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                }}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors min-w-[44px] min-h-[44px] flex justify-center"
            >
                <span className="text-base">{languages.find(l => l.code === currentLang)?.label || '中'}</span>
                <svg
                    className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-24 py-1 rounded-xl bg-[hsl(225,25%,12%)] border border-white/[0.08] shadow-xl z-50 overflow-hidden"
                >
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={(e) => {
                                e.stopPropagation();
                                switchLanguage(lang.code);
                            }}
                            className={`w-full px-4 py-3 text-base text-left hover:bg-white/[0.08] transition-colors flex items-center gap-2 ${
                                currentLang === lang.code 
                                    ? 'text-white font-semibold bg-white/[0.04]' 
                                    : 'text-white/60'
                            }`}
                        >
                            <span>{lang.label}</span>
                            <span className="text-xs text-white/40">{lang.code.toUpperCase()}</span>
                        </button>
                    ))}
                </motion.div>
            )}
        </div>
    );
}
