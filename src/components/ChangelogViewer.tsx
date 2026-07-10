'use client';

import { useState, useEffect, useMemo } from 'react';
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
                if ('tag_name' in jsonData[0]) {
                    setType('releases');
                } else {
                    setType('commits');
                }
            } else {
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
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl md:text-4xl font-semibold text-text-primary">
                        {dict.title}
                    </h1>
                    <p className="text-text-secondary mt-2">{dict.description}</p>
                </div>

                <div className="min-h-[400px]">
                    {loading ? (
                        <div className="flex items-center justify-center h-40">
                            <div className="w-6 h-6 border-2 border-brand border-t-transparent rounded-full animate-spin" />
                            <span className="ml-3 text-text-secondary text-sm">{dict.loading}</span>
                        </div>
                    ) : error ? (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center text-red-600 text-sm">
                            <p>{error}</p>
                        </div>
                    ) : data.length === 0 ? (
                        <div className="text-center text-text-tertiary py-12 text-sm">
                            {dict.noReleases}
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="flex items-center justify-between text-sm text-text-tertiary pb-4 border-b border-border">
                                <span>{type === 'releases' ? dict.releases : dict.commits}</span>
                            </div>

                            {data.map((item, index) => {
                                const isRelease = type === 'releases';
                                const release = item as Release;
                                const commit = item as Commit;

                                return (
                                    <div
                                        key={isRelease ? release.id : commit.sha}
                                        className="bg-surface border border-border rounded-xl p-6 hover:border-border-strong transition-colors"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                            <div className="flex-1">
                                                {isRelease ? (
                                                    <>
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <h3 className="text-xl font-semibold text-text-primary">
                                                                {release.name || release.tag_name}
                                                            </h3>
                                                            <span className="px-2 py-0.5 text-xs font-medium bg-brand-soft text-brand-dark rounded-full">
                                                                {release.tag_name}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm text-text-secondary whitespace-pre-wrap leading-relaxed">
                                                            {release.body}
                                                        </p>
                                                    </>
                                                ) : (
                                                    <>
                                                        <p className="text-text-primary text-sm font-mono mb-2 break-all">
                                                            {commit.commit.message.split('\n')[0]}
                                                        </p>
                                                        {commit.commit.message.split('\n').length > 1 && (
                                                             <p className="text-text-tertiary text-xs mt-1 line-clamp-2">
                                                                {commit.commit.message.split('\n').slice(1).join(' ')}
                                                             </p>
                                                        )}
                                                        <div className="flex items-center gap-2 mt-3 text-xs text-text-tertiary">
                                                            <span className="font-medium text-text-secondary">{commit.commit.author.name}</span>
                                                            <span>·</span>
                                                            <span className="font-mono">{commit.sha.substring(0, 7)}</span>
                                                        </div>
                                                    </>
                                                )}
                                            </div>

                                            <div className="flex flex-col items-start md:items-end gap-2 min-w-fit">
                                                <time className="text-sm text-text-tertiary">
                                                    {formatDate(isRelease ? release.published_at : commit.commit.author.date)}
                                                </time>
                                                <a
                                                    href={item.html_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-3 py-1 text-xs font-medium text-text-secondary hover:text-text-primary bg-black/5 hover:bg-black/10 rounded-lg transition-colors"
                                                >
                                                    {dict.viewOnGitHub}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
