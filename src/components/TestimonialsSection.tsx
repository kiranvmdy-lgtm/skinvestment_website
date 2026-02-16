import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content: "Kiran sir helped me choose the right health insurance for my entire family. His patience and knowledge made the process so easy. Highly recommend!",
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
      content: "Professional service with a personal touch. Kiran ji takes time to explain every detail. Best financial advisor I've worked with.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what families who trusted us have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
