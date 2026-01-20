import { Controller, Get, Post, Put, Delete, Query, Param, Body } from '@nestjs/common';
import { AvailabilityRequestService } from './availability-request.service';
import { CreateAvailabilityRequestDtoSimple, UpdateAvailabilityRequestDtoSimple } from '../types/types';

@Controller('availability-request')
export class AvailabilityRequestController {
    constructor(private readonly availabilityRequestService: AvailabilityRequestService) {}

    @Get()
    async getAllAvailabilityRequests(
        @Query('skip') skip?: string,
        @Query('take') take?: string,
        @Query('cursor') cursor?: string,
        @Query('where') where?: string,
        @Query('orderBy') orderBy?: string,
    ) {
        return this.availabilityRequestService.requests({
            skip: skip ? parseInt(skip) : undefined,
            take: take ? parseInt(take) : undefined,
            cursor: cursor ? JSON.parse(cursor) : undefined,
            where: where ? JSON.parse(where) : undefined,
            orderBy: orderBy ? JSON.parse(orderBy) : undefined,
        });
    }

    @Get(':id')
    async getAvailabilityRequestById(@Param('id') id: string) {
        return this.availabilityRequestService.request(parseInt(id));
    }

    @Post()
    async createAvailabilityRequest(@Body() data: CreateAvailabilityRequestDtoSimple) {
        return this.availabilityRequestService.createRequest(data);
    } 

    @Put(':id')
    async updateAvailabilityRequest(@Param('id') id: string, @Body() data: UpdateAvailabilityRequestDtoSimple) {
        return this.availabilityRequestService.updateRequest(parseInt(id), data);
    }

    @Delete(':id')
    async deleteAvailabilityRequest(@Param('id') id: string) {
        return this.availabilityRequestService.deleteRequest(parseInt(id));
    }
}
