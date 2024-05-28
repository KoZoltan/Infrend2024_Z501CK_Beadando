import { Component, OnInit } from '@angular/core';
import { PatientDto } from '../models/patient-dto';
import { PatientService } from '../app/services/patient.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input'; 
import { RecordsDto } from '../models/records-dto';
import { MatNativeDateModule } from '@angular/material/core';
import { SlicerService } from '../app/services/slicer.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-slicer',
  standalone: true,
  imports: [MatCheckboxModule,CommonModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatPaginatorModule,FormsModule,MatDatepickerModule,MatSelectModule,MatNativeDateModule],
  templateUrl: './records.component.html',
  styleUrl: './records.component.css'
})
export class RecordsComponent implements OnInit {
  slicerForm: FormGroup;
  patients: PatientDto[] = [];
  slicer: RecordsDto | null = null; 
  selection = new SelectionModel<PatientDto>(true, []);
  displayedColumns: string[] = ['select', 'firstName', 'lastName', 'age', 'gender', 'prostatescreen', 'CommonScreen'];
  slicers: RecordsDto[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private slicerService: SlicerService, 
    private _snackBar: MatSnackBar 
  ) {
    this.slicerForm = this.formBuilder.group({});
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.patients.length;
    return numSelected === numRows;
  }
  
  ngOnInit(): void {
    this.patientService.getAll().subscribe( {
      next: (data) => {
        try{
        console.log(data)
        this.patients = data;
        console.log(this.patients);
        }catch(err){console.log(err)}
      }
    });
    this.slicerService.getAll().subscribe( {
      next: (data) => {
        try{
        console.log(data)
        this.slicers= data;
        console.log(this.slicers);
        }catch(err){console.log(err)}
      }
    });
  }
  openSnackBar() {
    this._snackBar.open('Email sent!', 'Close', {
      duration: 2000,
    });
  }
  loadPatients() {
    
    
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.patients.forEach(row => this.selection.select(row));
  }

  onSubmit() {
    this.openSnackBar(); // Snackbar megjelenítése
  }
  calculateAge(birthDate: Date): number {
    const today = new Date();
    const dob = new Date(birthDate);
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  }
  


  filterl(Taj:number):Date|null{
    const a = this.slicers.filter((item)=> {return item.Taj == Taj})
    if (a.length > 0) {
      return a[0].lungscreen || null;
  } else {
      return null;
    }
 }
  
  filterc(Taj:number):Date|null{
      const a = this.slicers.filter((item)=> {return item.Taj == Taj})
      if (a.length > 0) {
        return a[0].CommonScreen || null;
    } else {
        return null;
      }
  }
  
  filterp(Taj:number):Date|null{
    const a = this.slicers.filter((item)=> {return item.Taj == Taj})
    if (a.length > 0) {
      return a[0].prostatescreen || null;
  } else {
      return null;
  }
  }   
   
  filtem(Taj: number): Date | null {
    const filteredItems = this.slicers.filter(item => item.Taj === Taj);
    if (filteredItems.length > 0) {
        return filteredItems[0].mamografScreen || null;
    } else {
        return null;
    }
}
}