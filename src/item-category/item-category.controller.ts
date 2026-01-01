import { Controller, Get, Post,Put,Delete, Query } from '@nestjs/common';
import { ItemCategoryService } from './item-category.service';

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
    async getCategory(@Query('id') id: string) {
        return this.itemCategoryService.category({ id: parseInt(id) });
    }

    @Post()
    async createCategory(@Query('data') data: string) {
        return this.itemCategoryService.createCategory(JSON.parse(data));
    }

    @Put(':id')
    async updateCategory(@Query('id') id: string, @Query('data') data: string) {
        return this.itemCategoryService.updateCategory({
            where: { id: parseInt(id) },
            data: JSON.parse(data),
        });
    }

    @Delete(':id')
    async deleteCategory(@Query('id') id: string) {
        return this.itemCategoryService.deleteCategory({ id: parseInt(id) });
    }
}