import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSupplierController } from './product-supplier.controller';
import { ProductSupplierService } from './product-supplier.service';
import { ProductSupplier } from './product-supplier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductSupplier])],
  controllers: [ProductSupplierController],
  providers: [ProductSupplierService]
})
export class ProductSupplierModule {}
