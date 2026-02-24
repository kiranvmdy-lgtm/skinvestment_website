import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    FileText,
    Calculator,
    Scale,
    ClipboardCheck,
    ShieldCheck,
    BookOpen,
    ArrowRight,
    CheckCircle2,
    BarChart3,
    Users,
    Clock,
    Award,
    Shield,
    Megaphone,
    FileCheck,
    Wallet,
    Home,
} from "lucide-react";

const AuditingTaxPage = () => {
    const services = [
        {
            icon: FileText,
            title: "Tax Planning & Advisory",
            description:
                "Strategic tax planning to minimise liabilities and maximise savings. Our experts help you navigate complex tax laws with ease.",
            color: "primary",
            details: [
                "Income Tax Planning",
                "Capital Gains Advisory",
                "Tax-Saving Investments",
                "Advance Tax Estimation",
                "HUF & Trust Taxation",
                "NRI Taxation",
            ],
        },
        {
            icon: Calculator,
            title: "Tax Return Filing",
            description:
                "Hassle-free and accurate filing of income tax returns for individuals, businesses, and trusts. Timely filing with maximum deductions.",
            color: "accent",
            details: [
                "Individual ITR Filing",
                "Business ITR Filing",
                "Trust & Society Returns",
                "Revised Returns",
                "Belated Returns",
                "Defective Return Resolution",
            ],
        },
        {
            icon: ClipboardCheck,
            title: "Statutory Audit",
            description:
                "Comprehensive statutory audits ensuring compliance with regulatory requirements. Detailed reports for stakeholders and authorities.",
            color: "secondary",
            details: [
                "Company Audit",
                "Partnership Firm Audit",
                "Society & Trust Audit",
                "Co-operative Society Audit",
                "Statutory Compliance",
                "Audit Reports & Certificates",
            ],
        },
        {
            icon: Scale,
            title: "GST Consultancy",
            description:
                "End-to-end GST consulting including registration, return filing, and compliance. Stay updated with ever-changing GST regulations.",
            color: "primary",
            details: [
                "GST Registration",
                "Monthly/Quarterly Filing",
                "Annual GST Returns",
                "GST Audit",
                "E-Way Bill Compliance",
                "Input Tax Credit Optimisation",
            ],
        },
        {
            icon: ShieldCheck,
            title: "Tax Audit & Assessment",
            description:
                "Expert assistance in tax audits and assessments. We represent you before tax authorities and ensure smooth proceedings.",
            color: "accent",
            details: [
                "Tax Audit (44AB)",
                "Transfer Pricing Audit",
                "Assessment Proceedings",
                "Appeal Filing",
                "Penalty Relief",
                "Tribunal Representation",
            ],
        },
        {
            icon: BookOpen,
            title: "Accounting & Bookkeeping",
            description:
                "Reliable accounting and bookkeeping services to keep your finances organised. Focus on your business while we handle the numbers.",
            color: "secondary",
            details: [
                "Tally & Zoho Books",
                "Monthly Bookkeeping",
                "Ledger Management",
                "Bank Reconciliation",
                "Financial Statements",
                "MIS Reports",
            ],
        },
    ];

    const serviceNav = [
        { name: "Insurance", href: "/services", icon: Shield, active: false },
        { name: "Personal Loan", href: "/personal-loan", icon: Wallet, active: false },
        { name: "Home Loan", href: "/home-loan", icon: Home, active: false },
        { name: "Digital Marketing", href: "/digital-marketing", icon: Megaphone, active: false },
        { name: "Auditing & Tax", href: "/auditing-tax", icon: FileCheck, active: true },
    ];

    const highlights = [
        {
            icon: Users,
            value: "500+",
            label: "Clients Served",
        },
        {
            icon: Clock,
            value: "15+",
            label: "Years of Experience",
        },
        {
            icon: Award,
            value: "100%",
            label: "Compliance Rate",
        },
        {
            icon: BarChart3,
            value: "₹50Cr+",
            label: "Tax Savings Delivered",
        },
    ];

    const getColorClasses = (color: string) => {
        switch (color) {
            case "primary":
                return {
                    bg: "bg-primary/10",
                    text: "text-primary",
                    border: "border-primary/20",
                };
            case "secondary":
                return {
                    bg: "bg-secondary/10",
                    text: "text-secondary",
                    border: "border-secondary/20",
                };
            case "accent":
                return {
                    bg: "bg-accent/10",
                    text: "text-accent",
                    border: "border-accent/20",
                };
            default:
                return {
                    bg: "bg-primary/10",
                    text: "text-primary",
                    border: "border-primary/20",
                };
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero */}
                <section className="pt-28 pb-8 md:pt-36 md:pb-10 bg-gradient-to-br from-primary via-primary to-primary-dark text-primary-foreground relative overflow-hidden">
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
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/15 text-primary-foreground/90 text-sm font-semibold tracking-wide mb-6 border border-primary-foreground/20">
                            Auditing & Tax
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Auditing & Tax Consultations
                        </h1>
                        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                            Expert auditing & taxation services to keep your finances
                            compliant, optimised, and stress-free — for individuals and
                            businesses alike.
                        </p>

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
                                            ? "bg-primary-foreground text-primary border-primary-foreground shadow-lg shadow-primary-foreground/25 scale-105"
                                            : "bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 hover:border-primary-foreground/50 hover:scale-105"
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

                {/* Stats Highlights */}
                <section className="py-12 bg-card border-b border-border">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {highlights.map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                        <stat.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto">
                        <div className="text-center mb-14">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-4">
                                What We Offer
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Our Tax & Audit Services
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                A comprehensive suite of auditing, taxation, and compliance
                                services designed to safeguard your financial interests.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => {
                                const colors = getColorClasses(service.color);
                                return (
                                    <div
                                        key={index}
                                        className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <div
                                            className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <service.icon
                                                className={`w-7 h-7 ${colors.text}`}
                                            />
                                        </div>
                                        <h3 className="font-display text-xl font-bold text-foreground mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-6">
                                            {service.description}
                                        </p>
                                        <div className="grid grid-cols-2 gap-2">
                                            {service.details.map((detail, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <CheckCircle2
                                                        className={`w-3.5 h-3.5 ${colors.text} flex-shrink-0`}
                                                    />
                                                    <span className="text-xs text-muted-foreground font-medium">
                                                        {detail}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 bg-card">
                    <div className="container mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-4">
                                    Why Choose Us
                                </span>
                                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                                    Trusted Tax & Audit Experts
                                </h2>
                                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                    We combine deep technical expertise with personalised
                                    attention to help you stay fully compliant while maximising
                                    your financial outcomes.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Qualified Chartered Accountants on the team",
                                        "Up-to-date with latest tax laws & amendments",
                                        "End-to-end support from planning to filing",
                                        "Transparent pricing with no hidden charges",
                                        "Confidential handling of all financial data",
                                        "Dedicated relationship manager for every client",
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                            <span className="text-foreground font-medium">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-10 border border-border">
                                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                                    Our Process
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        {
                                            step: "01",
                                            title: "Initial Consultation",
                                            desc: "We understand your financial situation and requirements.",
                                        },
                                        {
                                            step: "02",
                                            title: "Document Collection",
                                            desc: "Seamless process for gathering the necessary documents.",
                                        },
                                        {
                                            step: "03",
                                            title: "Analysis & Planning",
                                            desc: "Our experts analyse and devise the best tax strategy.",
                                        },
                                        {
                                            step: "04",
                                            title: "Filing & Compliance",
                                            desc: "Timely filing and complete compliance ensured.",
                                        },
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <span className="text-primary font-bold text-sm">
                                                    {item.step}
                                                </span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-foreground mb-1">
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gradient-to-br from-primary via-primary to-primary-dark text-primary-foreground relative overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl" />
                        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />
                    </div>
                    <div className="container mx-auto text-center relative z-10">
                        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                            Ready to Simplify Your Taxes?
                        </h2>
                        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                            Book a free consultation today and let our experts handle your
                            auditing & tax needs with precision and care.
                        </p>
                        <a href="/contact">
                            <Button
                                size="lg"
                                className="gap-2 text-base px-8 bg-white text-primary hover:bg-white/90"
                            >
                                Get Free Consultation
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

export default AuditingTaxPage;
