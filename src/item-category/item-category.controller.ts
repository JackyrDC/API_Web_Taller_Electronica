import { Controller, Get, Post, Put, Delete, Query, Param, Body } from '@nestjs/common';
import { ItemCategoryService } from './item-category.service';
import { CreateItemCategoryDto, UpdateItemCategoryDto } from '../types/types';

@Controller('item-category')
export class ItemCategoryController {
    constructor(private readonly itemCategoryService: ItemCategoryService) {}

    @Get()
    async getCategories(
        @Query('skip') skip?: string,
        @Query('take') take?: string,
        @Query('cursor') cursor?: string,
        @Query('where') where?: string,
        @Query('orderBy') orderBy?: string,
    ) {
        return this.itemCategoryService.categories({
            skip: skip ? parseInt(skip) : undefined,
            take: take ? parseInt(take) : undefined,
            cursor: cursor ? JSON.parse(cursor) : undefined,
            where: where ? JSON.parse(where) : undefined,
            orderBy: orderBy ? JSON.parse(orderBy) : undefined,
        });
    }

    @Get(':id')
    async getCategory(@Param('id') id: string) {
        return this.itemCategoryService.category(parseInt(id));
    }

    @Post()
    async createCategory(@Body() data: CreateItemCategoryDto) {
        return this.itemCategoryService.createCategory(data);
    }

    @Put(':id')
    async updateCategory(@Param('id') id: string, @Body() data: UpdateItemCategoryDto) {
        return this.itemCategoryService.updateCategory(parseInt(id), data);
    }

    @Delete(':id')
    async deleteCategory(@Param('id') id: string) {
        return this.itemCategoryService.deleteCategory(parseInt(id));
    }
}