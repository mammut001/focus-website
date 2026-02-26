'use client';

import { useState, useEffect } from 'react';
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
    const [repoInput, setRepoInput] = useState('mammut001/FocusApp');
    const [repoName, setRepoName] = useState('mammut001/FocusApp');
    const [data, setData] = useState<(Release | Commit)[]>([]);
    const [type, setType] = useState<'releases' | 'commits'>('releases');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchData(repoName);
    }, [repoName]);

    const fetchData = async (repo: string) => {
        setLoading(true);
        setError('');
        setData([]);

        try {
            // Try fetching releases first
            const releasesRes = await fetch(`https://api.github.com/repos/${repo}/releases`);
            if (releasesRes.ok) {
                const releases = await releasesRes.json();
                if (releases.length > 0) {
                    setData(releases);
                    setType('releases');
                    setLoading(false);
                    return;
                }
            }

            // If no releases or 404, try commits
            const commitsRes = await fetch(`https://api.github.com/repos/${repo}/commits`);
            if (commitsRes.ok) {
                const commits = await commitsRes.json();
                setData(commits);
                setType('commits');
            } else {
                setError(dict.error);
            }
        } catch (err) {
            setError(dict.error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (repoInput.trim()) {
            setRepoName(repoInput.trim());
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
            >
                {/* Header & Input */}
                <div className="flex flex-col md:flex-row gap-6 items-end md:items-center justify-between">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                            {dict.title}
                        </h1>
                        <p className="text-white/60 mt-2">{dict.description}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full md:w-auto">
                        <label className="text-sm font-medium text-white/70">{dict.repoLabel}</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={repoInput}
                                onChange={(e) => setRepoInput(e.target.value)}
                                placeholder={dict.placeholder}
                                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-64"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                            >
                                Go
                            </button>
                        </div>
                    </form>
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
                            {/* Suggestion if the repo name looks like it might have a typo or if it's the default one */}
                            {repoName === 'mammut001/FocusApp' && (
                                <p className="mt-2 text-sm text-red-200/60">
                                    Tip: Try <strong>mammut001/Focus</strong> if the default doesn't work.
                                </p>
                            )}
                        </div>
                    ) : data.length === 0 ? (
                        <div className="text-center text-white/40 py-12">
                            {dict.noReleases}
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="flex items-center justify-between text-sm text-white/40 pb-4 border-b border-white/10">
                                <span>{type === 'releases' ? dict.releases : dict.commits}</span>
                                <a
                                    href={`https://github.com/${repoName}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-indigo-400 transition-colors"
                                >
                                    {dict.viewOnGitHub} &rarr;
                                </a>
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
