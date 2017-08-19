import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  private readonly url = '/api';

  constructor(
    private http: HttpClient,
  ) { }

  getA() { return this.http.get(`${this.url}/a`); }

  getB() { return this.http.get(`${this.url}/b`); }

}
