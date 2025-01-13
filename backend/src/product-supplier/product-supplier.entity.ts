import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../product/product.entity";
import { Supplier } from "../supplier/supplier.entity";

@Entity()
export class ProductSupplier {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product, (product) => product.productSuppliers, { onDelete: 'CASCADE' })
    product: Product;

    @ManyToOne(() => Supplier, (supplier) => supplier.productSuppliers, { onDelete: 'CASCADE' })
    supplier: Supplier;
}