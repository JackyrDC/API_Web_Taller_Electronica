import { Controller, Get, Post, Put, Delete, Query, Body, Param } from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateClassDto, UpdateClassDto } from '../types/types';

@Controller('class')
export class ClassController {
    constructor(private readonly classService: ClassService) {}

    @Get()
    async getClasses(
        @Query('skip') skip?: string,
        @Query('take') take?: string,
        @Query('cursor') cursor?: string,
        @Query('where') where?: string,
        @Query('orderBy') orderBy?: string,
    ) {
        return this.classService.classes({
            skip: skip ? parseInt(skip) : undefined,
            take: take ? parseInt(take) : undefined,
            cursor: cursor ? JSON.parse(cursor) : undefined,
            where: where ? JSON.parse(where) : undefined,
            orderBy: orderBy ? JSON.parse(orderBy) : undefined,
        });
    }

    @Get(':id')
    async getClass(@Param('id') id: string) {
        return this.classService.class(parseInt(id));
    }

    @Post()
    async createClass(@Body() data: CreateClassDto) {
        return this.classService.createClass(data);
    }

    @Put(':id')
    async updateClass(@Param('id') id: string, @Body() data: UpdateClassDto) {
        return this.classService.updateClass(parseInt(id), data);
    }

    @Delete(':id')
    async deleteClass(@Param('id') id: string) {
        return this.classService.deleteClass(parseInt(id));
    }
}
