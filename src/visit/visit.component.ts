import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input'; 
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { PatientDto } from '../models/patient-dto';
import { PatientService } from '../app/services/patient.service';
import { medrecDto } from '../models/medrec-dto';
import { RecordsService } from '../app/services/records.service';





@Component({
  selector: 'app-visit',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatFormFieldModule,
    MatInputModule,MatPaginatorModule,FormsModule,MatDatepickerModule,
    MatSelectModule,MatNativeDateModule,MatPaginator],
  templateUrl: './visit.component.html',
  styleUrl: './visit.component.css'
})
export class VisitComponent implements OnInit {
  visitForm: FormGroup;
  Tajnumber = "";
  patientlist: PatientDto[] = [];
  medreclist: medrecDto[] = [];
  medrec2: medrecDto[] = [];
  record : string = "";
  patient = this.patientlist[0]; 

  constructor(private formBuilder: FormBuilder, private patientService: PatientService, private medrecService: RecordsService) {
    this.visitForm = this.formBuilder.group({
      patientTaj: ['', Validators.required],
      medrecTaj: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getPatients()
    this.getMedrecs()
  }

  getPatients(): void {
    this.patientService.getAll()
      .subscribe({
        next: (data) => {
          this.patientlist = data;
        }
      });
  }
  getMedrecs(): void {
    this.medrecService.getAll()
      .subscribe({
        next: (data) => {
          this.medreclist = data;
        }
      });
  }


  getPatientByTaj() {
    console.log(this.Tajnumber);
    const control = this.visitForm.get('patientTaj');
    if (control) {
      const patientTaj = control.value;
      this.patientService.getPatientByTaj(this.Tajnumber).subscribe(patient => {
        this.patient = patient;
      });
    }
  }
  
  getMedrecByTaj() {
    const control = this.visitForm.get('medrecTaj');
    if (control) {
      const medrecTaj = control.value;
      this.medrecService.getMedrecByTaj(this.Tajnumber).subscribe(medrec => {
        this.medrec2 = medrec;
      });
    }
  }
  addMedrec(): void {
    const medrec = {id:0,MedicalRecords:this.record,Taj:parseInt(this.Tajnumber)}
    if (medrec.MedicalRecords !="") {

      

      this.medrecService.create(medrec).subscribe({
        next: (data) => {
          console.log("New medrec added:", data);
        }
      });

      // Clear form fields after submission
      this.record = "";
      this.medrec2.push(medrec);
    }
  }
  fetchData(): void {
    const patientTaj = this.visitForm.get('patientTaj');
      this.patient = this.patientlist.find(p => p.Taj === +this.Tajnumber) as PatientDto;
      const medrecTaj = this.visitForm.get('medrecTaj');
      this.medrec2 = this.medreclist.filter(m => m.Taj === +this.Tajnumber);
      
  }
}