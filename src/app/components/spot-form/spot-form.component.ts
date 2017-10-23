import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

//Import interface to avoid errors
import { SpotInfo } from '../../interfaces/spot-info';
//import services
import { SpotApiService } from '../../services/spot-api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-spot-form',
  templateUrl: './spot-form.component.html',
  styleUrls: ['./spot-form.component.css']
})
export class SpotFormComponent implements OnInit {

  myUploader = new FileUploader(
    {
      url: environment.apiUrl + '/api/spots',
      itemAlias: 'spotImage'
    }
  )

  newSpot: SpotInfo = {
    spotName: '',
    spotAddress: '',
    spotWorkout: '',
    spotImage: ''
  }

  queryInput: string;
  errorMessage: string;

  @Output() newSpotNotifier = new EventEmitter();

  constructor(
    private spotThang: SpotApiService
  ) { }

  ngOnInit() {
  }

  saveNewSpot() {
    if (this.myUploader.getNotUploadedItems().length > 0) {
      this.saveSpotWithImage()
    } else {
      this.saveSpotWithNoImage()
    }
  }

  saveSpotWithImage() {
    this.myUploader.onBuildItemForm = (spot, form) => {
      form.append('spotName', this.newSpot.spotName);
      form.append('spotAddress', this.newSpot.spotAddress);
      form.append('spotWorkout', this.newSpot.spotWorkout);
    }

    this.myUploader.onSuccessItem = (spot, response) => {
      const fullSpotDetails = JSON.parse(response);
      console.log('New spot success', fullSpotDetails);

      // notify the parent about the new item through the output
      this.newSpotNotifier.emit({
        spot: fullSpotDetails,
        queryInput: this.queryInput
      });

      this.errorMessage = '';
      this.newSpot = {
        spotName: '',
        spotAddress: '',
        spotImage: '',
        spotWorkout: ''
      }
    }

    this.myUploader.onErrorItem = (item, response) => {
      console.log("New spot error", response);

      this.errorMessage = "Unknown error, try again later"
    } // on Error Item

    //start ajax request
    this.myUploader.uploadAll();
  }

  saveSpotWithNoImage() {
    //send 'this.newSpot' to the backend for saving
    this.spotThang.postSpot(this.newSpot)
      .subscribe(
        (fullSpotDetails) => {
          console.log('New spot succes', fullSpotDetails);
          this.newSpotNotifier.emit({
            item: fullSpotDetails,
            queryInput: this.queryInput
          });

          this.errorMessage = '';
          this.newSpot = {
            spotName: '',
            spotAddress: '',
            spotImage: '',
            spotWorkout: ''
          }
        },
        (errorInfo) => {
          console.log('New item error', errorInfo);
          if(errorInfo.status === 400) {
            this.errorMessage = 'Validation Error.'
          } else {
            this.errorMessage = 'Unknown error. Try again later.'
          }
        }
      )
  }

}
