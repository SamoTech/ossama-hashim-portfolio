import { useEffect, useState } from 'react';
import {
  Github,
  Star,
  GitFork,
  Users,
  BookMarked,
  ExternalLink,
  RefreshCw,
} from 'lucide-react';

type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  url: string;
};

type LanguageStat = {
  name: string;
  count: number;
};

type GitHubStatsData = {
  repos: number;
  stars: number;
  forks: number;
  followers: number;
  topRepos: Repo[];
  languages: LanguageStat[];
  /** ISO timestamp of the live fetch, or null when showing fallback figures. */
  fetchedAt: string | null;
  live: boolean;
};

/**
 * Last-known figures, verified against the public GitHub API on Nov 24, 2026.
 * Shown ONLY if the live API request fails — the section always tries the
 * live API first. The public API without auth returns public repos only,
 * so no private repository is ever listed here.
 */
const FALLBACK: GitHubStatsData = {
  repos: 44,
  stars: 62,
  forks: 15,
  followers: 258,
  topRepos: [
    {
      name: 'mikrotik-blocker',
      description:
        'Production-ready web app to block websites on MikroTik routers using IP address lists.',
      language: 'JavaScript',
      stars: 7,
      forks: 0,
      url: 'https://github.com/SamoTech/mikrotik-blocker',
    },
    {
      name: 'stalker-to-m3u',
      description:
        'Convert Stalker/Ministra IPTV portal (MAC-based) to M3U playlist.',
      language: 'Python',
      stars: 5,
      forks: 6,
      url: 'https://github.com/SamoTech/stalker-to-m3u',
    },
    {
      name: 'skills-tree',
      description:
        'The universal, platform-agnostic skills and capability registry for AI agents.',
      language: 'Python',
      stars: 4,
      forks: 3,
      url: 'https://github.com/SamoTech/skills-tree',
    },
    {
      name: 'DRIXL',
      description:
        'Compressed inter-agent communication protocol for multi-agent AI systems.',
      language: 'Python',
      stars: 3,
      forks: 1,
      url: 'https://github.com/SamoTech/DRIXL',
    },
    {
      name: 'samotech-iptv-player',
      description:
        'A modern IPTV player — M3U playlists, EPG, and streaming protocols.',
      language: 'Python',
      stars: 3,
      forks: 0,
      url: 'https://github.com/SamoTech/samotech-iptv-player',
    },
    {
      name: 'Farik',
      description: 'Free open-source HR for growing teams.',
      language: 'JavaScript',
      stars: 3,
      forks: 3,
      url: 'https://github.com/SamoTech/Farik',
    },
  ],
  languages: [
    { name: 'Python', count: 17 },
    { name: 'TypeScript', count: 8 },
    { name: 'JavaScript', count: 6 },
    { name: 'HTML', count: 5 },
    { name: 'Kotlin', count: 1 },
    { name: 'Shell', count: 1 },
    { name: 'Dart', count: 1 },
    { name: 'PHP', count: 1 },
  ],
  fetchedAt: null,
  live: false,
};

const LANG_COLORS: Record<string, string> = {
  Python: '#3572A5',
  TypeScript: '#3178C6',
  JavaScript: '#F1E05A',
  HTML: '#E34C26',
  Kotlin: '#A97BFF',
  Shell: '#89E051',
  Dart: '#00B4AB',
  PHP: '#4F5D95',
  CSS: '#663399',
  Java: '#B07219',
  'C++': '#F34B7D',
  Go: '#00ADD8',
  Rust: '#DEA584',
};

