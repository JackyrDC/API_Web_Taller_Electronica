import { Controller,Get,Post,Put,Delete,Query, Param, Body } from '@nestjs/common';
import { InventoryItemService } from './inventory-item.service';

@Controller('inventory-item')
export class InventoryItemController {
    constructor(private readonly inventoryItemService: InventoryItemService) {}

    @Get()
    getInventoryItemsWithParams(@Param() params): Promise<any> {
        const parsedParams = {
            skip: params.skip ? Number(params.skip) : undefined,
            take: params.take ? Number(params.take) : undefined,
            cursor: params.cursor ? { id: Number(params.cursor) } : undefined,
            where: params.where ? JSON.parse(params.where) : undefined,
            orderBy: params.orderBy ? JSON.parse(params.orderBy) : undefined,
        };
        return this.inventoryItemService.items(parsedParams);
    }
    
    @Get(':id')
    getInventoryItemById(@Param('id') id: string): Promise<any> {
        return this.inventoryItemService.items({
            where: { id: Number(id) },
        });
    }

    @Post()
    createInventoryItem(@Body('data') data: string): Promise<any> {
        const parsedData = JSON.parse(data);
        return this.inventoryItemService.createItem(parsedData);
    }

    @Put('id')
    updateInventoryItem(@Param() params, @Body('data') data: string): Promise<any> {     
        const where = { id: Number(params.id) };
        const parsedData = JSON.parse(data);
        return this.inventoryItemService.updateItem({ where, data: parsedData });
    }   

    @Delete('id')
    deleteInventoryItem(@Param('id') id: string): Promise<any> {
        return this.inventoryItemService.deleteItem({ id: Number(id) });
    }
}
