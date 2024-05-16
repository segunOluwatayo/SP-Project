import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private baseUrl = 'http://localhost:3000/api/questions';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.baseUrl);
  }

  getQuestion(id: string): Observable<Question> {
    return this.http.get<Question>(`${this.baseUrl}/${id}`);
  }

  postQuestion(question: Partial<Question>): Observable<Question> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post<Question>(this.baseUrl, question, { headers });
  }

  updateQuestion(id: string, question: Partial<Question>): Observable<Question> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.put<Question>(`${this.baseUrl}/${id}`, question, { headers });
  }

  deleteQuestion(id: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.delete(`${this.baseUrl}/${id}`, { headers });
  }

  upvoteQuestion(id: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post(`${this.baseUrl}/${id}/upvote`, {}, { headers });
  }
}