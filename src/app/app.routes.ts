import { Routes } from '@angular/router';
import { PatientComponent } from '../patient/patient.component';
import { VisitComponent } from '../visit/visit.component';
import { RecordsComponent } from '../records/records.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
    { path : 'patient' , component: PatientComponent},
    { path : 'visit' , component: VisitComponent},
    { path : 'slicer' , component : RecordsComponent},
    { path : 'home' , component : HomeComponent}
];
