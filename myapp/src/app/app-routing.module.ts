import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [

  { path: '', redirectTo: 'Login', pathMatch: 'full' },


  {
    path: 'Login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },


  {
    path: 'Register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'User',
    component: UserComponent,
    data: {
      title: 'Register Page'
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
