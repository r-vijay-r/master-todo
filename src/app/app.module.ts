import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import * as firebase from 'firebase';
import { AuthProviders,AuthMethods} from 'angularfire2';

const firebaseConfig = {
 apiKey: "AIzaSyBuhNGCwz29zR5KzVMuCzV1U0xxKSjfO9E",
 authDomain: "test-b4797.firebaseapp.com",
 databaseURL: "https://test-b4797.firebaseio.com/",
 storageBucket: "test-b4797.appspot.com"
}
const AuthenticationConfig = {
   method: AuthMethods.Popup,
   provider: AuthProviders.Google
 }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, AuthenticationConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
