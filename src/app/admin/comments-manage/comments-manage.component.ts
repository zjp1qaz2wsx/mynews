import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertsComponent } from 'src/app/alerts/alerts.component';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'mynews-comments-manage',
  templateUrl: './comments-manage.component.html',
  styleUrls: ['./comments-manage.component.scss']
})
export class CommentsManageComponent implements OnInit {
  @ViewChild(AlertsComponent) alertsComponent: AlertsComponent;

  username = null;
  isLogin:any = false;
  comments_list: any [] = null; 
  selectedTasks: any [] = null;
  loadingFlag = false;

  constructor(
    private commentsService: CommentsService,
  ) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('user');
    this.isLogin = sessionStorage.getItem('status');
    console.log("this.username, this.isLogin", this.username, this.isLogin);
    this.getAllComments();
  }

  getAllComments() {
    this.loadingFlag = true;
    this.commentsService.getAllComments()
    .subscribe(
      data => {
        console.log("get all comments info", data);
        let msg = data["msg"];
        let result = data["result"]
        if(msg == "success"){
          this.comments_list = result;
        } else {
          this.alertsComponent.alertActions("Fail to get comments!", "danger");
        }
        this.loadingFlag = false;
      }
    )
  }

  delete(id){
    console.log("delete new id", id)
    this.commentsService.deleteSpecificComment(id)
    .subscribe(
      data => {
        console.log("delete specific commnet info", data);
        let msg = data["msg"];
        let result = data["result"]
        if(msg == "success"){
          this.comments_list = this.comments_list.filter(element=>{
            return element._id !== id
          });
          console.log("this.comments_list",this.comments_list)
          this.alertsComponent.alertActions("Delete comment successfully!", "success");
        } else {
          this.alertsComponent.alertActions("Fail to delete commnet!", "danger");
        }
      }
    )

  }

}
