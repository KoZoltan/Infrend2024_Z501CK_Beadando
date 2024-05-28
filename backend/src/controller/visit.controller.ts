import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";
import { Visit } from "../entity/Visit";

export class VisitController extends Controller{
    repository = AppDataSource.getRepository(Visit);
}