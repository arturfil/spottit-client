import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SpotApiService } from '../../services/spot-api.service';
import { AuthApiService } from '../../services/auth-api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-spot-details',
  templateUrl: './spot-details.component.html',
  styleUrls: ['./spot-details.component.css']
})
export class SpotDetailsComponent implements OnInit {

  imageDomain = environment.apiUrl;
  spotInfo: any = {};
  userInfo: any;

  constructor(
    private activatedThang: ActivatedRoute,
    private routerThang: Router,
    private spotThang: SpotApiService,
    private authThang: AuthApiService
  ) { }

  ngOnInit() {
    this.activatedThang.params.subscribe((myParams) => {
      this.spotThang.getSpotDetails(myParams.spotId)
        .subscribe(
          (theSpotFromApi) => {
            this.spotInfo = theSpotFromApi;
          }
        );
    });

    this.authThang.getLoginStatus()
      .subscribe(
        (loggedInInfo: any) => {
          if (loggedInInfo.isLoggedIn) {
            this.userInfo = loggedInInfo.userInfo
          }
        }
      );
  }

  deleteClick() {
    this.spotThang.deleteSpot(this.spotInfo._id)
      .subscribe(
        () => {
          this.routerThang.navigate(['']);
        }
      )
  }

}
