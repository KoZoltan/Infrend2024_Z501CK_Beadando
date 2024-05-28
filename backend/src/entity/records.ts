import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Records {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Taj: number

   
    @Column({type:'date'})
   prostatescreen: Date


    @Column({type:'date'})
    CommonScreen: Date

}
