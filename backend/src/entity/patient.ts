import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import { Visit } from "./Visit"
import { Records } from "./records"

@Entity()
export class Patient {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({type:'date'})
    BirthDate: Date

    @Column()
    Taj: number

    @Column()
    Gender: string

    @OneToMany(type => Patient, Patient => Patient.Taj)
    medrec: Visit[];

    @OneToMany(type => Patient, Patient => Patient.Taj)
    slicer: Records[];

}
