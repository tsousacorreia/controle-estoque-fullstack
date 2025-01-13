import { Controller, Get, Post, Body, Param, Delete, Put, HttpCode, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() product: Product): Promise<{ message: string; product: Product }> {
        const newProduct = await this.productService.create(product);
        return { message: 'Produto criado com sucesso.', product: newProduct };
    }

    @Get()
    async findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<Product> {
        return this.productService.findOne(id);
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() product: Product
    ): Promise<{ message: string }> {
        await this.productService.update(id, product);
        return { message: 'Produto atualizado com sucesso.'}
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async remove(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
        await this.productService.remove(id);
        return { message: 'Produto removido com sucesso.'}
    }
}