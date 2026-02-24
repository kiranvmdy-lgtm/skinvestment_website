import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Globe,
    Search,
    Share2,
    BarChart3,
    Megaphone,
    PenTool,
    Mail,
    Video,
    ArrowRight,
    CheckCircle2,
    Zap,
    Target,
    TrendingUp,
    Shield,
    FileCheck,
    Wallet,
    Home,
} from "lucide-react";

const DigitalMarketing = () => {
    const services = [
        {
            icon: Search,
            title: "SEO Optimization",
            description:
                "Rank higher on Google with data-driven SEO strategies. We optimize your website to attract organic traffic and generate quality leads.",
            highlights: ["Keyword Research", "On-Page SEO", "Link Building", "Local SEO"],
        },
        {
            icon: Share2,
            title: "Social Media Marketing",
            description:
                "Build a powerful brand presence across Facebook, Instagram, LinkedIn & more. Engage your audience with compelling content and campaigns.",
            highlights: ["Content Strategy", "Community Management", "Paid Ads", "Analytics"],
        },
        {
            icon: Globe,
            title: "Website Development",
            description:
                "Modern, fast, mobile-responsive websites designed to convert visitors into customers. From landing pages to full business websites.",
            highlights: ["Responsive Design", "Fast Loading", "SEO-Friendly", "Custom CMS"],
        },
        {
            icon: Megaphone,
            title: "Google & Meta Ads",
            description:
                "Maximize your ROI with targeted PPC campaigns on Google, Facebook, and Instagram. Reach the right audience at the right time.",
            highlights: ["Google Ads", "Facebook Ads", "Retargeting", "A/B Testing"],
        },
        {
            icon: PenTool,
            title: "Content Marketing",
            description:
                "Engage, educate, and convert your audience with high-quality blogs, infographics, and visual content tailored to your brand voice.",
            highlights: ["Blog Writing", "Infographics", "Copywriting", "Brand Voice"],
        },
        {
            icon: Mail,
            title: "Email Marketing",
            description:
                "Nurture leads and retain customers with personalized email campaigns. From newsletters to automated drip sequences.",
            highlights: ["Automation", "Segmentation", "Templates", "Analytics"],
        },
        {
            icon: Video,
            title: "Video Marketing",
            description:
                "Capture attention with professional video content for social media, ads, and your website. Short-form and long-form videos that convert.",
            highlights: ["Reels & Shorts", "Product Videos", "Testimonials", "Ad Creatives"],
        },
        {
            icon: BarChart3,
            title: "Analytics & Reporting",
            description:
                "Track, measure, and optimize every campaign with detailed analytics dashboards. Make data-driven decisions for continuous growth.",
            highlights: ["Custom Dashboards", "ROI Tracking", "Monthly Reports", "Insights"],
        },
    ];

    const serviceNav = [
        { name: "Insurance", href: "/services", icon: Shield, active: false },
        { name: "Personal Loan", href: "/personal-loan", icon: Wallet, active: false },
        { name: "Home Loan", href: "/home-loan", icon: Home, active: false },
        { name: "Digital Marketing", href: "/digital-marketing", icon: Megaphone, active: true },
        { name: "Auditing & Tax", href: "/auditing-tax", icon: FileCheck, active: false },
    ];

    const stats = [
        { value: "150+", label: "Projects Delivered" },
        { value: "3x", label: "Average ROI" },
        { value: "50+", label: "Happy Clients" },
        { value: "1M+", label: "Leads Generated" },
    ];

    const processSteps = [
        {
            step: 1,
            title: "Discovery & Strategy",
            description: "We analyze your business, competitors, and target audience to build a custom digital strategy.",
        },
        {
            step: 2,
            title: "Design & Develop",
            description: "Our team creates stunning designs, compelling content, and technical implementations.",
        },
        {
            step: 3,
            title: "Launch & Promote",
            description: "We launch campaigns across the right channels and drive targeted traffic to your business.",
        },
        {
            step: 4,
            title: "Measure & Optimize",
            description: "Continuous monitoring, A/B testing, and optimization to maximize your results and ROI.",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero */}
                <section className="pt-28 pb-8 md:pt-36 md:pb-10 relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-3xl" />
                        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-3xl" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />
                        <div
                            className="absolute inset-0 opacity-[0.05]"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                                backgroundSize: "40px 40px",
                            }}
                        />
                    </div>

                    <div className="container mx-auto relative z-10 text-center">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold tracking-wide mb-6 border border-white/15 backdrop-blur-sm">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            Grow Your Business Online
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Digital Marketing
                            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                That Delivers Results
                            </span>
                        </h1>
                        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                            From SEO to social media, paid ads to content — we craft
                            data-driven strategies that grow your brand, drive traffic, and
                            generate leads.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                            <a href="/#contact">
                                <Button
                                    size="lg"
                                    className="gap-2 text-base px-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 shadow-lg shadow-blue-500/25"
                                >
                                    Get Free Strategy Call
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </a>
                            <a href="#dm-services">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="gap-2 text-base px-8 border-white/20 text-white hover:bg-white/10 bg-transparent"
                                >
                                    View Services
                                </Button>
                            </a>
                        </div>

                        {/* Service Navigation Tabs */}
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                            {serviceNav.map((tab) => (
                                <Link
                                    key={tab.name}
                                    to={tab.href}
                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                    className={`
                                        inline-flex items-center gap-2.5 px-6 py-3 md:px-8 md:py-3.5 rounded-full text-base md:text-lg font-semibold
                                        transition-all duration-300 border-2
                                        ${tab.active
                                            ? "bg-white text-[#1a1a2e] border-white shadow-lg shadow-white/25 scale-105"
                                            : "bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-105"
                                        }
                                    `}
                                >
                                    <tab.icon className="w-4 h-4 md:w-5 md:h-5" />
                                    {tab.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-12 bg-card border-b border-border">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-muted-foreground text-sm font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section id="dm-services" className="py-20 bg-muted/30">
                    <div className="container mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                                Our Services
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Full-Stack Digital Marketing
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Everything you need to dominate online — all under one roof.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                                        <service.icon className="w-6 h-6 text-primary" />
                                    </div>

                                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                                        {service.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {service.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {service.highlights.map((h, i) => (
                                            <span
                                                key={i}
                                                className="inline-flex items-center gap-1 text-xs font-medium text-primary/80 bg-primary/5 px-2.5 py-1 rounded-full"
                                            >
                                                <CheckCircle2 className="w-3 h-3" />
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div
                            className="absolute top-0 left-0 w-full h-full"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
                                backgroundSize: "40px 40px",
                            }}
                        />
                    </div>

                    <div className="container mx-auto relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider mb-4">
                                How We Work
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                Our Proven Process
                            </h2>
                            <p className="text-primary-foreground/80 text-lg">
                                A systematic approach that delivers measurable results every
                                time.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                            {processSteps.map((item, index) => (
                                <div key={index} className="relative text-center group">
                                    {/* Connector line */}
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary-foreground/20" />
                                    )}

                                    <div className="w-20 h-20 rounded-2xl bg-primary-foreground/15 border border-primary-foreground/25 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:bg-primary-foreground/20 transition-all duration-300">
                                        <span className="font-display text-3xl font-bold">
                                            {item.step}
                                        </span>
                                    </div>

                                    <h3 className="font-display text-lg font-bold mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-primary-foreground/70 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                                Why Us
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Why Businesses Trust Us
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {[
                                {
                                    icon: Target,
                                    title: "Result-Oriented",
                                    description:
                                        "Every strategy is designed with clear KPIs and measurable goals. We focus on ROI, not vanity metrics.",
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Data-Driven",
                                    description:
                                        "We make decisions backed by data and analytics. No guesswork — just proven strategies that work.",
                                },
                                {
                                    icon: Zap,
                                    title: "Fast Execution",
                                    description:
                                        "Quick turnarounds without compromising quality. We move fast so your business grows faster.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="text-center p-8 rounded-2xl bg-card border border-border shadow-card"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                                        <item.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
                    <div className="container mx-auto text-center">
                        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                            Ready to Grow Your Business?
                        </h2>
                        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                            Get a free digital marketing strategy session tailored to your
                            business goals.
                        </p>
                        <a href="/#contact">
                            <Button
                                size="lg"
                                className="gap-2 text-base px-8 bg-white text-primary hover:bg-white/90 border-0"
                            >
                                Get Free Strategy Call
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default DigitalMarketing;
