import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    BookOpen,
    Shield,
    Heart,
    TrendingUp,
    Wallet,
    GraduationCap,
    Clock,
    CheckCircle2,
    Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

/* ─── Comic Panel Data ─── */
interface ComicPanel {
    id: number;
    scene: string;
    sceneEmoji: string;
    bgGradient: string;
    sceneBg: string;
    characterLeft?: { name: string; emoji: string };
    characterRight?: { name: string; emoji: string };
    dialogueLeft?: string;
    dialogueRight?: string;
    narration?: string;
    mood: "happy" | "worried" | "sad" | "hopeful" | "relieved" | "inspiring";
    sceneIllustration: string;
}

const comicPanels: ComicPanel[] = [
    {
        id: 1,
        scene: "A Happy Family",
        sceneEmoji: "🏡",
        bgGradient: "from-amber-100 via-orange-50 to-yellow-100",
        sceneBg: "from-amber-200/40 to-yellow-200/30",
        characterLeft: { name: "Rahul", emoji: "👨‍💼" },
        characterRight: { name: "Priya", emoji: "👩‍👧" },
        dialogueLeft:
            "Life is going great, Priya! My job is stable, Ananya is growing up well… we don't need to worry about anything!",
        dialogueRight:
            "I know, Rahul! But shouldn't we plan for the future? What if something unexpected happens?",
        narration:
            "Meet Rahul & Priya — a happy middle-class family living in Bangalore with their daughter Ananya.",
        mood: "happy",
        sceneIllustration: "🏠🌳👨‍👩‍👧☀️🌷",
    },
    {
        id: 2,
        scene: "The Doubt",
        sceneEmoji: "🤔",
        bgGradient: "from-slate-100 via-gray-100 to-blue-50",
        sceneBg: "from-slate-200/40 to-blue-100/30",
        characterLeft: { name: "Rahul", emoji: "😏" },
        characterRight: { name: "Friend", emoji: "🧑‍💼" },
        dialogueLeft:
            "Insurance? That's just a waste of money. Nothing bad is going to happen to me!",
        dialogueRight:
            "Rahul, I used to think the same way… but trust me, you should at least talk to an advisor. You never know what life throws at you.",
        narration:
            "Rahul's colleague Vikram suggests getting insurance, but Rahul brushes it off.",
        mood: "worried",
        sceneIllustration: "🏢☕💬🤷‍♂️",
    },
    {
        id: 3,
        scene: "The Unexpected",
        sceneEmoji: "🏥",
        bgGradient: "from-red-100 via-rose-50 to-pink-100",
        sceneBg: "from-red-200/40 to-pink-100/30",
        characterLeft: { name: "Doctor", emoji: "👨‍⚕️" },
        characterRight: { name: "Priya", emoji: "😢" },
        dialogueLeft:
            "Mrs. Priya, your husband needs an urgent surgery. The estimated cost is ₹8 Lakhs. We need to begin treatment immediately.",
        dialogueRight:
            "Eight lakhs?! Where will we get that kind of money? We barely have ₹1 lakh in savings…",
        narration:
            "6 months later — Rahul is rushed to the hospital after a sudden health crisis.",
        mood: "sad",
        sceneIllustration: "🏥🚑💉😰",
    },
    {
        id: 4,
        scene: "The Struggle",
        sceneEmoji: "💸",
        bgGradient: "from-gray-200 via-slate-100 to-zinc-100",
        sceneBg: "from-gray-300/40 to-zinc-200/30",
        characterLeft: { name: "Priya", emoji: "😰" },
        characterRight: { name: "Ananya", emoji: "👧" },
        dialogueLeft:
            "I had to borrow from relatives, break my FDs, and even sell my jewellery… if only we had planned ahead…",
        dialogueRight: "Mamma, will Papa be okay? When is he coming home?",
        narration:
            "Priya scrambles to arrange funds. The family is under immense financial and emotional stress.",
        mood: "sad",
        sceneIllustration: "📄💳😞📉",
    },
    {
        id: 5,
        scene: "The Turning Point",
        sceneEmoji: "💡",
        bgGradient: "from-blue-100 via-indigo-50 to-cyan-50",
        sceneBg: "from-blue-200/40 to-cyan-100/30",
        characterLeft: { name: "Rahul", emoji: "🤕" },
        characterRight: { name: "Vikram", emoji: "🧑‍💼" },
        dialogueLeft:
            "You were right, Vikram. I should have listened. My family suffered because of my carelessness…",
        dialogueRight:
            "It's not too late, Rahul. Once you recover, let me connect you with a good insurance advisor. Let's make sure your family is always protected.",
        narration:
            "Rahul recovers, but the financial damage is done. He realizes the importance of being prepared.",
        mood: "hopeful",
        sceneIllustration: "🏥💡🤝✨",
    },
    {
        id: 6,
        scene: "The Smart Decision",
        sceneEmoji: "📋",
        bgGradient: "from-emerald-100 via-green-50 to-teal-50",
        sceneBg: "from-emerald-200/40 to-teal-100/30",
        characterLeft: { name: "Rahul", emoji: "😊" },
        characterRight: { name: "Advisor", emoji: "🧑‍💻" },
        dialogueLeft:
            "I want to protect my family properly this time — health insurance, life insurance, everything. What do you recommend?",
        dialogueRight:
            "Great decision, Rahul! I'll design a customized plan — health cover for the whole family, a term plan for income protection, and a savings plan for Ananya's education.",
        narration:
            "Rahul visits SK Investment Consultants and takes charge of his family's financial security.",
        mood: "relieved",
        sceneIllustration: "📋✍️🛡️💼",
    },
    {
        id: 7,
        scene: "Peace of Mind",
        sceneEmoji: "☀️",
        bgGradient: "from-green-100 via-emerald-50 to-lime-50",
        sceneBg: "from-green-200/40 to-lime-100/30",
        characterLeft: { name: "Rahul", emoji: "😃" },
        characterRight: { name: "Priya", emoji: "😊" },
        dialogueLeft:
            "Now I sleep peacefully knowing that no matter what happens, our family is financially secure.",
        dialogueRight:
            "And Ananya's education fund is growing too! This is the best decision we've ever made.",
        narration:
            "The family is now protected with comprehensive insurance and investments.",
        mood: "happy",
        sceneIllustration: "🏡🛡️😊🌈",
    },
    {
        id: 8,
        scene: "The Moral",
        sceneEmoji: "🛡️",
        bgGradient: "from-primary/20 via-primary/10 to-accent/10",
        sceneBg: "from-primary/20 to-accent/10",
        characterLeft: { name: "Narrator", emoji: "📢" },
        dialogueLeft:
            "Insurance isn't an expense — it's a promise to your loved ones. Don't wait for a crisis. Protect your family TODAY!",
        narration:
            "The best time to get insured was yesterday. The second best time is NOW.",
        mood: "inspiring",
        sceneIllustration: "🛡️❤️👨‍👩‍👧‍👦🌟",
    },
];