function langColor(language: string | null): string {
  if (!language) return '#94A3B8';
  return LANG_COLORS[language] ?? '#64748B';
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStatsData | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/SamoTech'),
          fetch(
            'https://api.github.com/users/SamoTech/repos?per_page=100&sort=updated',
          ),
        ]);
        if (!userRes.ok || !reposRes.ok) {
          throw new Error('GitHub API unavailable');
        }
        const user = await userRes.json();
        const repos = await reposRes.json();
        if (!Array.isArray(repos)) {
          throw new Error('Unexpected GitHub API response');
        }

        const sorted = [...repos].sort(
          (a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0),
        );
        const langCounts = new Map<string, number>();
        repos.forEach((r) => {
          if (r.language) {
            langCounts.set(r.language, (langCounts.get(r.language) ?? 0) + 1);
          }
        });
        const languages: LanguageStat[] = [...langCounts.entries()]
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count);

        if (!cancelled) {
          setStats({
            repos: user.public_repos ?? repos.length,
            stars: repos.reduce((s, r) => s + (r.stargazers_count ?? 0), 0),
            forks: repos.reduce((s, r) => s + (r.forks_count ?? 0), 0),
            followers: user.followers ?? 0,
            topRepos: sorted.slice(0, 6).map((r) => ({
              name: r.name,
              description: r.description,
              language: r.language,
              stars: r.stargazers_count ?? 0,
              forks: r.forks_count ?? 0,
              url: r.html_url,
            })),
            languages,
            fetchedAt: new Date().toISOString(),
            live: true,
          });
        }
      } catch {
        if (!cancelled) {
          setStats(FALLBACK);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const maxLang = stats ? Math.max(1, ...stats.languages.map((l) => l.count)) : 1;

  return (
    <section id="github" className="scroll-mt-24 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm uppercase tracking-wider">
            <Github size={16} />
            <span>GitHub</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mt-1">
            Open Source, by the Numbers
          </h2>
        </div>
        <a
          href="https://github.com/SamoTech"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium shadow-sm transition-all shrink-0"
        >
          <Github size={16} />
          <span>@SamoTech on GitHub</span>
          <ExternalLink size={14} />
        </a>
      </div>

      {stats === null ? (
        <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs flex items-center justify-center gap-3 text-slate-500">
          <RefreshCw size={18} className="animate-spin" />
          <span className="text-sm font-medium">Loading live GitHub stats…</span>
        </div>
      ) : (
        <>
          {/* Headline stat tiles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <BookMarked size={20} />
              </div>
              <p className="mt-3 text-3xl font-extrabold text-slate-900">{stats.repos}</p>
              <p className="text-xs font-medium text-slate-500 mt-1">Public Repositories</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Star size={20} />
              </div>
              <p className="mt-3 text-3xl font-extrabold text-slate-900">{stats.stars}</p>
              <p className="text-xs font-medium text-slate-500 mt-1">Total Stars</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <GitFork size={20} />
              </div>
              <p className="mt-3 text-3xl font-extrabold text-slate-900">{stats.forks}</p>
              <p className="text-xs font-medium text-slate-500 mt-1">Total Forks</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Users size={20} />
              </div>
              <p className="mt-3 text-3xl font-extrabold text-slate-900">{stats.followers}</p>
              <p className="text-xs font-medium text-slate-500 mt-1">Followers</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Most-starred repos */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <h3 className="font-bold text-slate-900">Most Starred Repositories</h3>
              <ul className="mt-4 space-y-4">
                {stats.topRepos.map((repo) => (
                  <li key={repo.name} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
                    >
                      <span>{repo.name}</span>
                      <ExternalLink size={12} />
                    </a>
                    {repo.description && (
                      <p className="text-slate-600 text-sm leading-relaxed mt-1">
                        {repo.description}
                      </p>
                    )}
                    <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                      {repo.language && (
                        <span className="inline-flex items-center gap-1.5">
                          <span
                            className="w-2.5 h-2.5 rounded-full inline-block"
                            style={{ backgroundColor: langColor(repo.language) }}
                          />
                          {repo.language}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1">
                        <Star size={12} className="text-amber-500" />
                        {repo.stars}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <GitFork size={12} />
                        {repo.forks}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top languages */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <h3 className="font-bold text-slate-900">Top Languages</h3>
              <p className="text-slate-500 text-sm mt-1">
                By number of public repositories
              </p>
              <ul className="mt-5 space-y-4">
                {stats.languages.slice(0, 8).map((lang) => (
                  <li key={lang.name}>
                    <div className="flex items-center justify-between text-sm mb-1.5">
                      <span className="inline-flex items-center gap-2 font-medium text-slate-700">
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block"
                          style={{ backgroundColor: langColor(lang.name) }}
                        />
                        {lang.name}
                      </span>
                      <span className="text-slate-500 font-mono text-xs">
                        {lang.count} {lang.count === 1 ? 'repo' : 'repos'}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${Math.round((lang.count / maxLang) * 100)}%`,
                          backgroundColor: langColor(lang.name),
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Freshness note */}
          <p className="text-center text-xs text-slate-400">
            {stats.live && stats.fetchedAt ? (
              <>
                Live from the GitHub API · updated{' '}
                {new Date(stats.fetchedAt).toLocaleString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </>
            ) : (
              <>
                GitHub API unavailable — showing last known figures, verified
                Nov 24, 2026
              </>
            )}
          </p>
        </>
      )}
    </section>
  );
}
