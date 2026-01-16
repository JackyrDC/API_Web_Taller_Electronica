import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {Prisma, AvailabilityRequest} from '../../generated/prisma/client';

@Injectable()
export class AvailabilityRequestService {
    constructor(private prisma: PrismaService) {}

    async request(params: { id: number }): Promise<AvailabilityRequest[]> {
        return this.prisma.availabilityRequest.findMany({
            where: { id: params.id },
        });
    }

    async requests(params:{
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

    async createRequest(data: Prisma.AvailabilityRequestCreateInput): Promise<AvailabilityRequest> {
        return this.prisma.availabilityRequest.create({
            data,
        });
    }

    async updateRequest(params: {    
        where: Prisma.AvailabilityRequestWhereUniqueInput;
        data: Prisma.AvailabilityRequestUpdateInput;
    }): Promise<AvailabilityRequest> {    
        const { where, data } = params;
        return this.prisma.availabilityRequest.update({
            where,
            data,
        });
    }

    async deleteRequest(where: Prisma.AvailabilityRequestWhereUniqueInput): Promise<AvailabilityRequest> {
        return this.prisma.availabilityRequest.delete({
            where,
        });
    }
}

