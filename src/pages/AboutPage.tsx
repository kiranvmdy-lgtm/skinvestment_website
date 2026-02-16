import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Heart, Target, Eye, ArrowRight, Users, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Banner */}
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
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/15 text-primary-foreground/90 text-sm font-semibold tracking-wide mb-6 border border-primary-foreground/20">
                            About Us
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Your Trusted Partner in Financial Security
                        </h1>
                        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            19+ years of excellence in helping families achieve financial peace of mind.
                        </p>
                    </div>
                </section>

                {/* Stats Bar */}
                <section className="py-10 bg-card border-b border-border">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { value: "19+", label: "Years Experience" },
                                { value: "1000+", label: "Happy Clients" },
                                { value: "98%", label: "Claim Success Rate" },
                                { value: "24/7", label: "Support Available" },
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Content */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Visual Side */}
                            <div className="relative">
                                <div className="relative bg-card rounded-2xl shadow-card overflow-hidden">
                                    <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex flex-col justify-end">
                                        <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-primary/20" />
                                        <div className="absolute top-24 right-16 w-12 h-12 rounded-full bg-secondary/30" />
                                        <div className="relative z-10 bg-card/90 backdrop-blur rounded-xl p-6 border border-border">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <span className="font-display text-2xl font-bold text-primary">SK</span>
                                                </div>
                                                <div>
                                                    <h3 className="font-display text-xl font-bold text-foreground">SK Investment Consultants</h3>
                                                    <p className="text-muted-foreground">Your Financial Advisor</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Award className="w-4 h-4 text-secondary" />
                                                <span className="text-foreground font-medium">19+ Years of Excellence</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg">
                                    <div className="text-3xl font-display font-bold">19+</div>
                                    <div className="text-sm opacity-90">Years Experience</div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div>
                                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Story</span>
                                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                                    Building Trust, One Family at a Time
                                </h2>
                                <p className="text-muted-foreground text-lg mb-6">
                                    At <strong className="text-foreground">SK Investment Consultants</strong>, we believe every family deserves financial peace of mind. Our journey began with a simple mission: to make financial security accessible, understandable, and stress-free for every family.
                                </p>
                                <p className="text-muted-foreground mb-8">
                                    With over 19 years of experience in the financial services industry, we've helped more than 1000 families protect their loved ones, grow their wealth, and achieve their financial goals. Our caring, family-first approach sets us apart – we treat every client like family.
                                </p>

                                {/* Key Differentiators */}
                                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                                    {[
                                        { icon: Users, label: "Family-First Approach" },
                                        { icon: Shield, label: "Trusted & Transparent" },
                                        { icon: TrendingUp, label: "Proven Results" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-primary/5">
                                            <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                                            <span className="text-sm font-medium text-foreground">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">What Drives Us</span>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Our Mission & Vision
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                    <Target className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Mission</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Providing stress-free financial security to every family through personalized guidance and trusted solutions. We aim to be more than just advisors — we want to be your financial family.
                                </p>
                            </div>

                            <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
                                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                                    <Eye className="w-7 h-7 text-secondary" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Vision</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Becoming the most trusted personal financial advisor in the region, known for integrity and care. A world where every family has the right financial protection.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto text-center">
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">Our Core Values</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {["Integrity", "Care", "Trust", "Excellence", "Family-First"].map((value) => (
                                <span
                                    key={value}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/5 text-primary text-base font-medium border border-primary/10"
                                >
                                    <Heart className="w-4 h-4" />
                                    {value}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-card border-t border-border">
                    <div className="container mx-auto text-center">
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                            Let us help you build a secure financial future for your family.
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

export default AboutPage;
