import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private isAdmin: boolean = true;
  constructor(private loginService: LoginService,private router: Router) { }
    user1: User = new User();
    ngOnInit(): void {
  }


  public submitForm(){
    this.loginService.signup(this.user1)
    console.log(this.user1);
    this.loginService.signup(this.user1).subscribe(() => {
      window.alert("User saved successfully");
    }, ()=> {
      window.alert("unable to save user");
    });
  }

}
