import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";
import { Records } from "../entity/records";

export class RecordsController extends Controller{
    repository = AppDataSource.getRepository(Records);
}