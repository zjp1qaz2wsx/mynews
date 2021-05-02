import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';
import { AlertsComponent } from '../alerts/alerts.component';
import { AddnewComponent } from '../addnew/addnew.component';
import { element } from 'protractor';
import { EditnewComponent } from '../editnew/editnew.component';

@Component({
  selector: 'mynews-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @ViewChild(AlertsComponent) alertsComponent: AlertsComponent;
  @ViewChild(AddnewComponent) addnewComponent: AddnewComponent;
  @ViewChild(EditnewComponent) editnewComponent: EditnewComponent;

  username = null;
  isLogin:any = false;
  news_list: any [] = null; 
  selectedNews: any [] = null;

  loadingFlag = false;

  constructor(
    private newsService: NewsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('user');
    this.isLogin = sessionStorage.getItem('status');
    console.log("this.username, this.isLogin", this.username, this.isLogin);
    this.getAllNews();
  }

  getAllNews() {
    this.loadingFlag = true;
    this.newsService.getAllNews()
    .subscribe(
      data => {
        console.log("get all new info", data);
        let msg = data["msg"];
        let result = data["result"]
        if(msg == "success"){
          this.news_list = result;
        } else {
          this.alertsComponent.alertActions("Fail to get news!", "danger");
        }
        this.loadingFlag = false;
      }
    )
  }

  add() {
    this.addnewComponent.transforInfo();
  }

  added(event) {
    console.log("added event", event);
    if (event) {
        this.alertsComponent.alertActions("Add new successfully!", "success");
        this.news_list.push(event)
    } else {
        this.alertsComponent.alertActions("Failed to add new!", "danger");
    }
  }

  edited(event) {
    console.log("edited event", event);
    if (event) {
        this.alertsComponent.alertActions("Edit new successfully!", "success");
        // this.news_list.push(event)
        this.getAllNews();
    } else {
        this.alertsComponent.alertActions("Failed to edit new!", "danger");
    }
  }

  isOwner(new_author) {
    let isSame = false;
    if(this.username === new_author){
      isSame = true;
    } 
    return isSame;
  }

  editNew(obj) {
    this.editnewComponent.transforInfo(obj);
  }

  deleteNew(id){
    console.log("delete new id", id)
    this.newsService.deleteSpecificNew(id)
    .subscribe(
      data => {
        console.log("delete specific new info", data);
        let msg = data["msg"];
        let result = data["result"]
        if(msg == "success"){
          this.news_list = this.news_list.filter(element=>{
            return element._id !== id
          });
          console.log("this.news_list",this.news_list)
        } else {
          this.alertsComponent.alertActions("Fail to delete new!", "danger");
        }
      }
    )

  }

  refresh() {
    this.getAllNews();
  }

    // 用户注销 （sign out）
    logout() {
      this.isLogin = false;
      sessionStorage.removeItem('status') ;   //清除登录状态 
      sessionStorage.removeItem('user') ;   //清除登录状态 
      this.router.navigate(['/login']);
  
    }

}
