import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AiModule } from './ai/ai.module';
import { ResumeModule } from './resume/resume.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [AiModule, ResumeModule, AuthModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
