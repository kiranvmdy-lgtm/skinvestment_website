import { Shield, HeartPulse, Building2, TrendingUp, Wallet, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: "Life Insurance",
      description: "Customised plans to secure your family's future. Protect your loved ones with comprehensive coverage that fits your needs and budget.",
      color: "primary",
    },
    {
      icon: HeartPulse,
      title: "Health Insurance",
      description: "Cashless, hassle-free policies with no health checkup required. Get comprehensive medical coverage for you and your family.",
      color: "accent",
    },
    {
      icon: Building2,
      title: "Group/Corporate Insurance",
      description: "Employee safety & benefit plans tailored for businesses. Keep your team protected with customized group insurance solutions.",
      color: "secondary",
    },
    {
      icon: TrendingUp,
      title: "Mutual Funds",
      description: "Goal-based investment planning for long-term wealth creation. Start your investment journey with expert guidance.",
      color: "primary",
    },
    {
      icon: Wallet,
      title: "Personal Loans",
      description: "Fast assistance for affordable loan options. Get quick approvals and competitive rates for your financial needs.",
      color: "secondary",
    },
    {
      icon: Home,
      title: "Home Loans",
      description: "Make your dream home a reality with competitive home loan options. We help you find the best rates and guide you through the entire process.",
      color: "accent",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary";
      case "secondary":
        return "bg-secondary/10 text-secondary";
      case "accent":
        return "bg-accent/10 text-accent";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From protecting your family to growing your wealth, we offer a complete range of financial services tailored to your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border shadow-card card-hover cursor-pointer"
              onClick={scrollToContact}
            >
              <div className={`w-14 h-14 rounded-xl ${getColorClasses(service.color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" onClick={scrollToContact}>
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
