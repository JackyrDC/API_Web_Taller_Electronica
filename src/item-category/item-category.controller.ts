import { Controller, Get, Query } from '@nestjs/common';
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
}