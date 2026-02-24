import { useState, useRef, useEffect } from "react";
import { X, Send, User } from "lucide-react";
import angelAvatar from "@/assets/angel.svg";

interface Message {
    id: number;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

const knowledgeBase: { keywords: string[]; response: string }[] = [
    {
        keywords: ["hello", "hi", "hey", "good morning", "good evening", "good afternoon"],
        response: "Hello! 👋 Welcome to SK Investment Consultants. I'm Angel, your virtual assistant. How can I help you today? You can ask me about Insurance, Personal Loans, Home Loans, Digital Marketing, or Auditing & Tax services.",
    },
    {
        keywords: ["life insurance", "term insurance", "term plan"],
        response: "We offer comprehensive Life Insurance plans including Term Life, Whole Life, Endowment Policies, ULIPs, Child Plans, and Retirement Plans. Our experts will help you find the perfect coverage for your family's future. Would you like a free consultation?",
    },
    {
        keywords: ["health insurance", "medical insurance", "health cover", "mediclaim"],
        response: "Our Health Insurance plans include Individual Plans, Family Floater, Critical Illness Cover, Senior Citizen Plans, Top-Up Plans, and Cashless Claims at 10,000+ hospitals. No health checkup required for many plans! Want to know more?",
    },
    {
        keywords: ["motor insurance", "car insurance", "bike insurance", "vehicle insurance", "two wheeler"],
        response: "We provide Motor Insurance for Two-Wheelers, Four-Wheelers, and Commercial Vehicles — including Third-Party and Comprehensive Plans with instant renewal. Protect your vehicle today!",
    },
    {
        keywords: ["travel insurance", "travel cover"],
        response: "Travel worry-free with our Travel Insurance! We cover Medical Emergencies, Trip Cancellation, Lost Baggage, Flight Delays for both International & Domestic trips. Instant policy issuance available!",
    },
    {
        keywords: ["group insurance", "corporate insurance", "employee insurance"],
        response: "Our Group/Corporate Insurance solutions include Group Health, Group Term Life, Workmen Compensation, Key Man Insurance, and customized Employee Benefits plans. Perfect for businesses of all sizes!",
    },
    {
        keywords: ["business insurance"],
        response: "Our Business Insurance for Life plans safeguard your business against unforeseen risks with tailored commercial insurance solutions — from property to liability, we've got you covered!",
    },
    {
        keywords: ["mutual fund", "sip", "investment", "invest"],
        response: "We offer goal-based Mutual Fund investment planning including SIP Plans, Equity Funds, Debt Funds, Hybrid Funds, and Tax Saving (ELSS). Start your wealth creation journey with expert guidance!",
    },
    {
        keywords: ["personal loan", "personal finance"],
        response: "Get Personal Loans with quick approval (24-48 hours), competitive interest rates, minimal documentation, flexible tenure (12-60 months), and no collateral required. Visit our Personal Loan page for details!",
    },
    {
        keywords: ["home loan", "housing loan", "property loan"],
        response: "Make your dream home a reality! We offer Home Loans with competitive rates, tenure up to 30 years, balance transfer options, and loans for all property types. Visit our Home Loan page for more!",
    },
    {
        keywords: ["digital marketing", "seo", "social media", "website", "google ads", "marketing"],
        response: "Our Digital Marketing services include SEO, Social Media Marketing, Website Development, Google & Meta Ads, Content Marketing, Email Marketing, Video Marketing, and Analytics. We've delivered 150+ projects with 3x average ROI!",
    },
    {
        keywords: ["audit", "tax", "gst", "itr", "income tax", "tax filing", "accounting", "bookkeeping"],
        response: "Our Auditing & Tax services include Tax Planning, ITR Filing, Statutory Audit, GST Consultancy, Tax Audit & Assessment, and Accounting & Bookkeeping. 15+ years of experience with 500+ clients served!",
    },
    {
        keywords: ["contact", "phone", "call", "email", "reach", "address", "office"],
        response: "You can reach us at:\n📞 Phone: +91 6364825402\n📧 Email: shankarakrupainvestment@gmail.com\n\nOr visit our Contact page to schedule a free consultation!",
    },
    {
        keywords: ["consultation", "free", "appointment", "meet", "book"],
        response: "We offer FREE consultations! You can:\n1️⃣ Call us at +91 6364825402\n2️⃣ Visit our Contact page\n3️⃣ Send us a WhatsApp message\n\nOur experts will analyze your needs and recommend the perfect solution!",
    },
    {
        keywords: ["service", "services", "what do you offer", "what you do", "help"],
        response: "We offer a wide range of financial services:\n🛡️ Insurance (Life, Health, Motor, Travel, Group, Business)\n💰 Mutual Funds & Investments\n💳 Personal Loans\n🏠 Home Loans\n📱 Digital Marketing\n📊 Auditing & Tax\n\nWhich service interests you?",
    },
    {
        keywords: ["thank", "thanks", "thank you"],
        response: "You're welcome! 😊 If you have any more questions, feel free to ask. You can also reach us at +91 6364825402 for personalized assistance. Have a great day!",
    },
    {
        keywords: ["bye", "goodbye", "see you"],
        response: "Goodbye! 👋 Thank you for visiting SK Investment Consultants. Feel free to come back anytime you need help. Have a wonderful day!",
    },
];

const getResponse = (input: string): string => {
    const lowerInput = input.toLowerCase().trim();

    for (const entry of knowledgeBase) {
        if (entry.keywords.some((keyword) => lowerInput.includes(keyword))) {
            return entry.response;
        }
    }

    return "I'm not sure about that, but I'd love to help! You can ask me about our services like Insurance, Loans, Digital Marketing, or Auditing & Tax. Or call us at +91 6364825402 for personalized assistance. 😊";
};

const AngelChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hi there! 👋 I'm Angel, your virtual assistant at SK Investment Consultants. How can I help you today?",
            sender: "bot",
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        if (isOpen) inputRef.current?.focus();
    }, [isOpen]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now(),
            text: input.trim(),
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            const botResponse = getResponse(input);
            const botMsg: Message = {
                id: Date.now() + 1,
                text: botResponse,
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 800 + Math.random() * 700);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const quickQuestions = [
        "What services do you offer?",
        "Tell me about Insurance",
        "Personal Loan details",
        "How to contact you?",
    ];

    return (
        <>
            {/* Chat Toggle Button */}
            <div
                className="fixed bottom-6 right-6 z-[60] group"
                style={{ display: isOpen ? "none" : "block" }}
            >
                {/* Hover tooltip */}
                <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white text-gray-800 font-semibold text-sm px-4 py-2 rounded-xl shadow-lg border border-gray-100 whitespace-nowrap">
                        Hi! 👋
                        <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-gray-100 transform rotate-45" />
                    </div>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-pink-700 shadow-xl shadow-pink-500/30 flex items-center justify-center hover:scale-110 transition-all duration-300 p-1.5"
                    aria-label="Open chat"
                >
                    <img src={angelAvatar} alt="Angel" className="w-full h-full rounded-full" />
                </button>
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-4 right-4 z-[60] w-[370px] max-w-[calc(100vw-2rem)] h-[540px] max-h-[calc(100vh-2rem)] rounded-2xl shadow-2xl border border-border bg-background flex flex-col overflow-hidden animate-fade-in">
                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-t-2xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm overflow-hidden">
                                <img src={angelAvatar} alt="Angel" className="w-9 h-9" />
                            </div>
                            <div>
                                <h3 className="font-bold text-base">Angel</h3>
                                <p className="text-xs text-white/70">SK Investment Assistant</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                            aria-label="Close chat"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/20">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                {msg.sender === "bot" && (
                                    <div className="w-7 h-7 rounded-full bg-pink-500/10 flex items-center justify-center flex-shrink-0 mt-1 overflow-hidden">
                                        <img src={angelAvatar} alt="Angel" className="w-6 h-6" />
                                    </div>
                                )}
                                <div
                                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${msg.sender === "user"
                                        ? "bg-pink-500 text-white rounded-br-md"
                                        : "bg-card border border-border text-foreground rounded-bl-md shadow-sm"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                                {msg.sender === "user" && (
                                    <div className="w-7 h-7 rounded-full bg-pink-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <User className="w-4 h-4 text-pink-500" />
                                    </div>
                                )}
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex gap-2 justify-start">
                                <div className="w-7 h-7 rounded-full bg-pink-500/10 flex items-center justify-center flex-shrink-0 mt-1 overflow-hidden">
                                    <img src={angelAvatar} alt="Angel" className="w-6 h-6" />
                                </div>
                                <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                                    <div className="flex gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-pink-500/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                                        <span className="w-2 h-2 rounded-full bg-pink-500/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                                        <span className="w-2 h-2 rounded-full bg-pink-500/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Questions (shown only when few messages) */}
                    {messages.length <= 2 && (
                        <div className="px-4 py-2 border-t border-border bg-background">
                            <p className="text-xs text-muted-foreground mb-2 font-medium">Quick questions:</p>
                            <div className="flex flex-wrap gap-1.5">
                                {quickQuestions.map((q, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setInput(q);
                                            setTimeout(() => {
                                                const userMsg: Message = {
                                                    id: Date.now(),
                                                    text: q,
                                                    sender: "user",
                                                    timestamp: new Date(),
                                                };
                                                setMessages((prev) => [...prev, userMsg]);
                                                setIsTyping(true);
                                                setTimeout(() => {
                                                    const botResponse = getResponse(q);
                                                    const botMsg: Message = {
                                                        id: Date.now() + 1,
                                                        text: botResponse,
                                                        sender: "bot",
                                                        timestamp: new Date(),
                                                    };
                                                    setMessages((prev) => [...prev, botMsg]);
                                                    setIsTyping(false);
                                                }, 800);
                                                setInput("");
                                            }, 100);
                                        }}
                                        className="text-xs px-3 py-1.5 rounded-full bg-pink-500/5 text-pink-600 hover:bg-pink-500/10 border border-pink-500/15 transition-colors font-medium"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Input */}
                    <div className="px-4 py-3 border-t border-border bg-background flex items-center gap-2">
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type your message..."
                            className="flex-1 bg-muted/50 border border-border rounded-full px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500/40 transition-all"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim()}
                            className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-105"
                            aria-label="Send message"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AngelChatbot;
