import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSupplierController } from './product-supplier.controller';
import { ProductSupplierService } from './product-supplier.service';
import { ProductSupplier } from './product-supplier.entity';
import { Product } from '../product/product.entity';
import { Supplier } from '../supplier/supplier.entity';
import { ProductModule } from '../product/product.module';
import { SupplierModule } from '../supplier/supplier.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductSupplier, Product, Supplier]),
    ProductModule,
    SupplierModule
  ],
  controllers: [ProductSupplierController],
  providers: [ProductSupplierService]
})
export class ProductSupplierModule {}
