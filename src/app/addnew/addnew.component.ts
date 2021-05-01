import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'mynews-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.scss']
})
export class AddnewComponent implements OnInit {
  @Output() verify_added = new EventEmitter<any>();
  title: any = null;
  content: any = null;
  isAddNewDialog = false;
  username = null;

  constructor(
    private newsService: NewsService,
  ) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('user');
    console.log("add new init", this.username)
  }

  transforInfo(){
    this.isAddNewDialog = true
  }

  add() {
    let obj = {
      title: this.title,
      content: this.content,
      owner: this.username
    }
    this.newsService.addNew(obj)
    .subscribe(
      data => {
        console.log("get all new info", data);
        let msg = data["msg"];
        let result = data["result"]
        if(msg == "success"){
          console.log("add news info", result);
          this.verify_added.emit(result);
          this.isAddNewDialog = false;
        } else {
          // this.alertsComponent.alertActions("Fail to get news!", "danger");
        }
      }
    )
  }

  cancel(){
    this.isAddNewDialog = false;
  }

}
