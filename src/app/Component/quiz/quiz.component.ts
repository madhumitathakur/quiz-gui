import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/question';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public responses: Question[] = [];
  constructor(private loginService: LoginService,private router: Router) { }

  ngOnInit(): void {
    this.loginService.getQuestions().subscribe((response: Question[]) =>{
      this.responses = response;
      console.log("response found ",this.responses);
     }, () =>{window.alert("login failed");});
  }

  onSubmit(): void{
    console.log("responses is ",this.responses);
    var totalSum = 0;
    this.responses.forEach(val =>{if(val.answerId == val.selectedAnswer){totalSum += val.marks}});
    alert("Total marks "+ totalSum);
  }

}
