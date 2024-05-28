import { Injectable } from '@angular/core';
import { PatientService } from './patient.service';
import { HttpClient } from '@angular/common/http';
import { SlicerDto } from '../../models/slicer-dto';
import { Observable, catchError, of, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlicerService {
    path = 'http://localhost:3000'; // Az API elérési útja, ha van
  
    constructor(private http: HttpClient) {}
  
    getAll() : Observable<SlicerDto[]>{
      return this.http.get<SlicerDto[]>(this.path + '/api/slicer');    
    }
  
    getOne(id: number) {
      return this.http.get<SlicerDto>(this.path + '/api/slicer/' + id);    
    }
  
    create(slicer: SlicerDto) {
      return this.http.post<SlicerDto>(this.path + '/api/slicer', slicer);
    }
  
    update(slicer: SlicerDto) {
      return this.http.put<SlicerDto>(this.path + '/api/slicer', slicer);
    }
  
    delete(id: number) {
      return this.http.delete(this.path + '/api/slicer/' + id); 
    }
    getPatientByTaj(taj: number): Observable<SlicerDto> {
      return this.http.get<SlicerDto>(this.path + '/api/slicer/' + taj)
        .pipe(
          catchError(this.handleError)
        );
    }
    getSlicerByTaj(taj: number): Observable<SlicerDto> {
      return this.http.get<SlicerDto>(this.path + '/api/slicer/' + taj)
        .pipe(
          catchError(this.handleError)
        );
    }
    // Hibakezelés
    private handleError(error: any) {
      console.error('An error occurred', error);
      return throwError(error.message || 'server error');
    }
  }
  