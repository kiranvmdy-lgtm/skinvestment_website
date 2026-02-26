import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageSquarePlus, CheckCircle2, X } from "lucide-react";

const FixedCTA = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
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
        setFormData({ name: "", phone: "", service: "", enquiry: "" });
        setIsSubmitting(false);
        setShowThankYou(true);
    };

    const closeThankYou = () => {
        setShowThankYou(false);
    };

    // Auto-close after 6 seconds
    useEffect(() => {
        if (showThankYou) {
            const timer = setTimeout(() => {
                setShowThankYou(false);
            }, 6000);
            return () => clearTimeout(timer);
        }
    }, [showThankYou]);

    // Prevent body scroll when thank you is shown
    useEffect(() => {
        if (showThankYou) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [showThankYou]);

    return (
        <>
            {/* Full-Page Thank You Overlay */}
            {showThankYou && (
                <div
                    className="thank-you-overlay"
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(135deg, hsl(210, 80%, 20%) 0%, hsl(260, 60%, 30%) 50%, hsl(210, 80%, 20%) 100%)",
                        animation: "thankYouFlash 1.2s ease-out",
                    }}
                >
                    {/* Flash overlay layer */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: "white",
                            animation: "flashBurst 1s ease-out forwards",
                            pointerEvents: "none",
                        }}
                    />

                    {/* Radial glow */}
                    <div
                        style={{
                            position: "absolute",
                            width: "600px",
                            height: "600px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, hsla(142, 70%, 50%, 0.2) 0%, transparent 70%)",
                            animation: "pulseGlow 2s ease-in-out infinite",
                        }}
                    />

                    {/* Close button */}
                    <button
                        onClick={closeThankYou}
                        style={{
                            position: "absolute",
                            top: "24px",
                            right: "24px",
                            background: "rgba(255,255,255,0.15)",
                            border: "1px solid rgba(255,255,255,0.25)",
                            borderRadius: "50%",
                            width: "48px",
                            height: "48px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            color: "white",
                            transition: "all 0.3s ease",
                            animation: "fadeSlideIn 0.8s ease-out 0.6s both",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(255,255,255,0.3)";
                            e.currentTarget.style.transform = "scale(1.1)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                    >
                        <X size={24} />
                    </button>

                    {/* Content */}
                    <div
                        style={{
                            position: "relative",
                            zIndex: 1,
                            textAlign: "center",
                            padding: "40px",
                            maxWidth: "600px",
                        }}
                    >
                        {/* Animated checkmark */}
                        <div
                            style={{
                                animation: "bounceIn 0.8s ease-out 0.3s both",
                                marginBottom: "32px",
                            }}
                        >
                            <div
                                style={{
                                    width: "120px",
                                    height: "120px",
                                    borderRadius: "50%",
                                    background: "linear-gradient(135deg, hsl(142, 70%, 45%), hsl(142, 70%, 55%))",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 auto",
                                    boxShadow: "0 0 60px hsla(142, 70%, 50%, 0.4), 0 0 120px hsla(142, 70%, 50%, 0.2)",
                                    animation: "checkPulse 2s ease-in-out infinite",
                                }}
                            >
                                <CheckCircle2 size={64} color="white" strokeWidth={2.5} />
                            </div>
                        </div>

                        {/* Thank You heading */}
                        <h1
                            style={{
                                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                                fontWeight: 800,
                                color: "white",
                                margin: "0 0 16px 0",
                                letterSpacing: "-0.02em",
                                animation: "fadeSlideUp 0.8s ease-out 0.5s both",
                                textShadow: "0 2px 20px rgba(0,0,0,0.3)",
                            }}
                        >
                            Thank You! 🎉
                        </h1>

                        {/* Subtitle */}
                        <p
                            style={{
                                fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                                color: "rgba(255,255,255,0.85)",
                                margin: "0 0 24px 0",
                                lineHeight: 1.6,
                                animation: "fadeSlideUp 0.8s ease-out 0.7s both",
                            }}
                        >
                            Your enquiry has been submitted successfully!
                            <br />
                            Our team will get back to you shortly.
                        </p>

                        {/* Decorative line */}
                        <div
                            style={{
                                width: "80px",
                                height: "4px",
                                background: "linear-gradient(90deg, hsl(142, 70%, 50%), hsl(200, 80%, 60%))",
                                borderRadius: "2px",
                                margin: "0 auto 24px",
                                animation: "fadeSlideUp 0.8s ease-out 0.9s both",
                            }}
                        />

                        {/* Additional message */}
                        <p
                            style={{
                                fontSize: "1rem",
                                color: "rgba(255,255,255,0.6)",
                                margin: 0,
                                animation: "fadeSlideUp 0.8s ease-out 1.1s both",
                            }}
                        >
                            This page will close automatically...
                        </p>
                    </div>

                    {/* Sparkle particles */}
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            style={{
                                position: "absolute",
                                width: `${4 + Math.random() * 6}px`,
                                height: `${4 + Math.random() * 6}px`,
                                borderRadius: "50%",
                                background: `hsla(${140 + Math.random() * 80}, 70%, 70%, ${0.3 + Math.random() * 0.4})`,
                                top: `${10 + Math.random() * 80}%`,
                                left: `${5 + Math.random() * 90}%`,
                                animation: `sparkleFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 2}s`,
                            }}
                        />
                    ))}
                </div>
            )}

            {/* CTA Sidebar */}
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

            {/* Keyframe animations */}
            <style>{`
                @keyframes flashBurst {
                    0% { opacity: 1; }
                    100% { opacity: 0; }
                }

                @keyframes thankYouFlash {
                    0% { opacity: 0; }
                    15% { opacity: 1; }
                    100% { opacity: 1; }
                }

                @keyframes bounceIn {
                    0% { opacity: 0; transform: scale(0.3); }
                    50% { opacity: 1; transform: scale(1.1); }
                    70% { transform: scale(0.9); }
                    100% { opacity: 1; transform: scale(1); }
                }

                @keyframes fadeSlideUp {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }

                @keyframes fadeSlideIn {
                    0% { opacity: 0; transform: scale(0.8); }
                    100% { opacity: 1; transform: scale(1); }
                }

                @keyframes checkPulse {
                    0%, 100% { box-shadow: 0 0 60px hsla(142, 70%, 50%, 0.4), 0 0 120px hsla(142, 70%, 50%, 0.2); }
                    50% { box-shadow: 0 0 80px hsla(142, 70%, 50%, 0.6), 0 0 160px hsla(142, 70%, 50%, 0.3); }
                }

                @keyframes pulseGlow {
                    0%, 100% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.2); opacity: 0.8; }
                }

                @keyframes sparkleFloat {
                    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
                    50% { transform: translateY(-20px) scale(1.5); opacity: 0.8; }
                }
            `}</style>
        </>
    );
};

export default FixedCTA;
