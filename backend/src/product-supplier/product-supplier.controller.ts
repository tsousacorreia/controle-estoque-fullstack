import { Controller, Post, Param } from '@nestjs/common';
import { ProductSupplierService } from './product-supplier.service';

@Controller('product-supplier')
export class ProductSupplierController {
    constructor(private readonly productSupplierService: ProductSupplierService) {}

    @Post(':productId/:supplierId')
    associate(
        @Param('productId') productId: number,
        @Param('supplierId') supplierId: number,
    ): Promise<void> {
        return this.productSupplierService.associate(productId, supplierId);
    }
}
