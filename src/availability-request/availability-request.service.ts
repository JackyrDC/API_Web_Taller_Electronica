import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../generated/prisma/client';
import { 
    AvailabilityRequest, 
    CreateAvailabilityRequestDtoSimple, 
    UpdateAvailabilityRequestDtoSimple 
} from '../types/types';

@Injectable()
export class AvailabilityRequestService {
    constructor(private prisma: PrismaService) {}

    async request(id: number): Promise<AvailabilityRequest | null> {
        return this.prisma.availabilityRequest.findUnique({
            where: { id },
        });
    }

    async requests(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.AvailabilityRequestWhereUniqueInput;
        where?: Prisma.AvailabilityRequestWhereInput;
        orderBy?: Prisma.AvailabilityRequestOrderByWithRelationInput;
    }): Promise<AvailabilityRequest[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.availabilityRequest.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }   

    async createRequest(dto: CreateAvailabilityRequestDtoSimple): Promise<AvailabilityRequest> {
        const data: Prisma.AvailabilityRequestCreateInput = {
            requester: { connect: { id: dto.requesterId } },
            item: { connect: { id: dto.itemId } },
            quantity: dto.quantity,
            className: dto.className,
            projectName: dto.projectName,
            status: { connect: { id: dto.statusId } },
            isActive: dto.isActive,
        };
        return this.prisma.availabilityRequest.create({ data });
    }

    async updateRequest(id: number, dto: UpdateAvailabilityRequestDtoSimple): Promise<AvailabilityRequest> {
        const data: Prisma.AvailabilityRequestUpdateInput = {};
        
        if (dto.requesterId !== undefined) data.requester = { connect: { id: dto.requesterId } };
        if (dto.itemId !== undefined) data.item = { connect: { id: dto.itemId } };
        if (dto.quantity !== undefined) data.quantity = dto.quantity;
        if (dto.className !== undefined) data.className = dto.className;
        if (dto.projectName !== undefined) data.projectName = dto.projectName;
        if (dto.statusId !== undefined) data.status = { connect: { id: dto.statusId } };
        if (dto.isActive !== undefined) data.isActive = dto.isActive;

        return this.prisma.availabilityRequest.update({
            where: { id },
            data,
        });
    }

    async deleteRequest(id: number): Promise<AvailabilityRequest> {
        return this.prisma.availabilityRequest.delete({
            where: { id },
        });
    }
}

