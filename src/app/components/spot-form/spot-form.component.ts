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
    // send 'this.newSpot' for the backend for saving
    this.spotThang.postSpot(this.newSpot)
      .subscribe(
        // SUCCESS (1st argument of subscribe())
        (fullSpotDetails) => {
          console.log('New spot success', fullSpotDetails);

          // notify the parent about the new spot through the output
          this.newSpotNotifier.emit(fullSpotDetails);

          this.errorMessage = '';
          this.newSpot = {
            spotName: '',
            spotAddress: '',
            spotImage: '',
            spotWorkout: ''
          };
        },

        // ERROR!(2nd argument of subscribe())
        (errorInfo) => {
          console.log('New phone error', errorInfo);

          if (errorInfo.status === 400) {
            this.errorMessage = 'Validation error.';
          } else {
            this.errorMessage = 'Unknown error. Try again later.'
          }
        }
      ); // .subscribe()
  } // saveNewspot()
}