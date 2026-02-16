import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I choose the right insurance plan?",
      answer: "We start by understanding your family's needs, budget, and future goals. Based on this, we recommend customized plans that provide maximum coverage at affordable premiums. Our consultation is completely free!",
    },
    {
      question: "Is there a medical checkup required for health insurance?",
      answer: "Not always! Many of our health insurance plans don't require a medical checkup for enrollment. We'll help you find the best no-checkup policies that suit your needs.",
    },
    {
      question: "How long does claim settlement take?",
      answer: "We pride ourselves on speedy claim settlement. Most cashless claims are processed within 24-48 hours. For reimbursement claims, we typically see settlement within 7-10 working days.",
    },
    {
      question: "Can you help with existing policy renewals?",
      answer: "Absolutely! We help with renewals, policy reviews, and even porting existing policies to better options if needed. We ensure you always have the best coverage at competitive rates.",
    },
    {
      question: "What documents are needed to start investing?",
      answer: "Basic KYC documents like Aadhaar, PAN card, and bank details are required. We handle all the paperwork and make the process completely hassle-free for you.",
    },
    {
      question: "Do you provide doorstep service?",
      answer: "Yes! We offer doorstep policy delivery and consultation services. Whether you need documents picked up or want a face-to-face discussion, we come to you.",
    },
    {
      question: "How do I start investing in mutual funds?",
      answer: "Starting is easy! We'll help you set clear financial goals, assess your risk profile, and create a personalized investment plan. You can start with as little as ₹500 per month through SIPs.",
    },
    {
      question: "What support do you provide during claims?",
      answer: "We provide end-to-end claim support – from documentation to follow-up with insurance companies. Our dedicated team ensures your claims are processed smoothly and quickly.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">FAQs</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Got questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card shadow-sm data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
