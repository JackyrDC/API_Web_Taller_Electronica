import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../generated/prisma/client';
import { 
    AvailabilityRequestStatus, 
    CreateAvailabilityRequestStatusDto, 
    UpdateAvailabilityRequestStatusDto 
} from '../types/types';

@Injectable()
export class AvailabilityRequestStatusService {
    constructor(private prisma: PrismaService) {}

    async status(id: number): Promise<AvailabilityRequestStatus | null> {
        return this.prisma.availabilityRequestStatus.findUnique({
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

    async createStatus(data: CreateAvailabilityRequestStatusDto): Promise<AvailabilityRequestStatus> {
        return this.prisma.availabilityRequestStatus.create({
            data,
        });
    }

    async updateStatus(id: number, data: UpdateAvailabilityRequestStatusDto): Promise<AvailabilityRequestStatus> {    
        return this.prisma.availabilityRequestStatus.update({
            where: { id },
            data,
        });
    }
      
    async deleteStatus(id: number): Promise<AvailabilityRequestStatus> {
        return this.prisma.availabilityRequestStatus.delete({
            where: { id },
        });
    }
}   