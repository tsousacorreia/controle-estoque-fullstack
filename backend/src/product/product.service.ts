import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) {}

    create(product: Product): Promise<Product> {
        return this.productRepository.save(product);
    }

    findAll(): Promise<Product[]> {
        return this.productRepository.find({ relations: ['suppliers'] });
    }

    findOne(id: number): Promise<Product> {
        return this.productRepository.findOne({ where: { id }, relations: ['suppliers'] });
    }

    async update(id: number, product: Product): Promise<void> {
        await this.productRepository.update(id, product);
    }

    async remove(id: number): Promise<void> {
        await this.productRepository.delete(id);
    }
}
