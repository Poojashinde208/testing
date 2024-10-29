import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl: string = 'http://172.31.31.89:8081/v1/api/messages/search?';

  constructor(private httpClient: HttpClient) {}

  getSearchResult(request: any) {
    return this.httpClient.get(
      this.baseUrl + request
       
    );
  }
}
