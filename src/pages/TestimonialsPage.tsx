import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";

const TestimonialsPage = () => {
    const testimonials = [
        {
            name: "Rajesh Kumar",
            role: "Business Owner",
            content: "They helped me choose the right health insurance for my entire family. The patience and knowledge made the process so easy. Highly recommend!",
            rating: 5,
        },
        {
            name: "Priya Sharma",
            role: "IT Professional",
            content: "I've been investing in mutual funds through SK Investment for 5 years now. The returns have been excellent and the guidance is always spot on.",
            rating: 5,
        },
        {
            name: "Mahesh Gowda",
            role: "Teacher",
            content: "When I needed a personal loan urgently, SK Investment got it processed within days. The entire team is very supportive and understanding.",
            rating: 5,
        },
        {
            name: "Lakshmi Devi",
            role: "Homemaker",
            content: "After my husband's accident, the claim support we received was incredible. They handled everything and we got our cashless treatment without any hassle.",
            rating: 5,
        },
        {
            name: "Suresh Babu",
            role: "Contractor",
            content: "Got group insurance for all my workers through SK Investment. Very affordable rates and comprehensive coverage. My workers feel secure now.",
            rating: 5,
        },
        {
            name: "Anitha Reddy",
            role: "Doctor",
            content: "Professional service with a personal touch. They take time to explain every detail. Best financial advisor I've worked with.",
            rating: 5,
        },
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
                        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`, backgroundSize: "32px 32px" }} />
                    </div>
                    <div className="container mx-auto relative z-10 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/15 text-primary-foreground/90 text-sm font-semibold tracking-wide mb-6 border border-primary-foreground/20">
                            Testimonials
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            What Our Clients Say
                        </h1>
                        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Don't just take our word for it. Here's what families who trusted us have to say.
                        </p>
                    </div>
                </section>

                {/* Testimonials Grid */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                                        <Quote className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="flex gap-1 mb-4">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-foreground mb-6 leading-relaxed text-base">
                                        "{testimonial.content}"
                                    </p>
                                    <div className="flex items-center gap-3 pt-5 border-t border-border">
                                        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                                            <span className="text-primary font-semibold text-sm">
                                                {testimonial.name.split(" ").map((n) => n[0]).join("")}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-foreground">{testimonial.name}</div>
                                            <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-card border-t border-border">
                    <div className="container mx-auto text-center">
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Join Our Growing Family
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                            Experience the service that 1000+ families trust and recommend.
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

export default TestimonialsPage;
