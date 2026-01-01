import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {Prisma, InventoryItem} from '../../generated/prisma/client';

@Injectable()
export class InventoryItemService {
    constructor(private prisma: PrismaService) {}

    async item(): Promise<InventoryItem[]> {
        return this.prisma.inventoryItem.findMany();
    }

    async items(params:{
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

    async createItem(data: Prisma.InventoryItemCreateInput): Promise<InventoryItem> {
        return this.prisma.inventoryItem.create({
            data,
        });
    }

    async updateItem(params: {
        where: Prisma.InventoryItemWhereUniqueInput;
        data: Prisma.InventoryItemUpdateInput;
    }): Promise<InventoryItem> {
        const { where, data } = params;
        return this.prisma.inventoryItem.update({
            data,
            where,
        });
    }

    async deleteItem(where: Prisma.InventoryItemWhereUniqueInput): Promise<InventoryItem> {
        return this.prisma.inventoryItem.delete({
            where,
        });
    }
}
 