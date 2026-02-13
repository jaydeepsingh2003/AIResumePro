"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function BuilderPage() {
    // Mock resumes
    const resumes = [
        { id: "1", title: "Software Engineer Resume", updatedAt: "2h ago" },
        { id: "2", title: "Product Manager Role", updatedAt: "1d ago" },
    ];

    return (
        <div className="h-full p-8 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">My Resumes</h2>
                    <p className="text-muted-foreground">Manage and create your professional resumes.</p>
                </div>
                <Link href="/builder/new">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Create New
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/builder/new">
                    <Card className="h-full border-dashed flex flex-col items-center justify-center p-6 hover:bg-slate-50 transition cursor-pointer min-h-[250px]">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                            <Plus className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-lg">Create New Resume</h3>
                        <p className="text-sm text-slate-500 text-center mt-2">Start from scratch or use AI</p>
                    </Card>
                </Link>

                {resumes.map((resume) => (
                    <Link key={resume.id} href={`/builder/${resume.id}`}>
                        <Card className="hover:shadow-md transition cursor-pointer h-full min-h-[250px] flex flex-col justify-between">
                            <CardHeader>
                                <CardTitle>{resume.title}</CardTitle>
                                <CardDescription>Last edited {resume.updatedAt}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="aspect-[210/297] bg-slate-100 rounded-md w-full relative overflow-hidden">
                                    {/* Thumbnail placeholder */}
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-xs">
                                        Preview
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="ghost" size="sm">Edit</Button>
                                <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
