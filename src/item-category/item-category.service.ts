import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../generated/prisma/client';
import { ItemCategory, CreateItemCategoryDto, UpdateItemCategoryDto } from '../types/types';

@Injectable()
export class ItemCategoryService {
    constructor(private prisma: PrismaService) {}

    async category(id: number): Promise<ItemCategory | null> {
        return this.prisma.itemCategory.findUnique({
            where: { id },
        });
    }

    async categories(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ItemCategoryWhereUniqueInput;
        where?: Prisma.ItemCategoryWhereInput;
        orderBy?: Prisma.ItemCategoryOrderByWithRelationInput;
    }): Promise<ItemCategory[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.itemCategory.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        });
    }

    async createCategory(data: CreateItemCategoryDto): Promise<ItemCategory> {
        return this.prisma.itemCategory.create({
            data,
        });
    }

    async updateCategory(id: number, data: UpdateItemCategoryDto): Promise<ItemCategory> {
        return this.prisma.itemCategory.update({
            where: { id },
            data,
        });
    }

    async deleteCategory(id: number): Promise<ItemCategory> {
        return this.prisma.itemCategory.delete({
            where: { id },
        });
    }
}
