import { Injectable, inject } from '@angular/core';
import { medrecDto } from '../../models/medrec-dto';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PatientDto } from '../../models/patient-dto';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  path = 'http://localhost:3000'; // Az API elérési útja, ha van

  constructor(private http: HttpClient) {}

  getAll() : Observable<medrecDto[]>{
    return this.http.get<medrecDto[]>(this.path + '/api/medrec');    
  }

  getOne(id: number) {
    return this.http.get<medrecDto>(this.path + '/api/medrec/' + id);    
  }

  create(medrec: medrecDto) {
    return this.http.post<medrecDto>(this.path + '/api/medrec', medrec);
  }

  update(medrec: medrecDto) {
    return this.http.put<medrecDto>(this.path + '/api/medrec', medrec);
  }

  delete(id: number) {
    return this.http.delete(this.path + '/api/medrec/' + id); 
  }
  getMedrecByTaj(taj: string): Observable<medrecDto[]> {
    const params = new HttpParams().set('Taj',taj)
    return this.http.get<medrecDto[]>(this.path + '/api/medrec/' + params)
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
