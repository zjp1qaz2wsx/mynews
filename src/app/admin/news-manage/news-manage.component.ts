import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertsComponent } from 'src/app/alerts/alerts.component';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'mynews-news-manage',
  templateUrl: './news-manage.component.html',
  styleUrls: ['./news-manage.component.scss']
})
export class NewsManageComponent implements OnInit {
  @ViewChild(AlertsComponent) alertsComponent: AlertsComponent;

  username = null;
  isLogin:any = false;
  news_list: any [] = null; 
  selectedTasks: any [] = null;
  loadingFlag = false;

  constructor(
    private newsService: NewsService,
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
          this.alertsComponent.alertActions("Delete News Successfully!", "success");
        } else {
          this.alertsComponent.alertActions("Fail to delete new!", "danger");
        }
      }
    )

  }

}
