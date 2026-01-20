import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../generated/prisma/client';
import { LendRequestStatus, CreateLendRequestStatusDto, UpdateLendRequestStatusDto } from '../types/types';

@Injectable()
export class LendRequestStatusService {
    constructor(private prisma: PrismaService) {}

    async status(id: number): Promise<LendRequestStatus | null> {
        return this.prisma.lendRequestStatus.findUnique({
            where: { id },
        });
    }

    async statuses(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.LendRequestStatusWhereUniqueInput;
        where?: Prisma.LendRequestStatusWhereInput;
        orderBy?: Prisma.LendRequestStatusOrderByWithRelationInput;
    }): Promise<LendRequestStatus[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.lendRequestStatus.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        });
    }

    async createStatus(data: CreateLendRequestStatusDto): Promise<LendRequestStatus> {
        return this.prisma.lendRequestStatus.create({
            data,
        });
    }

    async updateStatus(id: number, data: UpdateLendRequestStatusDto): Promise<LendRequestStatus> {
        return this.prisma.lendRequestStatus.update({
            where: { id },
            data,
        });
    }

    async deleteStatus(id: number): Promise<LendRequestStatus> {
        return this.prisma.lendRequestStatus.delete({
            where: { id },
        });
    }
}

