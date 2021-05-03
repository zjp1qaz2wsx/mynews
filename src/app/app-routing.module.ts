import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewdetailComponent } from './newdetail/newdetail.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'login' , component : LoginComponent  },
  { path: 'admin' , component : AdminComponent  },
  { path: 'register' , component : RegisterComponent  },
  { path: 'newslist' , component : NewsListComponent  },
  { path: 'newslist/newdetail/:id' , component : NewdetailComponent  },
  { path: '', redirectTo: "login" , pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
