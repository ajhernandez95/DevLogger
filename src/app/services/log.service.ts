import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  apiUrl: string = 'api/logs';
  constructor(private http: HttpClient) {}

  getLogs(): Observable<Log[]> {
    return this.http.get<Log[]>(this.apiUrl);
  }

  addLog(log): Observable<Log> {
    return this.http.post<Log>(this.apiUrl, log);
  }

  getLog(id): Observable<Log> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Log>(url);
  }

  updateLog(log): Observable<Log> {
    const url = `${this.apiUrl}/${log.id}`;
    return this.http.put<Log>(url, log);
  }

  deleteLog(log): Observable<Log> {
    const url = `${this.apiUrl}/${log.id}`;
    return this.http.delete<Log>(url);
  }
}
