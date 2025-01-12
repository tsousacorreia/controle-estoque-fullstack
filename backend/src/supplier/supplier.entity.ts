import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}