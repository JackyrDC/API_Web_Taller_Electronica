import { Controller, Get, Post, Put, Delete, Query, Param, Body } from '@nestjs/common';
import { AvailabilityRequestStatusService } from './availability-request-status.service';
import { CreateAvailabilityRequestStatusDto, UpdateAvailabilityRequestStatusDto } from '../types/types';

@Controller('availability-request-status')
export class AvailabilityRequestStatusController {
    constructor(private readonly availabilityRequestStatusService: AvailabilityRequestStatusService) {}

    @Get()
    async getStatuses(
        @Query('skip') skip?: string,
        @Query('take') take?: string,
        @Query('cursor') cursor?: string,
        @Query('where') where?: string,
        @Query('orderBy') orderBy?: string,
    ){
        return this.availabilityRequestStatusService.statuses({
            skip: skip ? parseInt(skip) : undefined,
            take: take ? parseInt(take) : undefined,
            cursor: cursor ? JSON.parse(cursor) : undefined,
            where: where ? JSON.parse(where) : undefined,
            orderBy: orderBy ? JSON.parse(orderBy) : undefined,
        });
    }

    @Get(':id')
    async getStatus(@Param('id') id: string) {
        return this.availabilityRequestStatusService.status(parseInt(id));
    }

    @Post()
    async createStatus(@Body() data: CreateAvailabilityRequestStatusDto) {
        return this.availabilityRequestStatusService.createStatus(data);
    }

    @Put(':id')
    async updateStatus(@Param('id') id: string, @Body() data: UpdateAvailabilityRequestStatusDto) {
        return this.availabilityRequestStatusService.updateStatus(parseInt(id), data);
    }

    @Delete(':id')
    async deleteStatus(@Param('id') id: string) {
        return this.availabilityRequestStatusService.deleteStatus(parseInt(id));
    }

}