/* ─── Benefits Data ─── */
const insuranceBenefits = [
    {
        icon: Shield,
        title: "Financial Protection",
        desc: "Insurance acts as a safety net that shields your family from unexpected financial burdens during medical emergencies, accidents, or loss of income.",
        color: "from-blue-500 to-indigo-600",
        lightColor: "bg-blue-50",
    },
    {
        icon: Heart,
        title: "Health Coverage",
        desc: "Medical costs are rising every year. Health insurance ensures you get the best treatment without draining your life savings.",
        color: "from-rose-500 to-pink-600",
        lightColor: "bg-rose-50",
    },
    {
        icon: GraduationCap,
        title: "Child's Future Security",
        desc: "Education plans ensure your child's dreams aren't affected regardless of life's uncertainties. Secure their future education today.",
        color: "from-violet-500 to-purple-600",
        lightColor: "bg-violet-50",
    },
    {
        icon: Wallet,
        title: "Tax Benefits",
        desc: "Insurance premiums qualify for tax deductions under Section 80C and 80D, helping you save while staying protected.",
        color: "from-emerald-500 to-green-600",
        lightColor: "bg-emerald-50",
    },
    {
        icon: TrendingUp,
        title: "Wealth Creation",
        desc: "Investment-linked insurance plans help grow your wealth over time while providing life cover — the best of both worlds.",
        color: "from-amber-500 to-orange-600",
        lightColor: "bg-amber-50",
    },
    {
        icon: Clock,
        title: "Retirement Planning",
        desc: "Pension and annuity plans ensure a steady income after retirement, so you can enjoy your golden years without financial stress.",
        color: "from-cyan-500 to-teal-600",
        lightColor: "bg-cyan-50",
    },
];

