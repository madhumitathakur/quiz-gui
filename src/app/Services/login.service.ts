import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isLoggedIn: boolean = false;
  loggedInUser: User;
  constructor(private http: HttpClient) { 
  }

  public signup(user: User){
    return this.http.post("http://localhost:8080/signup", user);
  }
  public validateUser(user: User) {
    return this.http.post("http://localhost:8080/login", user);
  }
    public getQuestions() {
      return this.http.get("http://localhost:8080/questions");
    }
}
