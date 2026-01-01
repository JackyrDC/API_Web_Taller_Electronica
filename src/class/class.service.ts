import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {Prisma, Class} from '../../generated/prisma/client';

@Injectable()
export class ClassService {
    constructor(private prisma: PrismaService) {}

    async class(classUnique: Prisma.ClassWhereUniqueInput): Promise<Class | null> {
        return this.prisma.class.findUnique({
            where: classUnique,
        });
    } 
    
    async classes(params:{
        skip?: number;
        take?: number;
        cursor?: Prisma.ClassWhereUniqueInput;
        where?:Prisma.ClassWhereInput;
        orderBy?:Prisma.ClassOrderByWithRelationInput;
    }){
        const {skip, take, cursor, where, orderBy} = params;
        return this.prisma.class.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        });
    }

    async createClass(data: Prisma.ClassCreateInput): Promise<Class> {
        return this.prisma.class.create({
            data,
        });
    }

    async updateClass(params: {
        where: Prisma.ClassWhereUniqueInput;
        data: Prisma.ClassUpdateInput;  
    }): Promise<Class> {
        const {where, data} = params;
        return this.prisma.class.update({
            data,
            where,
        });
    }

    async deleteClass(where: Prisma.ClassWhereUniqueInput): Promise<Class> {
        return this.prisma.class.delete({
            where,
        });
    }
}
