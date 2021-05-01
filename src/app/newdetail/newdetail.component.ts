import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertsComponent } from '../alerts/alerts.component';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'mynews-newdetail',
  templateUrl: './newdetail.component.html',
  styleUrls: ['./newdetail.component.scss']
})
export class NewdetailComponent implements OnInit {
  @ViewChild(AlertsComponent) alertsComponent: AlertsComponent;
  newId = null;
  title = null;
  content = null;
  owner = null;
  addtime = null;

  commentContent = null;

  specificNewComments: any [] = null;
  selectedElements: any [] = null;

  constructor(
    private newsService: NewsService,
    private commentsService: CommentsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.newId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("newId ", this.newId ,typeof (this.newId));
    this.getNewDetail(this.newId);
    this.getAllCommentsOfSpecificNew(this.newId);
  }

  getNewDetail(id) {
    this.newsService.getSpecificNew(id).subscribe(
      data => {
        console.log("get specific new details", data);
        let msg = data["msg"];
        let result = data["result"]
        if(msg == "success"){
          this.title = result.title;
          this.content = result.content;
          this.owner = result.owner;
          this.addtime = result.addtime;
        } else {
          this.alertsComponent.alertActions("Fail to get news details!", "danger");
        }
      }
    )
  }

  getAllCommentsOfSpecificNew(newid) {
    this.commentsService.getAllCommentsOfSpecificNew(newid)
    .subscribe(
      data => {
        console.log("get all comments of specific new ", data);
        let msg = data["msg"];
        let result = data["result"]
        if(msg == "success"){
          this.specificNewComments = result;
        } else {
          this.alertsComponent.alertActions("Fail to get news commonts!", "danger");
        }
      }
    )
  }

  AddComment() {

  }


}
