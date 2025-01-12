import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ProductSupplier {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productId: number;

    @Column()
    supplierId: number;
}