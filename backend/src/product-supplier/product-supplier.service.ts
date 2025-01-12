import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductSupplier } from './product-supplier.entity';

@Injectable()
export class ProductSupplierService {
    constructor(
        @InjectRepository(ProductSupplier)
        private productSupplierRepository: Repository<ProductSupplier>,
    ) {}

    associate(productId: number, supplierId: number): Promise<void> {
        const productSupplier = this.productSupplierRepository.create({ productId, supplierId });
        return this.productSupplierRepository.save(productSupplier).then(() => {});
    }
}