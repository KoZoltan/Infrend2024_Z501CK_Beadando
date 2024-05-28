import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Visit {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Taj: number

    @Column()
    MedicalRecords: string;

}
