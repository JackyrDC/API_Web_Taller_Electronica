import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ClassService } from './class.service';

@Controller('class')
export class ClassController {
    constructor(private readonly classService: ClassService) {}

    @Get()
    async getClasses(
        @Param('skip') skip?: string,
        @Param('take') take?: string,
        @Param('cursor') cursor?: string,
        @Param('where') where?: string,
        @Param('orderBy') orderBy?: string,
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
        return this.classService.class({ id: parseInt(id) });
    }

    @Post()
    async createClass(@Body('data') data: string) {
        return this.classService.createClass(JSON.parse(data));
    }

    @Put(':id')
    async updateClass(@Param('id') id: string, @Body('data') data: string) {
        return this.classService.updateClass({
            where: { id: parseInt(id) },
            data: JSON.parse(data),
        });
    }

    @Delete(':id')
    async deleteClass(@Param('id') id: string) {        
        return this.classService.deleteClass({ id: parseInt(id) });
    }
}
