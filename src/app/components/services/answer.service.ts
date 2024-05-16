import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answer } from '../models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private baseUrl = 'http://localhost:3000/api/answers';

  constructor(private http: HttpClient) {}

  getAnswers(questionId: string): Observable<Answer[]> {
    return this.http.get<Answer[]>(`${this.baseUrl}/question/${questionId}`);
  }

  getAnswer(id: string): Observable<Answer> {
    return this.http.get<Answer>(`${this.baseUrl}/${id}`);
  }

  createAnswer(answer: Partial<Answer>): Observable<Answer> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post<Answer>(this.baseUrl, answer, { headers });
  }

  updateAnswer(id: string, answer: Partial<Answer>): Observable<Answer> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.put<Answer>(`${this.baseUrl}/${id}`, answer, { headers });
  }

  deleteAnswer(id: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.delete(`${this.baseUrl}/${id}`, { headers });
  }

  upvoteAnswer(id: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post(`${this.baseUrl}/${id}/upvote`, {}, { headers });
  }
}