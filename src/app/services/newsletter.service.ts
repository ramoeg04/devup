import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  public UrlC: string = 'https://5eed24da4cbc340016330f0d.mockapi.io/api/newsletter';

  constructor(private http: HttpClient) { }

  postNewsletter(data: any): Observable<any> {
    return this.http.post(`${this.UrlC}`,data,{headers: this.httpHeaders});
  }

}


