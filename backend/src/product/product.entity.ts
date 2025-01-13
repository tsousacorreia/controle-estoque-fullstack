import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ProductSupplier } from "../product-supplier/product-supplier.entity";

@Entity('products')
export class Product{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column('decimal')
    price: number;

    @Column()
    barcode: string;

    @OneToMany(() => ProductSupplier, (productSupplier) => productSupplier.product)
    productSuppliers: ProductSupplier[];
}