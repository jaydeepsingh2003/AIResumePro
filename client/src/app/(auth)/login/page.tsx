"use client";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2, Sparkles, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
    const router = useRouter();
    const { register, handleSubmit } = useForm();

    const loginMutation = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            localStorage.setItem("token", data.access_token);
            router.push("/dashboard");
        },
        onError: (error: any) => {
            alert("Login failed: " + error.message);
        }
    });

    const onSubmit = (data: any) => {
        loginMutation.mutate(data);
    };

    return (
        <div className="flex min-h-screen bg-titanium-black overflow-hidden relative">
            {/* Animated Background Gradients */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-neon-cyan/10 rounded-full blur-[120px] -ml-64 -mt-64 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-[120px] -mr-64 -mb-64 animate-pulse" style={{ animationDelay: '2s' }} />

            {/* Left side: Background/Content */}
            <div className="hidden lg:flex flex-1 relative overflow-hidden items-center justify-center p-20">
                <div className="relative z-10 max-w-xl text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/5 backdrop-blur-3xl p-4 rounded-[2rem] w-fit mb-12 border border-white/10 shadow-[0_0_20px_rgba(0,242,255,0.1)]"
                    >
                        <Sparkles className="w-10 h-10 text-neon-cyan drop-shadow-[0_0_10px_rgba(0,242,255,1)]" />
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl font-black mb-6 tracking-tighter uppercase italic leading-tight">
                        Reignite Your <br />
                        <span className="text-neon-cyan drop-shadow-[0_0_15px_rgba(0,242,255,0.6)]">Professional Code.</span>
                    </h1>

                    <p className="text-sm sm:text-base text-slate-400 font-bold uppercase tracking-wider leading-relaxed mb-12 opacity-80">
                        Interrogating the global talent matrix. <br />
                        Elevate your career frequency to the elite tier.
                    </p>

                    <div className="space-y-10">
                        {[
                            { step: "01", title: "Neural Optimizers", desc: "ATS-Hardened Architectures" },
                            { step: "02", title: "Logic Enhancement", desc: "AI-Powered Bullet Quantization" },
                            { step: "03", title: "Consensus Analysis", desc: "Real-time Job Matching Score" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="flex items-center gap-6 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-neon-cyan group-hover:text-black transition-all duration-500 shadow-xl">
                                    <span className="font-black italic">{item.step}</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-black uppercase tracking-widest text-white">{item.title}</h3>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1 group-hover:text-neon-cyan transition-colors">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right side: Form */}
            <div className="w-full lg:w-[650px] flex flex-col items-center justify-center p-4 sm:p-8 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md glass p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                    <Link href="/" className="inline-flex items-center text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-neon-cyan mb-8 sm:mb-12 transition-all group">
                        <ArrowLeft className="w-3.5 h-3.5 mr-2 sm:mr-3 group-hover:-translate-x-1 transition-transform" />
                        Abort to Base
                    </Link>

                    <div className="mb-10 sm:mb-14">
                        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tighter uppercase italic">Access.</h2>
                        <p className="text-slate-500 mt-2 text-[10px] font-bold uppercase tracking-wider">Identify your digital footprint.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
                        <div className="space-y-2 sm:space-y-3">
                            <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Digital Identifier</label>
                            <Input
                                placeholder="identifying@email.com"
                                className="h-11 bg-white/5 border-white/10 text-white focus:border-neon-cyan transition-all rounded-xl px-4 font-medium text-sm placeholder:text-slate-700"
                                type="email"
                                {...register("email", { required: true })}
                            />
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Access Key</label>
                                <Link href="#" className="text-[9px] sm:text-[10px] text-neon-purple font-black hover:underline uppercase tracking-widest">Lost Key?</Link>
                            </div>
                            <Input
                                placeholder="••••••••"
                                className="h-11 bg-white/5 border-white/10 text-white focus:border-neon-cyan transition-all rounded-xl px-4 font-medium text-sm placeholder:text-slate-700"
                                type="password"
                                {...register("password", { required: true })}
                            />
                        </div>
                        <Button type="submit" className="w-full h-12 bg-white text-black hover:bg-neon-cyan rounded-xl font-bold uppercase tracking-wider text-xs transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.15)] mt-4 disabled:bg-slate-800 disabled:text-slate-500" disabled={loginMutation.isPending}>
                            {loginMutation.isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Initiate Login"}
                        </Button>
                    </form>

                    <div className="mt-10 sm:mt-12 text-center text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                        New Entity? <Link href="/register" className="font-black text-neon-purple hover:underline ml-2">Register Identity</Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
