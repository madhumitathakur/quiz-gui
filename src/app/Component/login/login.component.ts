import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  public login(loginForm){
    console.log(loginForm);
    if(loginForm.invalid)
      return ;
   this.loginService.validateUser({email:loginForm.value.email, password:loginForm.value.pwd}).subscribe(
     (response: User) =>{
      this.loginService.isLoggedIn = true;
      this.loginService.loggedInUser = response;
      this.router.navigate(["quiz"])
      console.log('login successfully');
     }, () =>{window.alert("login failed");}
   );
 
  }


}
