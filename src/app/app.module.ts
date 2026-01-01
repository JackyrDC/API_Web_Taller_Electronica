import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { ItemCategoryService } from '../item-category/item-category.service';
import { ItemCategoryController } from '../item-category/item-category.controller';
import { InventoryItemService } from '../inventory-item/inventory-item.service';
import { InventoryItemController } from '../inventory-item/inventory-item.controller';
import { ClassService } from '../class/class.service';
import { ClassController } from '../class/class.controller';

@Module({
  imports: [PrismaModule],
  controllers: [AppController, ItemCategoryController, InventoryItemController, ClassController],
  providers: [AppService, ItemCategoryService, InventoryItemService, ClassService],
})
export class AppModule {}
