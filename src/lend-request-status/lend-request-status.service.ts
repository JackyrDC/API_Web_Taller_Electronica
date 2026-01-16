import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {Prisma, LendRequestStatus} from '../../generated/prisma/client';

@Injectable()
export class LendRequestStatusService {
    constructor(private prisma: PrismaService) {}

    async status(statusUnique: Prisma.LendRequestStatusWhereUniqueInput): Promise<LendRequestStatus | null> {
        return this.prisma.lendRequestStatus.findUnique({
            where: statusUnique,
        });
    }

    async statuses(params:
        {
            skip?: number;
            take?: number;
            cursor?: Prisma.LendRequestStatusWhereUniqueInput;
            where?: Prisma.LendRequestStatusWhereInput;
            orderBy?: Prisma.LendRequestStatusOrderByWithRelationInput;
        }
    ): Promise<LendRequestStatus[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.lendRequestStatus.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        });
    }

    async createStatus(data: Prisma.LendRequestStatusCreateInput): Promise<LendRequestStatus> {
        return this.prisma.lendRequestStatus.create({
            data,
        });
    }

    async updateStatus(params: {
        where: Prisma.LendRequestStatusWhereUniqueInput;
        data: Prisma.LendRequestStatusUpdateInput;
    }): Promise<LendRequestStatus> {    
        const { where, data } = params;
        return this.prisma.lendRequestStatus.update({
            data,
            where,
        });
    }

    async deleteStatus(statusUnique: Prisma.LendRequestStatusWhereUniqueInput): Promise<LendRequestStatus> {
        return this.prisma.lendRequestStatus.delete({
            where: statusUnique,
        });
    }
}

