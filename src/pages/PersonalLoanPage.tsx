import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Wallet,
    Shield,
    Megaphone,
    FileCheck,
    Home,
    ArrowRight,
    CheckCircle2,
    Clock,
    FileText,
    Percent,
    Zap,
    Users,
} from "lucide-react";

const PersonalLoanPage = () => {
    const features = [
        {
            icon: Zap,
            title: "Quick Approval",
            description: "Get your loan approved within 24-48 hours with minimal documentation and hassle-free processing.",
        },
        {
            icon: Percent,
            title: "Competitive Interest Rates",
            description: "We partner with top banks and NBFCs to offer you the most competitive interest rates in the market.",
        },
        {
            icon: FileText,
            title: "Minimal Documentation",
            description: "Simple paperwork — just basic KYC, income proof, and bank statements. We handle the rest.",
        },
        {
            icon: Clock,
            title: "Flexible Tenure",
            description: "Choose repayment tenure from 12 to 60 months based on your comfort and financial planning.",
        },
        {
            icon: Shield,
            title: "No Collateral Required",
            description: "Unsecured personal loans — no need to pledge any asset or property as security.",
        },
        {
            icon: Users,
            title: "Dedicated Support",
            description: "Our loan experts guide you through every step — from application to disbursement and beyond.",
        },
    ];

    const loanTypes = [
        "Salaried Personal Loans",
        "Self-Employed Loans",
        "Debt Consolidation Loans",
        "Medical Emergency Loans",
        "Wedding Loans",
        "Travel Loans",
        "Education Loans",
        "Home Renovation Loans",
    ];

    const serviceNav = [
        { name: "Insurance", href: "/services", icon: Shield, active: false },
        { name: "Personal Loan", href: "/personal-loan", icon: Wallet, active: true },
        { name: "Home Loan", href: "/home-loan", icon: Home, active: false },
        { name: "Digital Marketing", href: "/digital-marketing", icon: Megaphone, active: false },
        { name: "Auditing & Tax", href: "/auditing-tax", icon: FileCheck, active: false },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero */}
                <section className="pt-28 pb-8 md:pt-36 md:pb-10 bg-gradient-to-br from-primary via-primary to-primary-dark text-primary-foreground relative overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl" />
                        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />
                        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`, backgroundSize: "32px 32px" }} />
                    </div>
                    <div className="container mx-auto relative z-10 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/15 text-primary-foreground/90 text-sm font-semibold tracking-wide mb-6 border border-primary-foreground/20">
                            Personal Loans
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Fast & Affordable Personal Loans
                        </h1>
                        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                            Get quick approvals with competitive rates and flexible repayment options. Fulfil your dreams without financial stress.
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

                {/* Features Grid */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto">
                        <div className="text-center mb-14">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-4">
                                Why Choose Us
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Personal Loan Benefits
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Experience a seamless borrowing journey with benefits designed for your convenience.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Loan Types */}
                <section className="py-20 bg-card">
                    <div className="container mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-4">
                                    Loan Types
                                </span>
                                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                                    Loans for Every Need
                                </h2>
                                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                    Whatever your requirement — medical emergency, wedding, travel, or debt consolidation — we have the right loan for you.
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {loanTypes.map((type, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                            <span className="text-foreground font-medium text-sm">{type}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-10 border border-border">
                                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                                    How It Works
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        { step: "01", title: "Apply Online/Offline", desc: "Fill a simple form or visit us for a quick consultation." },
                                        { step: "02", title: "Document Verification", desc: "Submit basic KYC & income documents for quick processing." },
                                        { step: "03", title: "Loan Approval", desc: "Get approved within 24-48 hours with the best rates." },
                                        { step: "04", title: "Disbursement", desc: "Funds transferred directly to your bank account." },
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <span className="text-primary font-bold text-sm">{item.step}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                                                <p className="text-sm text-muted-foreground">{item.desc}</p>
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
                            Need a Personal Loan?
                        </h2>
                        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                            Talk to our loan experts today and get the best deal tailored to your needs.
                        </p>
                        <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                            <Button size="lg" className="gap-2 text-base px-8 bg-white text-primary hover:bg-white/90">
                                Apply Now
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default PersonalLoanPage;
