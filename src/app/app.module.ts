import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

//services
import { AuthApiService } from './services/auth-api.service';
import { SpotApiService } from './services/spot-api.service';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpotsListComponent } from './pages/spots-list/spots-list.component';
import { SpotFormComponent } from './components/spot-form/spot-form.component';
import { MySpotsComponent } from './pages/my-spots/my-spots.component';
import { SpotDetailsComponent } from './pages/spot-details/spot-details.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SignUpComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    SpotsListComponent,
    SpotFormComponent,
    MySpotsComponent,
    SpotDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FileUploadModule
  ],
  providers: [
    AuthApiService,
    SpotApiService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
