import { Controller, Get, Post, Put, Delete, Query } from '@nestjs/common';
import { ClassService } from './class.service';

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
    async getClass(@Query('id') id: string) {
        return this.classService.class({ id: parseInt(id) });
    }

    @Post()
    async createClass(@Query('data') data: string) {
        return this.classService.createClass(JSON.parse(data));
    }

    @Put(':id')
    async updateClass(@Query('id') id: string, @Query('data') data: string) {
        return this.classService.updateClass({
            where: { id: parseInt(id) },
            data: JSON.parse(data),
        });
    }

    @Delete(':id')
    async deleteClass(@Query('id') id: string) {        
        return this.classService.deleteClass({ id: parseInt(id) });
    }
}
