import { Controller, Get, Post, Put, Delete, Query, Param, Body } from '@nestjs/common';
import { LendRequestService } from './lend-request.service';
import { CreateLendRequestDtoSimple, UpdateLendRequestDtoSimple } from '../types/types';

@Controller('lend-request')
export class LendRequestController {
    constructor(private readonly lendRequestService: LendRequestService) {}

    @Get()
    async getLendRequests(
        @Query('skip') skip?: string,
        @Query('take') take?: string,
        @Query('cursor') cursor?: string,
        @Query('where') where?: string,
        @Query('orderBy') orderBy?: string,
    ) {
        return this.lendRequestService.requests({
            skip: skip ? parseInt(skip) : undefined,
            take: take ? parseInt(take) : undefined,
            cursor: cursor ? JSON.parse(cursor) : undefined,
            where: where ? JSON.parse(where) : undefined,
            orderBy: orderBy ? JSON.parse(orderBy) : undefined,
        });
    }

    @Get(':id')
    async getLendRequest(@Param('id') id: string) {
        return this.lendRequestService.request(parseInt(id));
    }

    @Post()
    async createLendRequest(@Body() data: CreateLendRequestDtoSimple) {
        return this.lendRequestService.createRequest(data);
    }

    @Put(':id')
    async updateLendRequest(@Param('id') id: string, @Body() data: UpdateLendRequestDtoSimple) {
        return this.lendRequestService.updateRequest(parseInt(id), data);
    }

    @Delete(':id')
    async deleteLendRequest(@Param('id') id: string) {
        return this.lendRequestService.deleteRequest(parseInt(id));
    }
}
