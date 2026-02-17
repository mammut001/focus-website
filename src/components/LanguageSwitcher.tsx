'use client';

import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const languages = [
    { code: 'en', label: 'EN' },
    { code: 'zh', label: '中' },
    { code: 'fr', label: 'FR' },
];

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    // Current language code from pathname (e.g. /en/...)
    const currentLang = pathname.split('/')[1] || 'en';

    const switchLanguage = (langCode: string) => {
        if (!pathname) return;
        const segments = pathname.split('/');
        segments[1] = langCode;
        const newPath = segments.join('/');
        router.push(newPath);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
            >
                <span>{languages.find(l => l.code === currentLang)?.label || 'EN'}</span>
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
                <>
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsOpen(false)}
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-2 w-20 py-1 rounded-xl bg-[hsl(225,25%,12%)] border border-white/[0.08] shadow-xl z-20 overflow-hidden"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => switchLanguage(lang.code)}
                                className={`w-full px-4 py-2 text-sm text-left hover:bg-white/[0.08] transition-colors ${currentLang === lang.code ? 'text-white font-semibold bg-white/[0.04]' : 'text-white/60'
                                    }`}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </motion.div>
                </>
            )}
        </div>
    );
}
