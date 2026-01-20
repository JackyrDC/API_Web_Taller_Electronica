import { Controller, Get, Post, Put, Delete, Query, Param, Body } from '@nestjs/common';
import { LendRequestStatusService } from './lend-request-status.service';
import { CreateLendRequestStatusDto, UpdateLendRequestStatusDto } from '../types/types';

@Controller('lend-request-status')
export class LendRequestStatusController {
    constructor(private readonly lendRequestStatusService: LendRequestStatusService) {}

    @Get()
    async getLendRequestStatuses(
        @Query('skip') skip?: string,
        @Query('take') take?: string,
        @Query('cursor') cursor?: string,
        @Query('where') where?: string,
        @Query('orderBy') orderBy?: string,
    ) {
        return this.lendRequestStatusService.statuses({
            skip: skip ? parseInt(skip) : undefined,
            take: take ? parseInt(take) : undefined,
            cursor: cursor ? JSON.parse(cursor) : undefined,
            where: where ? JSON.parse(where) : undefined,
            orderBy: orderBy ? JSON.parse(orderBy) : undefined,
        });
    }
    
    @Get(':id')
    async getLendRequestStatus(@Param('id') id: string) {
        return this.lendRequestStatusService.status(parseInt(id));
    }

    @Post()
    async createLendRequestStatus(@Body() data: CreateLendRequestStatusDto) {
        return this.lendRequestStatusService.createStatus(data);
    }

    @Put(':id')
    async updateLendRequestStatus(@Param('id') id: string, @Body() data: UpdateLendRequestStatusDto) {
        return this.lendRequestStatusService.updateStatus(parseInt(id), data);
    }

    @Delete(':id')
    async deleteLendRequestStatus(@Param('id') id: string) {
        return this.lendRequestStatusService.deleteStatus(parseInt(id));
    }
}
