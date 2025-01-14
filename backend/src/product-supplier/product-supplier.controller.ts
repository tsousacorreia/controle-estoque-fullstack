import { Controller, Post, Delete, Get, Param, HttpCode, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { ProductSupplierService } from './product-supplier.service';

@Controller('api/product-supplier')
export class ProductSupplierController {
    constructor(private readonly productSupplierService: ProductSupplierService) {}

    @Post(':productId/:supplierId')
    @HttpCode(HttpStatus.CREATED)
    async associate(
        @Param('productId', ParseIntPipe) productId: number,
        @Param('supplierId', ParseIntPipe) supplierId: number,
    ) {
        await this.productSupplierService.associate(productId, supplierId);
        return { message: 'Associação realizada com sucesso.' };
    }

    @Delete(':productId/:supplierId')
    @HttpCode(HttpStatus.OK)
    async disassociate(
        @Param('productId', ParseIntPipe) productId: number,
        @Param('supplierId', ParseIntPipe) supplierId: number,
    ) {
        await this.productSupplierService.disassociate(productId, supplierId);
        return { message: 'Associação removida com sucesso.' };
    }

    @Get('/supplier/:supplierId/products')
    async getProductsBySupplier(@Param('supplierId', ParseIntPipe) supplierId: number) {
        return this.productSupplierService.getProductsBySupplier(supplierId);
    }

    @Get('/product/:productId/suppliers')
    async getSuppliersByProduct(@Param('productId', ParseIntPipe) productId: number) {
        return this.productSupplierService.getSuppliersByProduct(productId);
    }
}