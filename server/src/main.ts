import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;
    const clientOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:3000';

    app.enableCors({
        origin: [clientOrigin, 'http://localhost:3000', 'http://localhost:3002'],
        credentials: true,
        methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    });
    await app.listen(port);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
