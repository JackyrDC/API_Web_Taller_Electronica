import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {Prisma, LendRequest} from '../../generated/prisma/client';

@Injectable()
export class LendRequestService {
    constructor(private prisma: PrismaService) {}

    async request(requestUnique: Prisma.LendRequestWhereUniqueInput): Promise<LendRequest | null> {
        return this.prisma.lendRequest.findUnique({
            where: requestUnique,
        });
    }

    async requests(params:
        {
            skip?: number;
            take?: number;
            cursor?: Prisma.LendRequestWhereUniqueInput;
            where?: Prisma.LendRequestWhereInput;
            orderBy?: Prisma.LendRequestOrderByWithRelationInput;
        }
    ): Promise<LendRequest[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.lendRequest.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        });
    }

    async createRequest(data: Prisma.LendRequestCreateInput): Promise<LendRequest> {
        return this.prisma.lendRequest.create({
            data,
        });
    }

    async updateRequest(params: {
        where: Prisma.LendRequestWhereUniqueInput;
        data: Prisma.LendRequestUpdateInput;    
    }): Promise<LendRequest> {    
        const { where, data } = params;
        return this.prisma.lendRequest.update({
            data,
            where,
        });
    }

    async deleteRequest(requestUnique: Prisma.LendRequestWhereUniqueInput): Promise<LendRequest> {
        return this.prisma.lendRequest.delete({
            where: requestUnique,
        });
    }
}
