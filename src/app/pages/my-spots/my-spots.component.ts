import { Component, OnInit } from '@angular/core';

//services
import { SpotApiService } from '../../services/spot-api.service';
import { AuthApiService } from '../../services/auth-api.service';
import { environment } from  '../../../environments/environment';

//components
//import { SpotFromComponent }

@Component({
  selector: 'app-my-spots',
  templateUrl: './my-spots.component.html',
  styleUrls: ['./my-spots.component.css']
})
export class MySpotsComponent implements OnInit {

  imageDomain = environment.apiUrl;
  errorMessage: string;

  mySpots: any[] = [];
  isFormOn = false;
  userInfo: any;

  constructor(
    private spotThang: SpotApiService,
    private authThang: AuthApiService
  ) { }

  ngOnInit() {
    this.spotThang.getMySpots()
      .subscribe(
        (listOfSpots: any[]) => {
          this.mySpots = listOfSpots;
        },
        (errInfo) => {
          if (errInfo.status === 401) {
            this.errorMessage = "You need to be logged in.";
          } else {
            this.errorMessage = 'Something went wrong. Try again later';
          }
        }
      )
  }

  showsForm() {
    if (this.isFormOn) {
      this.isFormOn = false;
    } else {
      this.isFormOn = true;
    }
  }

  handleNewSpot(submissionInfo) {
    this.mySpots.unshift(submissionInfo.spot);
    this.isFormOn = false;
  }

}
