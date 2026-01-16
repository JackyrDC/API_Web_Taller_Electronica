import { Controller, Get, Post, Put, Delete,Param,Body } from '@nestjs/common';
import { LendRequestStatusService } from './lend-request-status.service';

@Controller('lend-request-status')
export class LendRequestStatusController {
    constructor(private readonly LendRequestStatusService: LendRequestStatusService) {}

    @Get()
    async getLendRequestStatuses() {
        return this.LendRequestStatusService.statuses({});    
    }
    
    @Get(':id')
    async getLendRequestStatus(@Param('id') id: string) {
        return this.LendRequestStatusService.status({ id: parseInt(id) });
    }

    @Post()
    async createLendRequestStatus(@Body('data') data: string) {
        return this.LendRequestStatusService.createStatus(JSON.parse(data));
    }

    @Put(':id')
    async updateLendRequestStatus(@Param('id') id: string, @Body('data') data: string) {
        return this.LendRequestStatusService.updateStatus({
            where: { id: parseInt(id) },
            data: JSON.parse(data),
        });
    }

    @Delete(':id')
    async deleteLendRequestStatus(@Param('id') id: string) {
        return this.LendRequestStatusService.deleteStatus({ id: parseInt(id) });
    }
}
