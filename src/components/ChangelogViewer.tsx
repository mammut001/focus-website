'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Dictionary } from '@/dictionaries/en';

type ChangelogViewerProps = {
    dict: Dictionary['changelogPage'];
};

type Release = {
    id: number;
    name: string;
    tag_name: string;
    published_at: string;
    body: string;
    html_url: string;
};

type Commit = {
    sha: string;
    commit: {
        message: string;
        author: {
            name: string;
            date: string;
        };
    };
    html_url: string;
};

export default function ChangelogViewer({ dict }: ChangelogViewerProps) {
    const [data, setData] = useState<(Release | Commit)[]>([]);
    const [type, setType] = useState<'releases' | 'commits'>('releases');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        setError('');
        setData([]);

        try {
            // Determine basePath based on environment
            // In production export, we expect the base path to be /focus-website
            // But we should try to detect it or use a relative path that works for both.
            // Since the file is in public/data/changelog.json, a relative fetch from current page might be tricky if routes are nested.
            // However, /data/changelog.json (absolute path relative to domain root) works if deployed at root.
            // If deployed at /focus-website/, we need /focus-website/data/changelog.json.

            let dataUrl = '/data/changelog.json';
            if (process.env.NODE_ENV === 'production') {
                dataUrl = '/focus-website/data/changelog.json';
            }

            const res = await fetch(dataUrl);
            if (!res.ok) {
                 throw new Error('Failed to load changelog');
            }
            const jsonData = await res.json();

            if (Array.isArray(jsonData) && jsonData.length > 0) {
                setData(jsonData);
                // Simple heuristic to guess type: releases have 'tag_name', commits have 'sha'
                if ('tag_name' in jsonData[0]) {
                    setType('releases');
                } else {
                    setType('commits');
                }
            } else {
                // Empty array or invalid data
                setData([]);
            }
        } catch (err) {
            console.error(err);
            setError(dict.error);
        } finally {
            setLoading(false);
        }
    };

    const dateFormatter = useMemo(() => new Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }), []);

    const formatDate = (dateString: string) => {
        return dateFormatter.format(new Date(dateString));
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
            >
                {/* Header */}
                <div className="flex flex-col md:flex-row gap-6 items-end md:items-center justify-between">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                            {dict.title}
                        </h1>
                        <p className="text-white/60 mt-2">{dict.description}</p>
                    </div>
                </div>

                {/* Content */}
                <div className="min-h-[400px]">
                    {loading ? (
                        <div className="flex justify-center items-center h-40">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500" />
                            <span className="ml-3 text-white/60">{dict.loading}</span>
                        </div>
                    ) : error ? (
                        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-center text-red-200">
                            <p>{error}</p>
                        </div>
                    ) : data.length === 0 ? (
                        <div className="text-center text-white/40 py-12">
                            {dict.noReleases}
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="flex items-center justify-between text-sm text-white/40 pb-4 border-b border-white/10">
                                <span>{type === 'releases' ? dict.releases : dict.commits}</span>
                            </div>

                            {data.map((item, index) => {
                                const isRelease = type === 'releases';
                                const release = item as Release;
                                const commit = item as Commit;

                                return (
                                    <motion.div
                                        key={isRelease ? release.id : commit.sha}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.05] transition-colors"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                            <div className="flex-1">
                                                {isRelease ? (
                                                    <>
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <h3 className="text-xl font-bold text-white">
                                                                {release.name || release.tag_name}
                                                            </h3>
                                                            <span className="px-2 py-0.5 text-xs font-medium bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
                                                                {release.tag_name}
                                                            </span>
                                                        </div>
                                                        <div className="prose prose-invert prose-sm max-w-none text-white/70 whitespace-pre-wrap font-sans">
                                                            {release.body}
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <p className="text-white/80 font-mono text-sm mb-2 break-all">
                                                            {commit.commit.message.split('\n')[0]}
                                                        </p>
                                                        {commit.commit.message.split('\n').length > 1 && (
                                                             <p className="text-white/50 text-xs mt-1 line-clamp-2">
                                                                {commit.commit.message.split('\n').slice(1).join(' ')}
                                                             </p>
                                                        )}
                                                        <div className="flex items-center gap-2 mt-3 text-xs text-white/40">
                                                            <span className="font-medium text-white/60">{commit.commit.author.name}</span>
                                                            <span>•</span>
                                                            <span className="font-mono">{commit.sha.substring(0, 7)}</span>
                                                        </div>
                                                    </>
                                                )}
                                            </div>

                                            <div className="flex flex-col items-start md:items-end gap-2 min-w-fit">
                                                <time className="text-sm text-white/40">
                                                    {formatDate(isRelease ? release.published_at : commit.commit.author.date)}
                                                </time>
                                                <a
                                                    href={item.html_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-3 py-1 text-xs font-medium bg-white/5 hover:bg-white/10 text-white/60 hover:text-white rounded-lg transition-colors"
                                                >
                                                    View
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
