import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('resumes')
@UseGuards(JwtAuthGuard)
export class ResumeController {
    constructor(private readonly resumeService: ResumeService) { }

    @Post()
    create(@Request() req, @Body() createResumeDto: CreateResumeDto) {
        return this.resumeService.create(req.user.userId, createResumeDto);
    }

    @Get()
    findAll(@Request() req) {
        return this.resumeService.findAll(req.user.userId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.resumeService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateResumeDto: UpdateResumeDto) {
        return this.resumeService.update(id, updateResumeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.resumeService.remove(id);
    }
}
