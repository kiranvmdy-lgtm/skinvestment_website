import { Award, Heart, Target, Eye } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-card overflow-hidden">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex flex-col justify-end">
                {/* Decorative elements */}
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

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg">
              <div className="text-3xl font-display font-bold">19+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">About Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Partner in Financial Security
            </h2>

            <p className="text-muted-foreground text-lg mb-6">
              At <strong className="text-foreground">SK Investment Consultants</strong>, we believe every family deserves financial peace of mind. Our journey began with a simple mission: to make financial security accessible, understandable, and stress-free for every family.
            </p>

            <p className="text-muted-foreground mb-8">
              With over 19 years of experience in the financial services industry, we've helped more than 1000 families protect their loved ones, grow their wealth, and achieve their financial goals. Our caring, family-first approach sets us apart – we treat every client like family.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border shadow-card">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  Providing stress-free financial security to every family through personalized guidance and trusted solutions.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border shadow-card">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  Becoming the most trusted personal financial advisor in the region, known for integrity and care.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Integrity", "Care", "Trust", "Excellence", "Family-First"].map((value) => (
                <span
                  key={value}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium"
                >
                  <Heart className="w-3 h-3" />
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
