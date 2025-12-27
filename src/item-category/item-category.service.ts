import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {Prisma, ItemCategory} from '../../generated/prisma/client';

@Injectable()
export class ItemCategoryService {
    constructor(private prisma: PrismaService) {}

    async category(categoryUnique: Prisma.ItemCategoryWhereUniqueInput): Promise<ItemCategory | null> {
        return this.prisma.itemCategory.findUnique({
            where: categoryUnique,
        });
    }

    async categories(params:
        {
            skip?: number;
            take?: number;
            cursor?: Prisma.ItemCategoryWhereUniqueInput;
            where?: Prisma.ItemCategoryWhereInput;
            orderBy?: Prisma.ItemCategoryOrderByWithRelationInput;
        }
    ): Promise<ItemCategory[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.itemCategory.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        });
    }

    async createCategory(data: Prisma.ItemCategoryCreateInput): Promise<ItemCategory> {
        return this.prisma.itemCategory.create({
            data,
        });
    }

    async deleteCategory(categoryUnique: Prisma.ItemCategoryWhereUniqueInput): Promise<ItemCategory> {
        return this.prisma.itemCategory.delete({
            where: categoryUnique,
        });
    }
}
