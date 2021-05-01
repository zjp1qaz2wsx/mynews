import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mynews-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginErrorMessage = null;
  isLogin: any = false;

  constructor(
    private userServiceService: UserServiceService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  login(username, password){
    let obj = {
      username: username,
      password: password
    }
    this.userServiceService.login(obj)
    .subscribe(
      data => {
        console.log("login info data", data)
        let code = data["code"];
        let msg = data["msg"];
        let result = data["result"]
        console.log("code msg result", code, msg,result)
        if(code != "0"){
          this.loginErrorMessage = msg
        } else {
          this.isLogin = true;
          sessionStorage.setItem('status', this.isLogin);  // 保存登录状态
          sessionStorage.setItem('user', username);
          this.router.navigate(['/newslist']);
        }
      }
    );

  }

}
