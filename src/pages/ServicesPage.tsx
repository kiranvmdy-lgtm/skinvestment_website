import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, HeartPulse, Building2, TrendingUp, Wallet, Home, Plane, Car, Briefcase, ArrowRight, CheckCircle2, Megaphone, FileCheck } from "lucide-react";

const ServicesPage = () => {
    const services = [
        {
            icon: Shield,
            title: "Life Insurance",
            description: "Customised plans to secure your family's future. Protect your loved ones with comprehensive coverage that fits your needs and budget.",
            color: "primary",
            details: ["Term Life Insurance", "Whole Life Plans", "Endowment Policies", "ULIPs", "Child Plans", "Retirement Plans"],
        },
        {
            icon: HeartPulse,
            title: "Health Insurance",
            description: "Cashless, hassle-free policies with no health checkup required. Get comprehensive medical coverage for you and your family.",
            color: "accent",
            details: ["Individual Plans", "Family Floater", "Critical Illness", "Senior Citizen", "Top-Up Plans", "Cashless Claims"],
        },
        {
            icon: Building2,
            title: "Group/Corporate Insurance",
            description: "Employee safety & benefit plans tailored for businesses. Keep your team protected with customized group insurance solutions.",
            color: "secondary",
            details: ["Group Health", "Group Term Life", "Workmen Compensation", "Key Man Insurance", "Employee Benefits", "Custom Plans"],
        },
        {
            icon: TrendingUp,
            title: "Mutual Funds",
            description: "Goal-based investment planning for long-term wealth creation. Start your investment journey with expert guidance.",
            color: "primary",
            details: ["SIP Plans", "Equity Funds", "Debt Funds", "Hybrid Funds", "Tax Saving (ELSS)", "Goal Planning"],
        },
        {
            icon: Plane,
            title: "Travel Insurance",
            description: "Travel worry-free with comprehensive travel insurance. Get coverage for medical emergencies, trip cancellations, lost baggage, and more — for domestic and international trips.",
            color: "primary",
            details: ["Medical Emergency Cover", "Trip Cancellation", "Lost Baggage Protection", "Flight Delay Cover", "International & Domestic", "Instant Policy Issuance"],
        },
        {
            icon: Car,
            title: "Motor Insurance",
            description: "Protect your vehicle with comprehensive motor insurance. Get coverage for accidents, theft, natural disasters, and third-party liability at competitive premiums.",
            color: "accent",
            details: ["Two-Wheeler Insurance", "Four-Wheeler Insurance", "Commercial Vehicle", "Third-Party Cover", "Comprehensive Plans", "Instant Renewal"],
        },
        {
            icon: Briefcase,
            title: "Business Insurance for Life",
            description: "Safeguard your business against unforeseen risks with tailored commercial insurance solutions. From property to liability — we've got you covered.",
            color: "secondary",
            details: [],
        },
    ];

    const serviceNav = [
        { name: "Insurance", href: "/services", icon: Shield, active: true },
        { name: "Personal Loan", href: "/personal-loan", icon: Wallet, active: false },
        { name: "Home Loan", href: "/home-loan", icon: Home, active: false },
        { name: "Digital Marketing", href: "/digital-marketing", icon: Megaphone, active: false },
        { name: "Auditing & Tax", href: "/auditing-tax", icon: FileCheck, active: false },
    ];

    const getColorClasses = (color: string) => {
        switch (color) {
            case "primary": return { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" };
            case "secondary": return { bg: "bg-secondary/10", text: "text-secondary", border: "border-secondary/20" };
            case "accent": return { bg: "bg-accent/10", text: "text-accent", border: "border-accent/20" };
            default: return { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" };
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
                        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`, backgroundSize: "32px 32px" }} />
                    </div>
                    <div className="container mx-auto relative z-10 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/15 text-primary-foreground/90 text-sm font-semibold tracking-wide mb-6 border border-primary-foreground/20">
                            Our Services
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Comprehensive Financial Solutions
                        </h1>
                        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                            From protecting your family to growing your wealth — a complete range of financial services tailored to your unique needs.
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

                {/* Services Detail Grid */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => {
                                const colors = getColorClasses(service.color);
                                return (
                                    <div key={index} className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                                        <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            <service.icon className={`w-7 h-7 ${colors.text}`} />
                                        </div>
                                        <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
                                        <p className="text-muted-foreground mb-6">{service.description}</p>
                                        <div className="grid grid-cols-2 gap-2">
                                            {service.details.map((detail, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <CheckCircle2 className={`w-3.5 h-3.5 ${colors.text} flex-shrink-0`} />
                                                    <span className="text-xs text-muted-foreground font-medium">{detail}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-card border-t border-border">
                    <div className="container mx-auto text-center">
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Not Sure Which Service You Need?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                            Our experts will analyze your needs and recommend the perfect solution — absolutely free.
                        </p>
                        <a href="/#contact">
                            <Button size="lg" className="gap-2 text-base px-8">
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

export default ServicesPage;
