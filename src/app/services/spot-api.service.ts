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
  getSpots() {
    return this.httpThang.get(
      this.baseUrl + '/api/spots'
    );
  }

  // GET/api/items/ID
  getSpotDetails(spotId: string){
    return this.httpThang.get(
      this.baseUrl + '/api/spots/' + spotId
    );
  }

  //POST/api/spots
  postSpot(spotFields: SpotInfo) {
    return this.httpThang.post(
      this.baseUrl + '/api/spots/',
      spotFields,
      { withCredentials: true }
    );
  }

  //GET/api/myspots
  getMySpots(){
    return this.httpThang.get(
      this.baseUrl + '/api/myspots',
      {withCredentials: true}
    )
  }

}
