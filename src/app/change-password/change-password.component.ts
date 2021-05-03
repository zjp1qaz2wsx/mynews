import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'mynews-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  @Output() verify_changedpassword = new EventEmitter<any>();
  isAddNewDialog = false;

  loginUserId = null;
  oldpassword = null;
  newpassword = null;

  constructor(
    private userServiceService: UserServiceService,
  ) { }

  ngOnInit(): void {
  }

  transfor(loginUserId) {
    this.loginUserId = loginUserId;
    this.isAddNewDialog = true;
  }

  changePassword() {
    let obj = {
      password: this.newpassword
    }
    this.userServiceService.editSpecificUser(this.loginUserId, obj)
    .subscribe(
      data => {
        console.log("change password info", data);
        let msg = data["msg"];
        let result = data["result"]
        if(msg == "success"){
          console.log("add news info", result);
          this.verify_changedpassword.emit(result);

        } 
        this.isAddNewDialog = false;
      }
    )
  }

  cancel() {
    this.isAddNewDialog = false;
  }



}
