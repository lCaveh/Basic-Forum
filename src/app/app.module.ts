import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ThreadComponent } from './thread/thread.component';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule,Routes} from '@angular/router';
import {AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'thread', component: ThreadComponent},
  {path: '',redirectTo: '/home', pathMatch:'full'},
  {path: '**',redirectTo: '/home', pathMatch:'full'},
];
const firebaseConfig = {
    apiKey: "AIzaSyBc9vrCsiL6ek01tj8XeBHS3QyVlwqLoJU",
    authDomain: "basic-forum.firebaseapp.com",
    databaseURL: "https://basic-forum.firebaseio.com",
    projectId: "basic-forum",
    storageBucket: "basic-forum.appspot.com",
    messagingSenderId: "608521292118"
}
const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
    ThreadComponent,
    CommentComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
