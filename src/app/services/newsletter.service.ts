import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Newsletter } from '../../core/interfaces/inewsletter';


@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  public UrlC: string = 'https://5eed24da4cbc340016330f0d.mockapi.io/api/newsletter';

  constructor(private http: HttpClient) { }

  postNewsletter(data: any): Observable<any> {
    return this.http.post(`${this.UrlC}`,data);
  }




}


