import { Injectable, inject } from '@angular/core';
import { VisitDto } from '../../models/visit-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  path = "http://localhost:3000";
  
  http = inject(HttpClient);

  constructor() {}
  addVisit(visit: VisitDto): Observable<any> {
    return this.http.post<any>(this.path, visit);
  }

  // Látogatás lekérdezése az azonosító alapján
  getVisitByTaj(Taj: number): Observable<VisitDto> {
    const url = `${this.path}/${Taj}`;
    return this.http.get<VisitDto>(url);
  }

  // Összes látogatás lekérdezése
  getAllVisits(): Observable<VisitDto[]> {
    return this.http.get<VisitDto[]>(this.path);
  }

  // Látogatás frissítése
  updateVisit(visit: VisitDto): Observable<any> {
    const url = `${this.path}/${visit.Taj}`;
    return this.http.put(url, visit);
  }

  // Látogatás törlése
  deleteVisit(Taj: number): Observable<any> {
    const url = `${this.path}/${Taj}`;
    return this.http.delete(url);
  }
}
