import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../generated/prisma/client';
import { LendRequest, CreateLendRequestDtoSimple, UpdateLendRequestDtoSimple } from '../types/types';

@Injectable()
export class LendRequestService {
    constructor(private prisma: PrismaService) {}

    async request(id: number): Promise<LendRequest | null> {
        return this.prisma.lendRequest.findUnique({
            where: { id },
        });
    }

    async requests(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.LendRequestWhereUniqueInput;
        where?: Prisma.LendRequestWhereInput;
        orderBy?: Prisma.LendRequestOrderByWithRelationInput;
    }): Promise<LendRequest[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.lendRequest.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        });
    }

    async createRequest(dto: CreateLendRequestDtoSimple): Promise<LendRequest> {
        const data: Prisma.LendRequestCreateInput = {
            requester: { connect: { id: dto.requesterId } },
            item: { connect: { id: dto.itemId } },
            quantity: dto.quantity,
            class: dto.classId ? { connect: { id: dto.classId } } : undefined,
            projectName: dto.projectName,
            status: { connect: { id: dto.statusId } },
            isActive: dto.isActive,
            lendDate: new Date(dto.lendDate),
            returnDate: dto.returnDate ? new Date(dto.returnDate) : undefined,
            realReturnDate: dto.realReturnDate ? new Date(dto.realReturnDate) : undefined,
        };
        return this.prisma.lendRequest.create({ data });
    }

    async updateRequest(id: number, dto: UpdateLendRequestDtoSimple): Promise<LendRequest> {
        const data: Prisma.LendRequestUpdateInput = {};
        
        if (dto.requesterId !== undefined) data.requester = { connect: { id: dto.requesterId } };
        if (dto.itemId !== undefined) data.item = { connect: { id: dto.itemId } };
        if (dto.quantity !== undefined) data.quantity = dto.quantity;
        if (dto.classId !== undefined) {
            data.class = dto.classId ? { connect: { id: dto.classId } } : { disconnect: true };
        }
        if (dto.projectName !== undefined) data.projectName = dto.projectName;
        if (dto.statusId !== undefined) data.status = { connect: { id: dto.statusId } };
        if (dto.isActive !== undefined) data.isActive = dto.isActive;
        if (dto.lendDate !== undefined) data.lendDate = new Date(dto.lendDate);
        if (dto.returnDate !== undefined) data.returnDate = dto.returnDate ? new Date(dto.returnDate) : null;
        if (dto.realReturnDate !== undefined) data.realReturnDate = dto.realReturnDate ? new Date(dto.realReturnDate) : null;

        return this.prisma.lendRequest.update({
            where: { id },
            data,
        });
    }

    async deleteRequest(id: number): Promise<LendRequest> {
        return this.prisma.lendRequest.delete({
            where: { id },
        });
    }
}
