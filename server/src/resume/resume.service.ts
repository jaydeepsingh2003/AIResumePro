import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';

@Injectable()
export class ResumeService {
    constructor(private prisma: PrismaService) { }

    async create(userId: string, createResumeDto: CreateResumeDto) {
        return this.prisma.resume.create({
            data: {
                ...createResumeDto,
                userId,
                content: createResumeDto.content || {}, // Default empty JSON if not provided
            },
        });
    }

    async findAll(userId: string) {
        return this.prisma.resume.findMany({
            where: { userId },
        });
    }

    async findOne(id: string) {
        return this.prisma.resume.findUnique({
            where: { id },
        });
    }

    async update(id: string, updateResumeDto: UpdateResumeDto) {
        const { content, style, ...otherData } = updateResumeDto;

        // Prepare data object, handling JSON fields correctly if present
        const data: any = { ...otherData };
        if (content) data.content = content;
        if (style) data.style = style;

        return this.prisma.resume.update({
            where: { id },
            data,
        });
    }

    async remove(id: string) {
        return this.prisma.resume.delete({
            where: { id },
        });
    }
}
