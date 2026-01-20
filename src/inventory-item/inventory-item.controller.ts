import { Controller, Get, Post, Put, Delete, Query, Param, Body } from '@nestjs/common';
import { InventoryItemService } from './inventory-item.service';
import { CreateInventoryItemDtoSimple, UpdateInventoryItemDtoSimple } from '../types/types';

@Controller('inventory-item')
export class InventoryItemController {
    constructor(private readonly inventoryItemService: InventoryItemService) {}

    @Get()
    async getInventoryItems(
        @Query('skip') skip?: string,
        @Query('take') take?: string,
        @Query('cursor') cursor?: string,
        @Query('where') where?: string,
        @Query('orderBy') orderBy?: string,
    ) {
        return this.inventoryItemService.items({
            skip: skip ? parseInt(skip) : undefined,
            take: take ? parseInt(take) : undefined,
            cursor: cursor ? JSON.parse(cursor) : undefined,
            where: where ? JSON.parse(where) : undefined,
            orderBy: orderBy ? JSON.parse(orderBy) : undefined,
        });
    }
    
    @Get(':id')
    async getInventoryItemById(@Param('id') id: string) {
        return this.inventoryItemService.item(parseInt(id));
    }

    @Post()
    async createInventoryItem(@Body() data: CreateInventoryItemDtoSimple) {
        return this.inventoryItemService.createItem(data);
    }

    @Put(':id')
    async updateInventoryItem(@Param('id') id: string, @Body() data: UpdateInventoryItemDtoSimple) {
        return this.inventoryItemService.updateItem(parseInt(id), data);
    }

    @Delete(':id')
    async deleteInventoryItem(@Param('id') id: string) {
        return this.inventoryItemService.deleteItem(parseInt(id));
    }
}
