import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    UserCheck,
    Handshake,
    ShieldCheck,
    BookOpen,
    Smartphone,
    HeartHandshake,
    ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const HowWeServe = () => {
    const features = [
        {
            icon: UserCheck,
            title: "Personalized Plans",
            subtitle: "Tailored to YOUR Needs",
            description:
                "We don't believe in one-size-fits-all. We analyze your income, goals, family situation, and future plans to recommend insurance that truly fits you.",
            tagline: "Your goals = Your plan",
        },
        {
            icon: Handshake,
            title: "End-to-End Support",
            subtitle: "From Start to Finish",
            description:
                "We're with you at every step — from understanding your needs, selecting the right plan, completing documentation, to claim settlement.",
            tagline: "Never alone in the journey",
        },
        {
            icon: ShieldCheck,
            title: "Zero Mis-selling",
            subtitle: "Honest & Transparent",
            description:
                "We NEVER push products for commissions. Our recommendations are based purely on what's best for you and your family's financial security.",
            tagline: "Your trust is our priority",
        },
        {
            icon: BookOpen,
            title: "Education First",
            subtitle: "Learn Before You Earn",
            description:
                "Before you buy any plan, we ensure you completely understand what you're getting — benefits, exclusions, terms, and everything in between.",
            tagline: "Informed decisions only",
        },
        {
            icon: Smartphone,
            title: "100% Digital & Secure",
            subtitle: "No Cash Transactions",
            description:
                "All our transactions are online — secure, trackable, and transparent. No cash dealings means no fraud risk and complete peace of mind.",
            tagline: "Safe & traceable payments",
        },
        {
            icon: HeartHandshake,
            title: "Lifetime Support",
            subtitle: "Always Here for You",
            description:
                "From buying your policy to claiming benefits — we support you at every stage. You'll never feel lost or unheard with us.",
            tagline: "One call away, always",
        },
    ];

    const processSteps = [
        {
            step: 1,
            title: "Understanding You",
            description:
                "We start by understanding your family, income, goals, and existing coverage",
        },
        {
            step: 2,
            title: "Education Session",
            description:
                "We explain different plan types, their benefits, and what suits your needs",
        },
        {
            step: 3,
            title: "Personalized Recommendation",
            description:
                "Based on your profile, we suggest the most suitable plans with complete transparency",
        },
        {
            step: 4,
            title: "Clear Documentation",
            description:
                "We help you with all paperwork, ensuring you understand every document you sign",
        },
        {
            step: 5,
            title: "Secure Online Payment",
            description:
                "100% digital payment — safe, traceable, and instant confirmation",
        },
        {
            step: 6,
            title: "Ongoing Support",
            description:
                "Policy queries, renewals, claims — we're just a call away for lifetime",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Banner */}
                <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-primary via-primary to-primary-dark text-primary-foreground relative overflow-hidden">
                    {/* Animated background elements */}
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
                            Our Promise to You
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            How We Serve You
                        </h1>
                        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Discover what sets us apart — transparency, expertise, and a
                            genuine commitment to your financial well-being.
                        </p>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div
                            className="absolute top-0 left-0 w-full h-full"
                            style={{
                                backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                                backgroundSize: "40px 40px",
                            }}
                        />
                    </div>

                    <div className="container mx-auto relative z-10">
                        {/* Section Header */}
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider mb-4">
                                Why Choose Us
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                What Makes Us Different
                            </h2>
                            <p className="text-primary-foreground/80 text-lg">
                                We go above and beyond to ensure your financial security and
                                peace of mind.
                            </p>
                        </div>

                        {/* Feature Cards Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group relative p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-500 hover:-translate-y-1"
                                >
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary-foreground/30 transition-all duration-300">
                                        <feature.icon
                                            className="w-7 h-7"
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    {/* Title & Subtitle */}
                                    <h3 className="font-display text-xl font-bold mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-wide mb-4">
                                        {feature.subtitle}
                                    </p>

                                    {/* Description */}
                                    <p className="text-primary-foreground/80 text-sm leading-relaxed mb-5">
                                        {feature.description}
                                    </p>

                                    {/* Tagline Pill */}
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/70 animate-pulse" />
                                        <span className="text-xs font-semibold tracking-wide text-primary-foreground/90">
                                            {feature.tagline}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Process Section */}
                <section className="py-20 bg-muted/50 relative overflow-hidden">
                    {/* Decorative background */}
                    <div className="absolute inset-0 opacity-[0.03]">
                        <div
                            className="absolute top-0 left-0 w-full h-full"
                            style={{
                                backgroundImage: `linear-gradient(135deg, currentColor 25%, transparent 25%, transparent 50%, currentColor 50%, currentColor 75%, transparent 75%)`,
                                backgroundSize: "60px 60px",
                            }}
                        />
                    </div>

                    <div className="container mx-auto relative z-10">
                        {/* Section Header */}
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                                Our Process
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Your Journey With Us
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                From the first conversation to lifetime support — here's how we
                                ensure you get the best experience.
                            </p>
                        </div>

                        {/* Process Timeline */}
                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                {/* Vertical connector line (desktop) */}
                                <div className="hidden md:block absolute left-[39px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/20" />

                                <div className="flex flex-col gap-6 md:gap-8">
                                    {processSteps.map((item, index) => (
                                        <div
                                            key={index}
                                            className="group flex items-start gap-5 md:gap-8"
                                        >
                                            {/* Step Number */}
                                            <div className="relative flex-shrink-0">
                                                <div className="w-[80px] h-[80px] rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-display text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-glow-primary transition-all duration-300">
                                                    {item.step}
                                                </div>
                                            </div>

                                            {/* Content Card */}
                                            <div className="flex-1 pt-2 pb-4 md:p-6 md:rounded-xl md:bg-card md:border md:border-border/50 md:shadow-card md:group-hover:shadow-card-hover md:group-hover:border-primary/20 transition-all duration-300">
                                                <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-card border-t border-border">
                    <div className="container mx-auto text-center">
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                            Let us help you find the perfect plan for your family's future.
                        </p>
                        <a href="/#contact">
                            <Button size="lg" className="gap-2 text-base px-8">
                                Book Free Consultation
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

export default HowWeServe;
