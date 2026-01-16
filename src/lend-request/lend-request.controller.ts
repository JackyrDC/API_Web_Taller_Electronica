import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { LendRequestService } from './lend-request.service';

@Controller('lend-request')
export class LendRequestController {
    constructor(private readonly lendRequestService: LendRequestService) {}

    @Get()
    async getLendRequests() {
        return this.lendRequestService.requests({});
    }

    @Get(':id')
    async getLendRequest(@Param('id') id: string) {
        return this.lendRequestService.request({ id: parseInt(id) });
    }

    @Post()
    async createLendRequest(@Body('data') data: string) {
        return this.lendRequestService.createRequest(JSON.parse(data));
    }
    @Put(':id')
    async updateLendRequest(@Param('id') id: string, @Body('data') data: string) {
        return this.lendRequestService.updateRequest({
            where: { id: parseInt(id) },
            data: JSON.parse(data),
        });
    }
    @Delete(':id')
    async deleteLendRequest(@Param('id') id: string) {
        return this.lendRequestService.deleteRequest({ id: parseInt(id) });
    }
}
