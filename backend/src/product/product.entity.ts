import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Supplier } from '../supplier/supplier.entity';

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    barcode: string;

    @ManyToMany(() => Supplier, supplier => supplier.products)
    @JoinTable()
    suppliers: Supplier[];
}