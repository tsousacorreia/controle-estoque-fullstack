import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { Supplier } from './supplier.entity';

@Controller('suppliers')
export class SupplierController {
    constructor(private readonly supplierService: SupplierService) {}

    @Post()
    create(@Body() supplier: Supplier): Promise<Supplier> {
        return this.supplierService.create(supplier);
    }

    @Get()
    findAll(): Promise<Supplier[]> {
        return this.supplierService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Supplier> {
        return this.supplierService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() supplier: Supplier): Promise<void> {
        return this.supplierService.update(id, supplier);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.supplierService.remove(id);
    }
}