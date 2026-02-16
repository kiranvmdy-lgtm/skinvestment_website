import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
    const [phase, setPhase] = useState<"enter" | "visible" | "exit">("enter");
    const [step, setStep] = useState(0); // controls sequential reveal

    useEffect(() => {
        // Kick off entrance
        const t0 = setTimeout(() => setPhase("visible"), 100);

        // Sequential reveals – each element appears one after another
        const t1 = setTimeout(() => setStep(1), 300);   // logo
        const t2 = setTimeout(() => setStep(2), 1000);   // "Welcome to"
        const t3 = setTimeout(() => setStep(3), 1700);   // company name
        const t4 = setTimeout(() => setStep(4), 2400);   // tagline
        const t5 = setTimeout(() => setStep(5), 3000);   // loading bar

        // Start exit
        const exitTimer = setTimeout(() => setPhase("exit"), 4500);
        // Remove splash after exit animation
        const finishTimer = setTimeout(onFinish, 5400);

        return () => {
            [t0, t1, t2, t3, t4, t5, exitTimer, finishTimer].forEach(clearTimeout);
        };
    }, [onFinish]);

    const fadeClass = (requiredStep: number) =>
        `transition-all ease-out ${step >= requiredStep
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-5 scale-95"
        }`;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary to-primary-dark transition-opacity duration-1000 ${phase === "exit" ? "opacity-0" : "opacity-100"
                }`}
        >
            {/* Background pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />
                <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary-foreground/3 blur-2xl animate-pulse" />
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-8">
                {/* Logo — step 1 */}
                <div
                    className={`relative ${fadeClass(1)}`}
                    style={{ transitionDuration: "1200ms" }}
                >
                    <div className="absolute inset-0 bg-primary-foreground/20 rounded-3xl blur-xl scale-110" />
                    <img
                        src={logo}
                        alt="SK Investment Consultants"
                        className="relative h-20 md:h-28 w-auto drop-shadow-2xl"
                    />
                </div>

                {/* Welcome Text — step 2 & 3 */}
                <div className="text-center">
                    <p
                        className={`text-primary-foreground/60 text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-3 ${fadeClass(2)}`}
                        style={{ transitionDuration: "1000ms" }}
                    >
                        Welcome to
                    </p>
                    <h1
                        className={`font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight ${fadeClass(3)}`}
                        style={{ transitionDuration: "1200ms" }}
                    >
                        SK Investment
                    </h1>
                    <h2
                        className={`font-display text-xl md:text-2xl lg:text-3xl font-semibold text-primary-foreground/80 mt-2 ${fadeClass(3)}`}
                        style={{ transitionDuration: "1400ms" }}
                    >
                        Consultants
                    </h2>
                </div>

                {/* Tagline — step 4 */}
                <p
                    className={`text-primary-foreground/50 text-sm md:text-base font-medium tracking-wide ${fadeClass(4)}`}
                    style={{ transitionDuration: "1000ms" }}
                >
                    Protecting Families. Growing Wealth.
                </p>

                {/* Loading bar — step 5 */}
                <div
                    className={`w-48 h-0.5 bg-primary-foreground/10 rounded-full overflow-hidden mt-2 ${fadeClass(5)}`}
                    style={{ transitionDuration: "800ms" }}
                >
                    <div
                        className="h-full bg-primary-foreground/60 rounded-full"
                        style={{
                            animation: step >= 5 ? "splash-load 1.4s ease-in-out forwards" : "none",
                        }}
                    />
                </div>
            </div>

            {/* Animation keyframes */}
            <style>{`
                @keyframes splash-load {
                    0% { width: 0%; }
                    60% { width: 70%; }
                    100% { width: 100%; }
                }
            `}</style>
        </div>
    );
};

export default SplashScreen;
