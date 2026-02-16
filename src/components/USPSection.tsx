import {
  CreditCard,
  Settings2,
  Zap,
  Package,
  Stethoscope,
  Truck,
  Headphones,
  Heart
} from "lucide-react";

const USPSection = () => {
  const usps = [
    {
      icon: CreditCard,
      title: "Hassle-free Cashless Facility",
      description: "Smooth, paperless claims at network hospitals",
    },
    {
      icon: Settings2,
      title: "Customized Policy Options",
      description: "Plans tailored to your specific needs",
    },
    {
      icon: Zap,
      title: "Speedy Claim Settlement",
      description: "Quick processing for peace of mind",
    },
    {
      icon: Package,
      title: "Wide Range of Products",
      description: "All insurance types under one roof",
    },
    {
      icon: Stethoscope,
      title: "No Health Checkups Required",
      description: "Simple enrollment process",
    },
    {
      icon: Truck,
      title: "Doorstep Policy Delivery",
      description: "Convenient service at your home",
    },
    {
      icon: Headphones,
      title: "Dedicated Claim Support",
      description: "Expert assistance throughout claims",
    },
    {
      icon: Heart,
      title: "Family-Oriented Guidance",
      description: "Caring advice for your loved ones",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider mb-4">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            What Makes Us Different
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            We go above and beyond to ensure your financial security and peace of mind.
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <usp.icon className="w-6 h-6" />
              </div>

              <h3 className="font-display text-lg font-bold mb-2">
                {usp.title}
              </h3>

              <p className="text-sm text-primary-foreground/70">
                {usp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="font-display text-5xl font-bold mb-2">19+</div>
            <div className="text-primary-foreground/70">Years Experience</div>
          </div>
          <div>
            <div className="font-display text-5xl font-bold mb-2">1000+</div>
            <div className="text-primary-foreground/70">Happy Clients</div>
          </div>
          <div>
            <div className="font-display text-5xl font-bold mb-2">98%</div>
            <div className="text-primary-foreground/70">Claim Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
