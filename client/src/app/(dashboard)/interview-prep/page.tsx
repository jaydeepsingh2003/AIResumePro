export default function InterviewPrepPage() {
    return (
        <div className="p-8 space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">AI Interview Prep</h2>
            <p className="text-muted-foreground">Practice answering questions tailored to your resume.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 border rounded-xl bg-gradient-to-br from-indigo-50 to-white hover:shadow-lg transition cursor-pointer">
                    <h3 className="font-bold text-lg mb-2 text-indigo-900">Behavioral Interview</h3>
                    <p className="text-sm text-slate-600">Practice STAR method questions based on your experience.</p>
                </div>
                <div className="p-6 border rounded-xl bg-gradient-to-br from-emerald-50 to-white hover:shadow-lg transition cursor-pointer">
                    <h3 className="font-bold text-lg mb-2 text-emerald-900">Technical Deep Dive</h3>
                    <p className="text-sm text-slate-600">Test your knowledge on skills listed in your resume.</p>
                </div>
            </div>
        </div>
    );
}
