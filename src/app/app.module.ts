import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserServiceService } from './services/user-service.service';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsService } from './services/news.service';
import { AlertsComponent } from './alerts/alerts.component';
import { NewdetailComponent } from './newdetail/newdetail.component';
import { AddnewComponent } from './addnew/addnew.component';
import { EditnewComponent } from './editnew/editnew.component';
import { AdminComponent } from './admin/admin.component';
import { UserManageComponent } from './admin/user-manage/user-manage.component';
import { NewsManageComponent } from './admin/news-manage/news-manage.component';
import { CommentsManageComponent } from './admin/comments-manage/comments-manage.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NewsListComponent,
    AlertsComponent,
    NewdetailComponent,
    AddnewComponent,
    EditnewComponent,
    AdminComponent,
    UserManageComponent,
    NewsManageComponent,
    CommentsManageComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [UserServiceService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
