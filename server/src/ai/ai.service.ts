import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class AiService {
    private openai: OpenAI;

    constructor() {
        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }

    async improveText(text: string, instruction: string = "Make it more professional") {
        try {
            const response = await this.openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: `You are an expert resume writer. Improve the following text based on this instruction: "${instruction}". Keep the tone professional and concise. Return only the improved text, no explanations.`
                    },
                    {
                        role: "user",
                        content: text
                    }
                ],
                temperature: 0.7,
            });

            return {
                original: text,
                improvedText: response.choices[0].message.content.trim()
            };
        } catch (error) {
            console.error("OpenAI Error:", error);
            // Fallback for development if no key or error
            return {
                original: text,
                improvedText: text + " (AI Improvement failed - check API Key)"
            };
        }
    }

    async generateSummary(jobTitle: string, experience: any[]) {
        // Implementation for generating a summary based on job title and experience
        // omitted for brevity, can be added later
        return { summary: `Experienced ${jobTitle} with a proven track record...` };
    }
}
