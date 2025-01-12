import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/product/product.entity';
import { Supplier } from 'src/supplier/supplier.entity';

@Injectable()
export class ProductSupplierService {
    constructor(
        @InjectRepository(Product) private productRepository: Repository<Product>,
        @InjectRepository(Supplier) private supplierRepository: Repository<Supplier>,
    ) {}

    async associate(productId: number, supplierId: number): Promise<void> {
        const product = await this.productRepository.findOne({ where: { id: productId }, relations: ['suppliers'] });
        const supplier = await this.supplierRepository.findOne({ where: { id: supplierId }});

        product.suppliers.push(supplier);
        await this.productRepository.save(product);
    }
}

