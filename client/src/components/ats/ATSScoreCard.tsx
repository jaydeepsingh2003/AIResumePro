"use client";

import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export function ATSScoreCard({ resumeId }: { resumeId: string }) {
    // This would fetch from the backend service in a real implementation
    const score = 78;

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>ATS Score</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 flex items-center justify-center rounded-full bg-slate-100 text-2xl font-bold">
                        {score}
                    </div>
                    <div className="flex-1 space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>Overall Strength</span>
                            <span className="font-medium text-emerald-600">Good</span>
                        </div>
                        <Progress value={score} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                            Your resume is better than 78% of candidates.
                        </p>
                    </div>
                </div>

                <div className="mt-6 space-y-3">
                    <div className="flex justify-between items-center p-2 bg-red-50 text-red-700 text-sm rounded">
                        <span>Missing Keyword: <strong>React Native</strong></span>
                        <Button variant="ghost" size="sm" className="h-6 text-red-700 hover:text-red-800 hover:bg-red-100">Fix</Button>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-amber-50 text-amber-700 text-sm rounded">
                        <span>Weak Action Verb: <strong>Worked on</strong></span>
                        <Button variant="ghost" size="sm" className="h-6 text-amber-700 hover:text-amber-800 hover:bg-amber-100">Fix</Button>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-50 text-green-700 text-sm rounded">
                        <span>Formatting: <strong>Excellent</strong></span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
