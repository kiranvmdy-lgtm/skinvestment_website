import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Shield, Users, HeartHandshake, FileCheck } from "lucide-react";
const HeroSection = () => {
  const trustBadges = [{
    icon: Shield,
    label: "19+ Years Experience"
  }, {
    icon: Users,
    label: "1000+ Happy Clients"
  }, {
    icon: HeartHandshake,
    label: "Cashless Claim Support"
  }, {
    icon: FileCheck,
    label: "Policies at Your Doorstep"
  }];
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center pt-20 bg-hero-pattern overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
            <Shield className="w-4 h-4" />
            A Solution for All Investments
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{
            animationDelay: "0.1s"
          }}>
            Protecting Families.{" "}
            <span className="text-primary">Growing Wealth.  </span>{" "}
            <span className="text-secondary">Simplifying Money.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-up" style={{
            animationDelay: "0.2s"
          }}>
            19+ years of trusted guidance in Life Insurance, Health Insurance, Group Insurance, Mutual Funds & Personal Loans.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-up" style={{
            animationDelay: "0.3s"
          }}>
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              <Phone className="w-5 h-5" />
              Get a Free Consultation
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a href="https://wa.me/916364825402?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Talk on WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up" style={{
            animationDelay: "0.4s"
          }}>
            {trustBadges.map((badge, index) => <div key={index} className="flex flex-col items-center lg:items-start gap-2 p-4 rounded-xl bg-card border border-border shadow-card">
              <badge.icon className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-foreground text-center lg:text-left">{badge.label}</span>
            </div>)}
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative hidden lg:block animate-fade-up" style={{
          animationDelay: "0.5s"
        }}>
          <div className="relative">
            {/* Main card */}
            <div className="bg-card rounded-2xl shadow-card-hover p-8 border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">Secure Your Future</h3>
                  <p className="text-muted-foreground">Comprehensive financial planning</p>
                </div>
              </div>

              <div className="space-y-4">
                {["Life Insurance", "Health Insurance", "Mutual Funds", "Personal Loans"].map((service, i) => <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-sm font-medium text-foreground">{service}</span>
                </div>)}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg shadow-lg animate-float">
              <span className="text-sm font-semibold">Trusted by 1000+</span>
            </div>


          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default HeroSection;