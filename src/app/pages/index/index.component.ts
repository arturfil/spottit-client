import { Component, OnInit } from '@angular/core';
import { AuthApiService } from '../../services/auth-api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  userInfo: any;

  constructor(
    private authThang: AuthApiService
  ) { }

  ngOnInit() {
    this.authThang.getLoginStatus()
      .subscribe(
        (loggedInInfo: any) => {
          if (loggedInInfo.isLoggedIn) {
            this.userInfo = loggedInInfo.userInfo;
          }
        }
      )
  }

}
