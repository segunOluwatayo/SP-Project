import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  signup(user: Partial<any>): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, user);
  }

  login(user: Partial<any>): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user);
  }
}