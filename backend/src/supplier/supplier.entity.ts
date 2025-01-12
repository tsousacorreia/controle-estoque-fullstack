import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Product } from '../product/product.entity';

@Entity()
export class Supplier{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    cnpj: string;

    @Column()
    address: string;

    @Column()
    contact: string;

    @ManyToMany(() => Product, product => product.suppliers)
    products: Product[];
}