import { Component, OnInit } from '@angular/core';
import { AngularFire} from 'angularfire2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showLogin:boolean = true;
  email:string;
  password:string;
  constructor(public af:AngularFire) { }

  ngOnInit() {
  }

  toggleForm(){
    this.showLogin = !this.showLogin;
  }
  login(){
    this.af.auth.login({
      email: this.email,
      password:this.password
    }).then(()=>{
      window.location.href = "/home";
    })
  }
  createAccount(){
    this.af.auth.createUser({email: this.email, password: this.password})
      .then((authObj)=>{
        console.log(authObj);
        this.af.database.object(`threads/${authObj.uid}`).update({
          email: this.email,
          id: authObj.uid
        }).then(()=>{

        }).catch(err=>{
          console.log(err);
        })
      }).catch((err)=>{
        console.log(err);
      })
  }
}
