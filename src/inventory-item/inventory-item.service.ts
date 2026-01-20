import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../generated/prisma/client';
import { InventoryItem, CreateInventoryItemDtoSimple, UpdateInventoryItemDtoSimple } from '../types/types';

@Injectable()
export class InventoryItemService {
    constructor(private prisma: PrismaService) {}

    async item(id: number): Promise<InventoryItem | null> {
        return this.prisma.inventoryItem.findUnique({
            where: { id },
        });
    }

    async items(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.InventoryItemWhereUniqueInput;
        where?: Prisma.InventoryItemWhereInput;
        orderBy?: Prisma.InventoryItemOrderByWithRelationInput;
    }): Promise<InventoryItem[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.inventoryItem.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createItem(dto: CreateInventoryItemDtoSimple): Promise<InventoryItem> {
        const data: Prisma.InventoryItemCreateInput = {
            itemName: dto.itemName,
            description: dto.description,
            quantity: dto.quantity,
            category: { connect: { id: dto.categoryId } },
            isActive: dto.isActive,
        };
        return this.prisma.inventoryItem.create({ data });
    }

    async updateItem(id: number, dto: UpdateInventoryItemDtoSimple): Promise<InventoryItem> {
        const data: Prisma.InventoryItemUpdateInput = {};
        
        if (dto.itemName !== undefined) data.itemName = dto.itemName;
        if (dto.description !== undefined) data.description = dto.description;
        if (dto.quantity !== undefined) data.quantity = dto.quantity;
        if (dto.categoryId !== undefined) data.category = { connect: { id: dto.categoryId } };
        if (dto.isActive !== undefined) data.isActive = dto.isActive;

        return this.prisma.inventoryItem.update({
            where: { id },
            data,
        });
    }

    async deleteItem(id: number): Promise<InventoryItem> {
        return this.prisma.inventoryItem.delete({
            where: { id },
        });
    }
}
 