import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'mynews-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @ViewChild(ChangePasswordComponent) changePasswordComponent: ChangePasswordComponent;
  userActive = true;
  newsActive = false;
  commentsActive = false;

  username = null;
  isLogin:any = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('user');
    this.isLogin = sessionStorage.getItem('status');
    console.log("this.username, this.isLogin", this.username, this.isLogin);
  }


    // 用户注销 （sign out）
    logout() {
      this.isLogin = false;
      sessionStorage.removeItem('status') ;   //清除登录状态 
      sessionStorage.removeItem('user') ;   //清除登录状态 
      this.router.navigate(['/login']);
  
    }


}
