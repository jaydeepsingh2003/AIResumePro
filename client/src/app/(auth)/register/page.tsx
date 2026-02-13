"use client";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { register as registerUser } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2, Sparkles, ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function RegisterPage() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const registerMutation = useMutation({
        mutationFn: registerUser,
        onSuccess: (data: any) => {
            localStorage.setItem("token", data.access_token);
            router.push("/dashboard");
        },
        onError: (error: any) => {
            alert("Registration failed: " + error.message);
        }
    });

    const onSubmit = (data: any) => {
        registerMutation.mutate(data);
    };

    return (
        <div className="flex min-h-screen bg-titanium-black overflow-hidden relative">
            {/* Animated Background Gradients */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-neon-cyan/10 rounded-full blur-[120px] -ml-64 -mb-64 animate-pulse" style={{ animationDelay: '2s' }} />

            {/* Left side: Background/Content */}
            <div className="hidden lg:flex flex-1 relative overflow-hidden items-center justify-center p-20 order-2">
                <div className="relative z-10 max-w-xl text-white">
                    <div className="grid grid-cols-2 gap-8 mb-16">
                        {[1, 2, 3, 4].map(i => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                key={i}
                                className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl group hover:border-neon-cyan/50 transition-all duration-500"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-neon-cyan/10 flex items-center justify-center mb-6 group-hover:bg-neon-cyan/20 transition-all">
                                    <CheckCircle2 className="w-6 h-6 text-neon-cyan drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]" />
                                </div>
                                <div className="h-2 w-20 bg-white/20 rounded-full mb-3" />
                                <div className="h-2 w-32 bg-white/10 rounded-full" />
                            </motion.div>
                        ))}
                    </div>

                    <h1 className="text-6xl font-black mb-8 tracking-tighter uppercase italic leading-[1.1]">
                        Join the <br />
                        <span className="text-neon-cyan drop-shadow-[0_0_15px_rgba(0,242,255,0.6)]">Neural Network.</span>
                    </h1>

                    <p className="text-xl text-slate-400 font-black uppercase tracking-widest leading-relaxed mb-16 opacity-80">
                        Synthesize your career narrative with <br />
                        next-generation algorithmic precision.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-neon-purple/10 border border-neon-purple/30 backdrop-blur-3xl">
                            <Sparkles className="w-6 h-6 text-neon-purple drop-shadow-[0_0_8px_rgba(188,19,254,0.8)]" />
                            <p className="text-xs font-black uppercase tracking-widest text-white">Infinite Potential - No Core Subscription Required</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side: Form */}
            <div className="w-full lg:w-[650px] flex flex-col items-center justify-center p-8 relative z-20 order-1">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-full max-w-md glass p-12 rounded-[3.5rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                    <Link href="/" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-neon-cyan mb-12 transition-all group">
                        <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-1 transition-transform" />
                        Abort to Base
                    </Link>

                    <div className="mb-14">
                        <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">Register.</h2>
                        <p className="text-slate-500 mt-3 text-xs font-black uppercase tracking-widest">Construct your professional profile.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Universal Designation</label>
                            <Input
                                placeholder="FULL NAME"
                                className="h-16 bg-white/5 border-white/10 text-white focus:border-neon-cyan transition-all rounded-2xl px-6 font-black tracking-widest uppercase text-xs placeholder:text-slate-800"
                                type="text"
                                {...register("name", { required: true })}
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Digital Identifier</label>
                            <Input
                                placeholder="IDENTIFYING@EMAIL.COM"
                                className="h-16 bg-white/5 border-white/10 text-white focus:border-neon-cyan transition-all rounded-2xl px-6 font-black tracking-widest uppercase text-xs placeholder:text-slate-800"
                                type="email"
                                {...register("email", { required: true })}
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Access Key</label>
                            <Input
                                placeholder="MINIMUM 8 CHARACTERS"
                                className="h-16 bg-white/5 border-white/10 text-white focus:border-neon-cyan transition-all rounded-2xl px-6 font-black tracking-widest text-xs placeholder:text-slate-800"
                                type="password"
                                {...register("password", { required: true, minLength: 8 })}
                            />
                        </div>
                        <Button type="submit" className="w-full h-16 bg-white text-black hover:bg-neon-cyan rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.15)] mt-4 disabled:bg-slate-800 disabled:text-slate-500" disabled={registerMutation.isPending}>
                            {registerMutation.isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Synthesize Account"}
                        </Button>
                    </form>

                    <div className="mt-12 text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                        Already Synthesized? <Link href="/login" className="font-black text-neon-purple hover:underline ml-2">Access Keyhouse</Link>
                    </div>

                    <p className="mt-12 text-center text-[8px] font-black uppercase tracking-[0.3em] text-slate-700 leading-relaxed">
                        By synthesizing, you agree to our <br />
                        <Link href="#" className="underline hover:text-white">Protocol Terms</Link> and <Link href="#" className="underline hover:text-white">Data Privacy</Link>.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
