import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CustomHttpServiceService {


  constructor(private http: HttpClient) { }

  public getAllClass(){
    return this.http.get("http://localhost:8080/classes");
  }

  public getAllUser(){
    return this.http.get("http://localhost:8080/users");
  }

  public getResult(userId: number, classId: number){
    return this.http.get("http://localhost:8080/results/"+userId+"/"+classId);
  }
  public getAdmission(userId: number, classId: number){
    return this.http.get("http://localhost:8080/admission/"+userId+"/"+classId);
  }
 
}
