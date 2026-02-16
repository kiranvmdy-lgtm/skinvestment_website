import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageSquarePlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FixedCTA = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        service: "",
        enquiry: "",
    });

    const services = [
        "Life Insurance",
        "Health Insurance",
        "Group/Corporate Insurance",
        "Mutual Funds",
        "Personal Loans",
        "Home Loans",
        "Digital Marketing",
        "Other",
    ];

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast({
            title: "Thank you!",
            description: "We'll get back to you shortly.",
        });
        setFormData({ name: "", phone: "", service: "", enquiry: "" });
        setIsSubmitting(false);
    };

    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
            <div
                className="w-[240px] rounded-l-2xl overflow-hidden"
                style={{ boxShadow: "-4px 0 30px rgba(0,0,0,0.15)" }}
            >
                {/* Header */}
                <div className="bg-primary text-primary-foreground px-4 py-3">
                    <div className="flex items-center gap-1.5 mb-0.5">
                        <MessageSquarePlus className="w-4 h-4" />
                        <h3 className="font-display text-sm font-bold">Quick Enquiry</h3>
                    </div>
                    <p className="text-primary-foreground/70 text-[11px]">
                        Get a free consultation today!
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-card p-3 flex flex-col gap-2 border-l border-b border-border"
                >
                    <div>
                        <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name *"
                            required
                            className="h-8 text-xs bg-muted/50 border-border"
                        />
                    </div>

                    <div>
                        <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Contact Number *"
                            required
                            className="h-8 text-xs bg-muted/50 border-border"
                        />
                    </div>

                    <div>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full h-8 px-2 rounded-md border border-border bg-muted/50 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                            <option value="">Select Service *</option>
                            {services.map((s) => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <Textarea
                            name="enquiry"
                            value={formData.enquiry}
                            onChange={handleChange}
                            placeholder="Your Enquiry *"
                            required
                            rows={2}
                            className="resize-none text-xs bg-muted/50 border-border"
                        />
                    </div>

                    <Button
                        type="submit"
                        size="sm"
                        className="w-full gap-1.5 font-semibold text-xs h-8"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            "Sending..."
                        ) : (
                            <>
                                <Send className="w-3 h-3" />
                                Submit Enquiry
                            </>
                        )}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default FixedCTA;
