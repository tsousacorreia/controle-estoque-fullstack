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
        return this.productRepository.find();
    }

    findOne(id: number): Promise<Product> {
        return this.productRepository.findOne({ where: {id} });
    }

    update(id: number, product: Product): Promise<void> {
        return this.productRepository.update(id, product).then(() => {});
    }

    remove(id: number): Promise<void> {
        return this.productRepository.delete(id).then(() => {});
    }
}