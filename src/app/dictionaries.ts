import 'server-only';
import type { Dictionary } from '@/dictionaries/en';

const dictionaries = {
    en: () => import('@/dictionaries/en').then((module) => module.en),
    fr: () => import('@/dictionaries/fr').then((module) => module.fr),
    zh: () => import('@/dictionaries/zh').then((module) => module.zh),
};

export const getDictionary = async (locale: keyof typeof dictionaries) => {
    return dictionaries[locale]();
};
