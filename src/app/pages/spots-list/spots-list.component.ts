import { Component, OnInit } from '@angular/core';

import { SpotApiService } from '../../services/spot-api.service';
import { AuthApiService } from '../../services/auth-api.service';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-spots-list',
  templateUrl: './spots-list.component.html',
  styleUrls: ['./spots-list.component.css']
})
export class SpotsListComponent implements OnInit {

  imageDomain = environment.apiUrl;

  isFormOn = false;
  spots: any[] = [];
  workouts: any;
  userInfo: any;
  queryInput: any;

  constructor(
    private spotService: SpotApiService,
    private authThang: AuthApiService,
  ) { }

  ngOnInit() {
    this.spotService.getSpots()
      .subscribe(
        (spotsFromApi: any[]) => {
          this.spots = spotsFromApi;
        }
      );

      this.authThang.getLoginStatus()
        .subscribe(
          (loggedInInfo: any) => {
            if (loggedInInfo.isLoggedIn) {
              this.userInfo = loggedInInfo.userInfo;
            }
          }
        );
  }

  showFrom() {
    if (this.isFormOn) {
      this.isFormOn = false;
    } else {
      this.isFormOn = true;
    }
  }

  handleNewSpot(theSpot) {
    this.spots.unshift(theSpot)
    this.isFormOn = false;
  }

}
