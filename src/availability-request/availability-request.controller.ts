import { Controller, Get, Post, Put, Delete, Query } from '@nestjs/common';
import { AvailabilityRequestService } from './availability-request.service';

@Controller('availability-request')
export class AvailabilityRequestController {
    constructor(private readonly availabilityRequestService: AvailabilityRequestService) {}

    @Get()
    getAllAvailabilityRequests(@Query() query: any) {
        return this.availabilityRequestService.requests(query);
    }

    @Get(':id')
    getAvailabilityRequestById(@Query('id') id: number) {
        return this.availabilityRequestService.request({ id });
    }

    @Post()
    createAvailabilityRequest(@Query() query: any) {
        return this.availabilityRequestService.createRequest(query);
    } 

    @Put(':id')
    updateAvailabilityRequest(@Query('id') id: number, @Query() query: any) {
        return this.availabilityRequestService.updateRequest({
            where: { id },
            data: query,
        });
    }

    @Delete(':id')
    deleteAvailabilityRequest(@Query('id') id: number) {
        return this.availabilityRequestService.deleteRequest({ id });
    }
}
