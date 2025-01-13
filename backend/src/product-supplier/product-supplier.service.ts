import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { ProductSupplier } from './product-supplier.entity';
import { Product } from '../product/product.entity';
import { Supplier } from '../supplier/supplier.entity';

@Injectable()
export class ProductSupplierService {
    constructor(
        @InjectRepository(ProductSupplier)
        private productSupplierRepository: Repository<ProductSupplier>,

        @InjectRepository(Product)
        private productRepository: Repository<Product>,

        @InjectRepository(Supplier)
        private supplierRepository: Repository<Supplier>,
    ) {}

    async associate(productId: number, supplierId: number): Promise<void> {
        const product = await this.productRepository.findOne({ where: { id: productId } });
        const supplier = await this.supplierRepository.findOne({ where: { id: supplierId } });
        
        if (!product || !supplier) {
            throw new NotFoundException('Produto ou Fornecedor não encontrado.');
        }

        const existingAssociation = await this.productSupplierRepository.findOne({
            where: { product: { id: productId }, supplier: { id: supplierId } },
        });

        if (existingAssociation) {
            throw new Error('Produto já está associado a este fornecedor.');
        }

        const productSupplier = this.productSupplierRepository.create({ product, supplier });
        await this.productSupplierRepository.save(productSupplier);
    }

    async disassociate(productId: number, supplierId: number): Promise<void> {
        const association = await this.productSupplierRepository.findOne({
            where: { product: { id: productId }, supplier: { id: supplierId } },
            relations: ['product', 'supplier']
        });

        if (!association) {
            throw new NotFoundException('Associação não encontrada.');
        }

        await this.productSupplierRepository.delete(association.id);
    }

    async getProductsBySupplier(supplierId: number): Promise<Product[]> {
        const supplier = await this.supplierRepository.findOne({
            where: { id: supplierId },
            relations: ['productSuppliers', 'productSuppliers.product'],
        });

        if (!supplier) {
            throw new NotFoundException('Fornecedor não encontrado.');
        }

        return supplier.productSuppliers.map((ps) => ps.product);
    }

    async getSuppliersByProduct(productId: number): Promise<Supplier[]> {
        const product = await this.productRepository.findOne({
            where: { id: productId },
            relations: ['productSuppliers', 'productSuppliers.supplier'],
        });

        if (!product) {
            throw new NotFoundException('Produto não encontrado.');
        }

        return product.productSuppliers.map((ps) => ps.supplier);
    }
}