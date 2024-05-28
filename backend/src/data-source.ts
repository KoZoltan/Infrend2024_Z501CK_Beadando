import "reflect-metadata"
import { DataSource } from "typeorm"
import { Patient } from "./entity/patient"
import { Visit } from "./entity/Visit"
import { Slicer } from "./entity/records"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    database: "INfrend",
    synchronize: true,
    logging: false,
    entities: [Patient,Visit],
    migrations: [],
    subscribers: [],
})
