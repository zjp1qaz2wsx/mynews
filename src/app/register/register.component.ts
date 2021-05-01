import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mynews-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage = null;
  isLogin: any = false;
  
  constructor(
    private userServiceService: UserServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  register(username, password){
    let obj = {
      username: username,
      password: password
    }
    this.userServiceService.register(obj)
    .subscribe(
      data => {
        console.log("login info data", data)
        let msg = data["msg"];
        let result = data["result"]
        console.log("code msg result", msg,result)
        if(msg != "success"){
          this.errorMessage = msg
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
