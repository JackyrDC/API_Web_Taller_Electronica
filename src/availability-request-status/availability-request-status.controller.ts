import { Controller, Get, Post, Put, Delete, Query, Param, Body } from '@nestjs/common';
import { AvailabilityRequestStatusService } from './availability-request-status.service';

@Controller('availability-request-status')
export class AvailabilityRequestStatusController {
    constructor(private readonly availabilityRequestStatusService: AvailabilityRequestStatusService) {}

    @Get()
    async getStatuses(
        @Param('skip') skip?: string,
        @Param('take') take?: string,
        @Param('cursor') cursor?: string,
        @Param('where') where?: string,
        @Param('orderBy') orderBy?: string,
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
        return this.availabilityRequestStatusService.status({ id: parseInt(id) });
    }

    @Post()
    public async createStatus(@Body() data: any) {
        return this.availabilityRequestStatusService.createStatus(data);
    }

    @Put(':id')
    public async updateStatus(@Param('id') id: string, @Body() data: any) {
        return this.availabilityRequestStatusService.updateStatus({
            where: { id: parseInt(id) },
            data,
        });
    }

    @Delete(':id')
    public async deleteStatus(@Param('id') id: string) {
        return this.availabilityRequestStatusService.deleteStatus({ id: parseInt(id) });
    }

}
