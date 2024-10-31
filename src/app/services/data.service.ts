import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl: string = 'http://localhost:8081/v1/api/messages/search?';
 config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};
constructor(private httpClient: HttpClient) {}

getSearchResult(request: any) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  return this.httpClient.get(
    '/api' );
}
}
