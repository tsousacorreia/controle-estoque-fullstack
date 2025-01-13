import { Controller, Get, Post, Body, Param, Delete, Put, HttpCode, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { Supplier } from './supplier.entity';

@Controller('suppliers')
export class SupplierController {
    constructor(private readonly supplierService: SupplierService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() supplier: Supplier): Promise<{ message: string; supplier: Supplier }> {
        const newSupplier = await this.supplierService.create(supplier);
        return { message: 'Fornecedor criado com sucesso.', supplier: newSupplier };
    }

    @Get()
    async findAll(): Promise<Supplier[]> {
        return this.supplierService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<Supplier> {
        return this.supplierService.findOne(id);
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() supplier: Supplier
    ): Promise<{ message: string }> {
        await this.supplierService.update(id, supplier);
        return { message: 'Fornecedor atualizado com sucesso.' };
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async remove(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
        await this.supplierService.remove(id);
        return { message: 'Fornecedor removido com sucesso.' };
    }
}