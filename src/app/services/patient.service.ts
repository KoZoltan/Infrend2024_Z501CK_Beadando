import { Injectable, inject } from '@angular/core';
import { PatientDto } from '../../models/patient-dto';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  path = "http://localhost:3000";
  
  http = inject(HttpClient);
  
  constructor() {}

  getAll() : Observable<PatientDto[]>{
    return this.http.get<PatientDto[]>(this.path + '/api/patient');    
  }

  getOne(id: number) {
    return this.http.get<PatientDto>(this.path + '/api/patient/' + id);    
  }

  create(patient: PatientDto) {
    return this.http.post<PatientDto>(this.path + '/api/patient', patient);
  }

  update(patient: PatientDto) {
    return this.http.put<PatientDto>(this.path + '/api/patient', patient);
  }

  delete(id: number) {
    return this.http.delete(this.path + '/api/patient/' + id); 
  }
  getPatientByTaj(Taj: string): Observable<PatientDto> {
    return this.http.get<PatientDto>(this.path + '/api/patient/' + Taj)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(error.message || 'server error');
  }

}
