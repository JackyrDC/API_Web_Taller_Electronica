import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {Prisma, AvailabilityRequestStatus} from '../../generated/prisma/client';

@Injectable()
export class AvailabilityRequestStatusService {
    constructor(private prisma: PrismaService) {}

    async status(params: { id: number }): Promise<AvailabilityRequestStatus[]> {
        const { id } = params;
        return this.prisma.availabilityRequestStatus.findMany({
            where: { id },
        });
    }

    async statuses(params:{
        skip?: number;
        take?: number;  
        cursor?: Prisma.AvailabilityRequestStatusWhereUniqueInput;
        where?: Prisma.AvailabilityRequestStatusWhereInput;
        orderBy?: Prisma.AvailabilityRequestStatusOrderByWithRelationInput;
    }): Promise<AvailabilityRequestStatus[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.availabilityRequestStatus.findMany({
            skip,
            take,   
            cursor,
            where,
            orderBy,
        });
    }

    async createStatus(data: Prisma.AvailabilityRequestStatusCreateInput): Promise<AvailabilityRequestStatus> {
        return this.prisma.availabilityRequestStatus.create({
            data,
        });
    }

    async updateStatus(params: {    
        where: Prisma.AvailabilityRequestStatusWhereUniqueInput;
        data: Prisma.AvailabilityRequestStatusUpdateInput;
    }): Promise<AvailabilityRequestStatus> {    
        const { where, data } = params;
        return this.prisma.availabilityRequestStatus.update({
            where,
            data,
        });
    }
      
    async deleteStatus(where: Prisma.AvailabilityRequestStatusWhereUniqueInput): Promise<AvailabilityRequestStatus> {
        return this.prisma.availabilityRequestStatus.delete({
            where,
        });
    }
}   