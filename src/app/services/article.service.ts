import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../core/interfaces/iarticle';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  public UrlC: string = 'https://5eed24da4cbc340016330f0d.mockapi.io/api';

  constructor(private http: HttpClient) { }

  articleList(): Observable<any> {
    return this.http.get(`${this.UrlC}/articles`);
  }
  articleFilter(category:string): Observable<any>{
    return this.http.get(`${this.UrlC}/articles?filter=${category}`)
  }



}


