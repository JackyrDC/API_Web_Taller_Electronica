import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../generated/prisma/client';
import { Class, CreateClassDto, UpdateClassDto } from '../types/types';

@Injectable()
export class ClassService {
    constructor(private prisma: PrismaService) {}

    async class(id: number): Promise<Class | null> {
        return this.prisma.class.findUnique({
            where: { id },
        });
    } 
    
    async classes(params:{
        skip?: number;
        take?: number;
        cursor?: Prisma.ClassWhereUniqueInput;
        where?: Prisma.ClassWhereInput;
        orderBy?: Prisma.ClassOrderByWithRelationInput;
    }): Promise<Class[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.class.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        });
    }

    async createClass(data: CreateClassDto): Promise<Class> {
        return this.prisma.class.create({
            data,
        });
    }

    async updateClass(id: number, data: UpdateClassDto): Promise<Class> {
        return this.prisma.class.update({
            where: { id },
            data,
        });
    }

    async deleteClass(id: number): Promise<Class> {
        return this.prisma.class.delete({
            where: { id },
        });
    }
}
