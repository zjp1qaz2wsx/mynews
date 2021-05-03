import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AlertsComponent } from 'src/app/alerts/alerts.component';

@Component({
  selector: 'mynews-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent implements OnInit {
  @ViewChild(AlertsComponent) alertsComponent: AlertsComponent;
  usersList: any [] = null;
  selectedTasks: any [] = null;
  loadingFlag = false;

  constructor(
    private userServiceService: UserServiceService,
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.loadingFlag = true;
    this.userServiceService.getAllUsers()
    .subscribe( data => {
        console.log("login info data", data)
        let msg = data["msg"];
        let result = data["result"]
        console.log("code msg result", msg,result)
        if(msg === "success"){
          this.usersList = result;
        } 
        this.loadingFlag = false;
      }
    );
  }

  deleteUser(id){
    console.log("delete user id", id)
    this.userServiceService.deleteSpcificUser(id)
    .subscribe(
      data => {
        console.log("delete specific user info", data);
        let msg = data["msg"];
        let result = data["result"]
        if(msg == "success"){
          this.usersList = this.usersList.filter(element=>{
            return element._id !== id
          });
          console.log("this.news_list",this.usersList);
          this.alertsComponent.alertActions("Delete User Successfully!", "success");
        } else {
          this.alertsComponent.alertActions("Fail to delete user!", "danger");
        }
      }
    )

  }


}
