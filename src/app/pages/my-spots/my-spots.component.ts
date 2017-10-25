import { Component, OnInit } from '@angular/core';

//services
import { SpotApiService } from '../../services/spot-api.service';
import { AuthApiService } from '../../services/auth-api.service';
import { environment } from  '../../../environments/environment';

//components
import { SpotFormComponent } from '../../components/spot-form/spot-form.component';

@Component({
  selector: 'app-my-spots',
  templateUrl: './my-spots.component.html',
  styleUrls: ['./my-spots.component.css']
})
export class MySpotsComponent implements OnInit {

  imageDomain = environment.apiUrl;
  errorMessage: string;

  spots: any[] = [];
  isFormOn = false;
  userInfo: any;

  constructor(
    private spotThang: SpotApiService,
    private authThang: AuthApiService
  ) { }

  ngOnInit() {
    this.spotThang.getSpots()
      .subscribe(
        (spotsFromApi: any[]) => {
          this.spots = spotsFromApi;
        }
      );
  }

  showsForm() {
    if (this.isFormOn) {
      this.isFormOn = false;
    } else {
      this.isFormOn = true;
    }
  }

  handleNewSpot(submissionInfo) {
    this.spots.unshift(submissionInfo.spot);
    this.isFormOn = false;
  }

}
