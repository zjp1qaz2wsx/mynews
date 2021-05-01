import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mynews-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mynews';
  isLogin: any = false;
  username = null;

  constructor(
    private router: Router,
    ) { }

  ngOnInit(): void {
    // sessionStorage.removeItem('status') ;   //清除登录状态 
    // sessionStorage.removeItem('user') ;   //清除登录状态 
    this.username = sessionStorage.getItem('user');
    this.isLogin = sessionStorage.getItem('status');
    console.log("app init", this.username, this.isLogin)
  }

  // 用户注销 （sign out）
  logout() {
    this.isLogin = false;
    sessionStorage.removeItem('status') ;   //清除登录状态 
    sessionStorage.removeItem('user') ;   //清除登录状态 
    this.router.navigate(['/login']);

  }
}
