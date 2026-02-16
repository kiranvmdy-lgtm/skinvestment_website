import { useState, useEffect, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    Newspaper,
    ExternalLink,
    RefreshCw,
    Clock,
    TrendingUp,
    Shield,
    Briefcase,
    AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsItem {
    title: string;
    link: string;
    pubDate: string;
    description: string;
    thumbnail: string;
    source: string;
    category: "insurance" | "economics" | "business";
}

type CategoryFilter = "all" | "insurance" | "economics" | "business";

const RSS_FEEDS: { category: NewsItem["category"]; url: string }[] = [
    {
        category: "insurance",
        url: "https://news.google.com/rss/search?q=insurance+India&hl=en-IN&gl=IN&ceid=IN:en",
    },
    {
        category: "economics",
        url: "https://news.google.com/rss/search?q=economics+India&hl=en-IN&gl=IN&ceid=IN:en",
    },
    {
        category: "business",
        url: "https://news.google.com/rss/search?q=business+India&hl=en-IN&gl=IN&ceid=IN:en",
    },
];

const REFRESH_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

const categoryMeta: Record<
    NewsItem["category"],
    { label: string; icon: typeof Shield; color: string; bgColor: string }
> = {
    insurance: {
        label: "Insurance",
        icon: Shield,
        color: "text-blue-600",
        bgColor: "bg-blue-500/10",
    },
    economics: {
        label: "Economics",
        icon: TrendingUp,
        color: "text-emerald-600",
        bgColor: "bg-emerald-500/10",
    },
    business: {
        label: "Business",
        icon: Briefcase,
        color: "text-amber-600",
        bgColor: "bg-amber-500/10",
    },
};

function stripHtml(html: string): string {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
}

function timeAgo(dateStr: string): string {
    const now = new Date();
    const date = new Date(dateStr);
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}

const NewsPage = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState<CategoryFilter>("all");
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

    const fetchNews = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const results = await Promise.all(
                RSS_FEEDS.map(async (feed) => {
                    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`;
                    const res = await fetch(apiUrl);
                    if (!res.ok)
                        throw new Error(`Failed to fetch ${feed.category} news`);
                    const data = await res.json();
                    if (data.status !== "ok") return [];
                    return (data.items || []).map(
                        (item: {
                            title: string;
                            link: string;
                            pubDate: string;
                            description: string;
                            thumbnail: string;
                            author: string;
                        }) => ({
                            title: item.title,
                            link: item.link,
                            pubDate: item.pubDate,
                            description: stripHtml(item.description).slice(
                                0,
                                200,
                            ),
                            thumbnail: item.thumbnail || "",
                            source: item.author || "Google News",
                            category: feed.category,
                        }),
                    );
                }),
            );

            const allNews: NewsItem[] = results
                .flat()
                .sort(
                    (a, b) =>
                        new Date(b.pubDate).getTime() -
                        new Date(a.pubDate).getTime(),
                );
            setNews(allNews);
            setLastUpdated(new Date());
        } catch {
            setError(
                "Unable to load news at the moment. Please try again later.",
            );
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchNews();
        const interval = setInterval(fetchNews, REFRESH_INTERVAL_MS);
        return () => clearInterval(interval);
    }, [fetchNews]);

    const filteredNews =
        filter === "all" ? news : news.filter((n) => n.category === filter);

    const categories: { key: CategoryFilter; label: string }[] = [
        { key: "all", label: "All News" },
        { key: "insurance", label: "Insurance" },
        { key: "economics", label: "Economics" },
        { key: "business", label: "Business" },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero */}
                <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-primary via-primary to-primary-dark text-primary-foreground relative overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl" />
                        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />
                        <div
                            className="absolute inset-0 opacity-[0.07]"
                            style={{
                                backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                                backgroundSize: "32px 32px",
                            }}
                        />
                    </div>
                    <div className="container mx-auto relative z-10 text-center">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/15 text-primary-foreground/90 text-sm font-semibold tracking-wide mb-6 border border-primary-foreground/20">
                            <Newspaper className="w-4 h-4" />
                            Latest News
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Industry News & Updates
                        </h1>
                        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Stay informed with the latest developments in
                            insurance, economics, and business — updated
                            automatically every 5 minutes.
                        </p>
                    </div>
                </section>

                {/* Filter Tabs & Live Badge */}
                <section className="py-6 bg-card border-b border-border sticky top-16 md:top-20 z-30">
                    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2 flex-wrap justify-center">
                            {categories.map((cat) => (
                                <button
                                    key={cat.key}
                                    onClick={() => setFilter(cat.key)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${filter === cat.key
                                            ? "bg-primary text-primary-foreground shadow-md"
                                            : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            {lastUpdated && (
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    Updated{" "}
                                    {lastUpdated.toLocaleTimeString("en-IN", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </span>
                            )}
                            <div className="flex items-center gap-1.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="font-medium text-green-600">
                                    Live
                                </span>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={fetchNews}
                                disabled={loading}
                                className="h-7 px-2"
                            >
                                <RefreshCw
                                    className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`}
                                />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* News Grid */}
                <section className="py-12 md:py-16 bg-muted/30">
                    <div className="container mx-auto">
                        {/* Error State */}
                        {error && (
                            <div className="text-center py-20">
                                <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                                    <AlertCircle className="w-8 h-8 text-destructive" />
                                </div>
                                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                                    Oops! Something went wrong
                                </h3>
                                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                                    {error}
                                </p>
                                <Button onClick={fetchNews} className="gap-2">
                                    <RefreshCw className="w-4 h-4" />
                                    Try Again
                                </Button>
                            </div>
                        )}

                        {/* Loading Skeleton */}
                        {loading && !error && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {Array.from({ length: 9 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="rounded-2xl bg-card border border-border overflow-hidden animate-pulse"
                                    >
                                        <div className="h-44 bg-muted" />
                                        <div className="p-5 space-y-3">
                                            <div className="flex gap-2">
                                                <div className="h-5 w-20 bg-muted rounded-full" />
                                                <div className="h-5 w-16 bg-muted rounded-full" />
                                            </div>
                                            <div className="h-5 bg-muted rounded w-full" />
                                            <div className="h-5 bg-muted rounded w-3/4" />
                                            <div className="h-4 bg-muted rounded w-full" />
                                            <div className="h-4 bg-muted rounded w-2/3" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* News Cards */}
                        {!loading && !error && filteredNews.length === 0 && (
                            <div className="text-center py-20">
                                <Newspaper className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
                                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                                    No news found
                                </h3>
                                <p className="text-muted-foreground">
                                    Try selecting a different category.
                                </p>
                            </div>
                        )}

                        {!loading && !error && filteredNews.length > 0 && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredNews.map((item, index) => {
                                    const meta = categoryMeta[item.category];
                                    const Icon = meta.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group rounded-2xl bg-card border border-border overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
                                        >
                                            {/* Thumbnail */}
                                            {item.thumbnail ? (
                                                <div className="h-44 overflow-hidden bg-muted">
                                                    <img
                                                        src={item.thumbnail}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                        onError={(e) => {
                                                            (
                                                                e.target as HTMLImageElement
                                                            ).style.display =
                                                                "none";
                                                        }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="h-44 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                                                    <Newspaper className="w-12 h-12 text-muted-foreground/30" />
                                                </div>
                                            )}

                                            {/* Content */}
                                            <div className="p-5 flex flex-col flex-1">
                                                {/* Category & Time */}
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span
                                                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${meta.bgColor} ${meta.color}`}
                                                    >
                                                        <Icon className="w-3 h-3" />
                                                        {meta.label}
                                                    </span>
                                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                        <Clock className="w-3 h-3" />
                                                        {timeAgo(item.pubDate)}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="font-display text-base font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                                    {item.title}
                                                </h3>

                                                {/* Description */}
                                                {item.description && (
                                                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                                                        {item.description}
                                                    </p>
                                                )}

                                                {/* Source & Read More */}
                                                <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                                                    <span className="text-xs font-medium text-muted-foreground">
                                                        {item.source}
                                                    </span>
                                                    <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                                                        Read More
                                                        <ExternalLink className="w-3 h-3" />
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </section>

                {/* Info Bar */}
                <section className="py-8 bg-card border-t border-border">
                    <div className="container mx-auto text-center">
                        <p className="text-sm text-muted-foreground">
                            News sourced from Google News • Auto-updates every 5
                            minutes •{" "}
                            {filteredNews.length > 0 &&
                                `Showing ${filteredNews.length} articles`}
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default NewsPage;
