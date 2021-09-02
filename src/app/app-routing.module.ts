import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './Component/login/login.component';
import { QuizComponent } from './Component/quiz/quiz.component';
import { SignupComponent } from './Component/signup/signup.component';

const routes: Routes = [
  { path:'', component:SignupComponent},

  { 
    path:'Login', 
    component:LoginComponent,
  },
  { 
    path:'Signup', 
    component:SignupComponent,
  },
  {
    path: 'quiz' , 
    component:QuizComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
