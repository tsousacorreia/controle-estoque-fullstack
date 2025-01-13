import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ProductSupplier } from "../product-supplier/product-supplier.entity";

@Entity('suppliers')
export class Supplier{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    cnpj: string;

    @Column()
    address: string;

    @Column()
    contact: string;

    @OneToMany(() => ProductSupplier, (productSupplier) => productSupplier.supplier)
    productSuppliers: ProductSupplier[];
}