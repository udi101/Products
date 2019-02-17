

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Get calls
  get<T>(apiController: string): Observable<Array<T>> {
    return <Observable<Array<T>>>this.httpClient.get(apiController).pipe(
      data => {
        return data;
      },
      catchError((er: HttpErrorResponse) => {
        console.log('Error getting data: ' + er.message);
        return of();
      })
    );
  }

  constructor(private httpClient: HttpClient) { }
}
