import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    create(@Body() product: Product): Promise<Product> {
        return this.productService.create(product);
    }

    @Get()
    findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Product> {
        return this.productService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() product: Product): Promise<void> {
        return this.productService.update(id, product);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.productService.remove(id);
    }
}