/* ─── Mood-based styling ─── */
const moodStyles: Record<
    ComicPanel["mood"],
    { border: string; shadow: string; badge: string; glow: string }
> = {
    happy: {
        border: "border-amber-300",
        shadow: "shadow-amber-200/50",
        badge: "bg-amber-500 text-white",
        glow: "from-amber-400/20 to-transparent",
    },
    worried: {
        border: "border-slate-300",
        shadow: "shadow-slate-200/50",
        badge: "bg-slate-500 text-white",
        glow: "from-slate-400/20 to-transparent",
    },
    sad: {
        border: "border-red-300",
        shadow: "shadow-red-200/50",
        badge: "bg-red-500 text-white",
        glow: "from-red-400/20 to-transparent",
    },
    hopeful: {
        border: "border-blue-300",
        shadow: "shadow-blue-200/50",
        badge: "bg-blue-500 text-white",
        glow: "from-blue-400/20 to-transparent",
    },
    relieved: {
        border: "border-emerald-300",
        shadow: "shadow-emerald-200/50",
        badge: "bg-emerald-500 text-white",
        glow: "from-emerald-400/20 to-transparent",
    },
    inspiring: {
        border: "border-primary",
        shadow: "shadow-primary/20",
        badge: "bg-primary text-primary-foreground",
        glow: "from-primary/20 to-transparent",
    },
};

/* ─── Animated Panel Observer Hook ─── */
const useReveal = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return { ref, visible };
};

/* ─── Scene Illustration ─── */
const SceneIllustration = ({ emojis, mood }: { emojis: string; mood: string }) => {
    const chars = [...emojis].filter((c) => c.trim());
    return (
        <div className="flex items-center justify-center gap-3 py-4">
            {chars.map((e, i) => (
                <span
                    key={i}
                    className="text-4xl md:text-5xl drop-shadow-md animate-bounce"
                    style={{
                        animationDelay: `${i * 200}ms`,
                        animationDuration: "2s",
                    }}
                >
                    {e}
                </span>
            ))}
        </div>
    );
};

/* ─── Speech Bubble Component ─── */
const SpeechBubble = ({
    children,
    direction,
    speaker,
    emoji,
}: {
    children: string;
    direction: "left" | "right";
    speaker: string;
    emoji: string;
}) => (
    <div
        className={`flex gap-3 ${direction === "right" ? "flex-row-reverse" : ""}`}
    >
        {/* Avatar */}
        <div className="flex-shrink-0 flex flex-col items-center gap-1">
            <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-4xl border-2 border-white ring-2 ring-primary/10">
                {emoji}
            </div>
            <span className="text-[10px] font-bold text-foreground/70 uppercase tracking-wider">
                {speaker}
            </span>
        </div>
        {/* Bubble */}
        <div
            className={`relative max-w-[80%] bg-white rounded-2xl px-5 py-3.5 shadow-md border border-border ${direction === "left" ? "rounded-bl-sm" : "rounded-br-sm"}`}
        >
            <p className="text-sm md:text-base text-foreground leading-relaxed font-medium">
                "{children}"
            </p>
            {/* Tail */}
            <div
                className={`absolute bottom-2 w-3 h-3 bg-white border-border rotate-45 ${direction === "left" ? "-left-1.5 border-l border-b" : "-right-1.5 border-r border-b"}`}
            />
        </div>
    </div>
);

