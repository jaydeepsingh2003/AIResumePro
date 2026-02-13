import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
    constructor(private readonly aiService: AiService) { }

    @Post('improve')
    async improveText(@Body() body: { text: string; instruction?: string }) {
        return this.aiService.improveText(body.text, body.instruction);
    }
}
