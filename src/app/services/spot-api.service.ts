import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SpotInfo } from '../interfaces/spot-info';
import { environment } from '../../environments/environment';

@Injectable()
export class SpotApiService {

  baseUrl: string = environment.apiUrl;

  constructor(
    private httpThang: HttpClient
  ) { }

  // GET/api/items
  getItems() {
    return this.httpThang.get(
      this.baseUrl + '/api/items'
    );
  }

  // GET/api/items/ID
  

}