/* ─── Animated Panel Wrapper ─── */
const AnimatedPanel = ({
    children,
    index,
}: {
    children: React.ReactNode;
    index: number;
}) => {
    const { ref, visible } = useReveal();
    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ transitionDelay: `${index * 50}ms` }}
        >
            {children}
        </div>
    );
};

/* ─── Benefit Card ─── */
const BenefitCard = ({
    icon: Icon,
    title,
    desc,
    color,
    lightColor,
    index,
}: {
    icon: React.ElementType;
    title: string;
    desc: string;
    color: string;
    lightColor: string;
    index: number;
}) => {
    const { ref, visible } = useReveal();
    return (
        <div
            ref={ref}
            className={`group relative rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div
                className={`w-14 h-14 rounded-xl ${lightColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
            >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                </div>
            </div>
            <h4 className="font-display text-lg font-bold text-foreground mb-2">
                {title}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
                {desc}
            </p>
        </div>
    );
};

/* ─── Main Page ─── */
const MediaPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero */}
                <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-primary via-primary to-primary-dark text-primary-foreground relative overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl" />
                        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />
                        <div
                            className="absolute inset-0 opacity-[0.07]"
                            style={{
                                backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                                backgroundSize: "32px 32px",
                            }}
                        />
                    </div>
                    <div className="container mx-auto relative z-10 text-center">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/15 text-primary-foreground/90 text-sm font-semibold tracking-wide mb-6 border border-primary-foreground/20">
                            <BookOpen className="w-4 h-4" />
                            Media & Stories
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Why Do We Need Insurance?
                        </h1>
                        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
                            A comic story about Rahul's journey — from ignoring
                            insurance to realizing its true value the hard way.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="#comic-story">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="gap-2 text-base px-8 font-bold"
                                >
                                    <BookOpen className="w-4 h-4" />
                                    Read the Comic
                                </Button>
                            </a>
                            <a href="#benefits">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="gap-2 text-base px-8 font-bold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                                >
                                    <Shield className="w-4 h-4" />
                                    Insurance Benefits
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Why Insurance Matters - Quick Stats */}
                <section className="py-12 bg-card border-b border-border">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            {[
                                { stat: "₹8L+", label: "Avg. surgery cost in India", emoji: "🏥" },
                                { stat: "75%", label: "Families without health cover", emoji: "👨‍👩‍👧" },
                                { stat: "12%", label: "Medical inflation per year", emoji: "📈" },
                                { stat: "₹50/day", label: "Cost of ₹10L health cover", emoji: "🛡️" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="text-center p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors"
                                >
                                    <span className="text-3xl mb-2 block">{item.emoji}</span>
                                    <p className="font-display text-2xl md:text-3xl font-black text-primary">
                                        {item.stat}
                                    </p>
                                    <p className="text-xs md:text-sm text-muted-foreground mt-1">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comic Title Card */}
                <section id="comic-story" className="py-10 bg-card border-b border-border">
                    <div className="container mx-auto text-center">
                        <div
                            className="inline-block px-8 py-5 rounded-2xl bg-gradient-to-r from-amber-500 via-red-500 to-primary text-white shadow-xl relative overflow-hidden"
                            style={{
                                fontFamily:
                                    '"Comic Sans MS", "Bangers", cursive, sans-serif',
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 animate-pulse" />
                            <h2 className="text-2xl md:text-4xl font-black tracking-wide uppercase relative z-10">
                                📖 "The Family Shield" 🛡️
                            </h2>
                            <p className="text-sm md:text-base mt-1 opacity-90 font-medium relative z-10">
                                An 8-Panel Comic Story — Created with ChatGPT
                            </p>
                        </div>
                        <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
                            Follow Rahul's emotional journey and discover why insurance
                            is the most important financial decision you'll ever make.
                        </p>
                    </div>
                </section>

                {/* Comic Panels */}
                <section className="py-12 md:py-20 bg-muted/30">
                    <div className="container mx-auto max-w-3xl space-y-10 md:space-y-14">
                        {comicPanels.map((panel, idx) => {
                            const mood = moodStyles[panel.mood];
                            return (
                                <AnimatedPanel key={panel.id} index={idx}>
                                    <div
                                        className={`relative rounded-3xl border-[3px] ${mood.border} shadow-xl ${mood.shadow} overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl`}
                                    >
                                        {/* Panel Number Badge */}
                                        <div
                                            className={`absolute top-4 left-4 w-12 h-12 rounded-full ${mood.badge} flex items-center justify-center font-black text-xl shadow-lg z-10 ring-4 ring-white`}
                                        >
                                            {panel.id}
                                        </div>

                                        {/* Scene Illustration */}
                                        <div className={`bg-gradient-to-br ${panel.sceneBg} pt-16 pb-2`}>
                                            <SceneIllustration emojis={panel.sceneIllustration} mood={panel.mood} />
                                        </div>

                                        {/* Scene Header */}
                                        <div
                                            className={`bg-gradient-to-r ${panel.bgGradient} px-6 pt-4 pb-4 md:px-8`}
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-2xl">
                                                    {panel.sceneEmoji}
                                                </span>
                                                <h3
                                                    className="font-display text-xl md:text-2xl font-black text-foreground uppercase tracking-wide"
                                                    style={{
                                                        fontFamily:
                                                            '"Comic Sans MS", cursive, sans-serif',
                                                    }}
                                                >
                                                    {panel.scene}
                                                </h3>
                                            </div>
                                            {/* Narration Box */}
                                            {panel.narration && (
                                                <div className="bg-foreground/5 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-foreground/10">
                                                    <p className="text-sm md:text-base text-foreground/80 italic font-medium">
                                                        📝 {panel.narration}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Dialogue Area */}
                                        <div className="bg-gradient-to-b from-white to-gray-50 px-6 py-6 md:px-8 md:py-8 space-y-5">
                                            {panel.dialogueLeft &&
                                                panel.characterLeft && (
                                                    <SpeechBubble
                                                        direction="left"
                                                        speaker={
                                                            panel.characterLeft.name
                                                        }
                                                        emoji={
                                                            panel.characterLeft
                                                                .emoji
                                                        }
                                                    >
                                                        {panel.dialogueLeft}
                                                    </SpeechBubble>
                                                )}
                                            {panel.dialogueRight &&
                                                panel.characterRight && (
                                                    <SpeechBubble
                                                        direction="right"
                                                        speaker={
                                                            panel.characterRight
                                                                .name
                                                        }
                                                        emoji={
                                                            panel.characterRight
                                                                .emoji
                                                        }
                                                    >
                                                        {panel.dialogueRight}
                                                    </SpeechBubble>
                                                )}
                                        </div>
                                    </div>
                                </AnimatedPanel>
                            );
                        })}
                    </div>
                </section>

                {/* Key Takeaways */}
                <section className="py-16 bg-card border-t border-border">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
                            Key Takeaways from Rahul's Story
                        </h2>
                        <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
                            Don't repeat Rahul's mistakes. Here's what his journey teaches us about insurance.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-5">
                            {[
                                {
                                    emoji: "⏰",
                                    title: "Don't Delay",
                                    desc: "The best time to buy insurance is before you need it. Delaying puts your family at risk.",
                                },
                                {
                                    emoji: "👨‍👩‍👧",
                                    title: "Protect Your Loved Ones",
                                    desc: "Insurance ensures your family won't face financial hardship during medical emergencies.",
                                },
                                {
                                    emoji: "💰",
                                    title: "Save Your Savings",
                                    desc: "Without insurance, a medical emergency can wipe out years of hard-earned savings.",
                                },
                                {
                                    emoji: "😌",
                                    title: "Peace of Mind",
                                    desc: "With proper coverage, you can focus on recovery instead of worrying about bills.",
                                },
                                {
                                    emoji: "📈",
                                    title: "Beat Medical Inflation",
                                    desc: "Medical costs rise 12% annually. Today's ₹5L surgery could cost ₹15L in 10 years.",
                                },
                                {
                                    emoji: "🎓",
                                    title: "Secure Your Child's Future",
                                    desc: "Education plans ensure your child's dreams continue regardless of life's uncertainties.",
                                },
                            ].map((item, i) => (
                                <AnimatedPanel key={i} index={i}>
                                    <div className="flex gap-4 p-5 rounded-2xl bg-muted/50 border border-border hover:bg-muted transition-colors hover:shadow-md">
                                        <span className="text-3xl flex-shrink-0">
                                            {item.emoji}
                                        </span>
                                        <div>
                                            <h4 className="font-display font-bold text-foreground mb-1">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-muted-foreground">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </AnimatedPanel>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits of Insurance */}
                <section id="benefits" className="py-16 md:py-24 bg-muted/20">
                    <div className="container mx-auto">
                        <div className="text-center mb-14">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-4">
                                <Star className="w-4 h-4" />
                                Why Insurance Matters
                            </span>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Benefits of Insurance in Your Life
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
                                Insurance is not just a product — it's a promise of security,
                                stability, and peace of mind for you and your family.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {insuranceBenefits.map((benefit, i) => (
                                <BenefitCard key={i} index={i} {...benefit} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Insurance Checklist */}
                <section className="py-16 bg-card border-t border-border">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                                Your Insurance Checklist ✅
                            </h2>
                            <p className="text-muted-foreground max-w-lg mx-auto">
                                Make sure you have these essential coverages to protect your family completely.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                {
                                    title: "Term Life Insurance",
                                    desc: "Coverage of at least 10x your annual income to protect your family's lifestyle",
                                    priority: "Essential",
                                },
                                {
                                    title: "Health Insurance",
                                    desc: "Minimum ₹10 Lakhs family floater covering hospitalization & critical illness",
                                    priority: "Essential",
                                },
                                {
                                    title: "Personal Accident Cover",
                                    desc: "Protection against accidental disability that could affect your earning capacity",
                                    priority: "Important",
                                },
                                {
                                    title: "Critical Illness Cover",
                                    desc: "Lump sum payout on diagnosis of major illnesses like cancer, heart attack",
                                    priority: "Important",
                                },
                                {
                                    title: "Child Education Plan",
                                    desc: "Secure your child's higher education fund with guaranteed maturity benefit",
                                    priority: "Recommended",
                                },
                                {
                                    title: "Retirement/Pension Plan",
                                    desc: "Build a corpus for a worry-free retirement with regular income post-retirement",
                                    priority: "Recommended",
                                },
                            ].map((item, i) => (
                                <AnimatedPanel key={i} index={i}>
                                    <div className="flex items-start gap-3 p-5 rounded-xl bg-muted/30 border border-border hover:bg-muted/50 transition-colors">
                                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className="font-display font-bold text-foreground">
                                                    {item.title}
                                                </h4>
                                                <span
                                                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${item.priority === "Essential"
                                                        ? "bg-red-100 text-red-700"
                                                        : item.priority === "Important"
                                                            ? "bg-amber-100 text-amber-700"
                                                            : "bg-green-100 text-green-700"
                                                        }`}
                                                >
                                                    {item.priority}
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </AnimatedPanel>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gradient-to-r from-primary via-primary to-primary-dark text-primary-foreground relative overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary-foreground/5 blur-3xl" />
                        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary-foreground/5 blur-3xl" />
                    </div>
                    <div className="container mx-auto text-center relative z-10">
                        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                            Don't Be Like the Old Rahul 🙅‍♂️
                        </h2>
                        <p className="text-primary-foreground/80 text-lg mb-4 max-w-xl mx-auto">
                            Protect your family today. Get a free consultation
                            with our expert advisors and find the perfect insurance
                            plan for you.
                        </p>
                        <p className="text-primary-foreground/60 text-sm mb-8 max-w-lg mx-auto italic">
                            "The best time to plant a tree was 20 years ago. The second best time is now."
                            — Same goes for insurance.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/contact">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="gap-2 text-base px-8 font-bold"
                                >
                                    Get Free Consultation
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                            <a href="https://wa.me/916364825402?text=Hi%2C%20I%20read%20the%20insurance%20comic%20story%20and%20want%20to%20know%20more%20about%20insurance%20plans.">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="gap-2 text-base px-8 font-bold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                                >
                                    💬 Chat on WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default MediaPage;
