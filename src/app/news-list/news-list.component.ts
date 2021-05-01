import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';
import { AlertsComponent } from '../alerts/alerts.component';
import { AddnewComponent } from '../addnew/addnew.component';

@Component({
  selector: 'mynews-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @ViewChild(AlertsComponent) alertsComponent: AlertsComponent;
  @ViewChild(AddnewComponent) addnewComponent: AddnewComponent;


  username = null;
  isLogin:any = false;
  news_list: any [] = null; 
  selectedNews: any [] = null;

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

}
