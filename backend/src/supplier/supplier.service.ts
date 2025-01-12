import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from './supplier.entity';

@Injectable()
export class SupplierService {
    constructor(
        @InjectRepository(Supplier)
        private supplierRepository: Repository<Supplier>,
    ) {}

    create(supplier: Supplier): Promise<Supplier> {
        return this.supplierRepository.save(supplier);
    }

    findAll(): Promise<Supplier[]> {
        return this.supplierRepository.find();
    }

    findOne(id: number): Promise<Supplier> {
        return this.supplierRepository.findOne({ where: {id} });
    }

    update(id: number, supplier: Supplier): Promise<void> {
        return this.supplierRepository.update(id, supplier).then(() => {});
    }

    remove(id: number): Promise<void> {
        return this.supplierRepository.delete(id).then(() => {});
    }
}