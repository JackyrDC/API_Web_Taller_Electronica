import { Controller, Get, Post,Put,Delete, Param, Body } from '@nestjs/common';
import { ItemCategoryService } from './item-category.service';

@Controller('item-category')
export class ItemCategoryController {
    constructor(private readonly itemCategoryService: ItemCategoryService) {}

    @Get()
    async getCategories(
        @Param('skip') skip?: string,
        @Param('take') take?: string,
        @Param('cursor') cursor?: string,
        @Param('where') where?: string,
        @Param('orderBy') orderBy?: string,
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
        return this.itemCategoryService.category({ id: parseInt(id) });
    }

    @Post()
    async createCategory(@Body('data') data: string) {
        return this.itemCategoryService.createCategory(JSON.parse(data));
    }

    @Put(':id')
    async updateCategory(@Param('id') id: string, @Body('data') data: string) {
        return this.itemCategoryService.updateCategory({
            where: { id: parseInt(id) },
            data: JSON.parse(data),
        });
    }

    @Delete(':id')
    async deleteCategory(@Param('id') id: string) {
        return this.itemCategoryService.deleteCategory({ id: parseInt(id) });
    }
}