import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'mynews-editnew',
  templateUrl: './editnew.component.html',
  styleUrls: ['./editnew.component.scss']
})
export class EditnewComponent implements OnInit {
  @Output() verify_edited = new EventEmitter<any>();
  isEditNewDialog = false;
  title = null;
  content = null;
  newid = null;
  
  constructor(
    private newsService: NewsService,
  ) { }

  ngOnInit(): void {
  }

  transforInfo(obj){
    console.log("transforInfo edit new", obj)
    this.title = obj.title;
    this.content = obj.content;
    this.newid = obj._id;
    this.isEditNewDialog = true;
  }

  edit() {
    let obj = {
      title: this.title,
      content: this.content
    }
    this.newsService.editSpecificNew(this.newid , obj)
    .subscribe(
      data => {
        console.log("edit new info", data);
        let msg = data["msg"];
        let result = data["result"]
        if(msg == "success"){
          console.log("add news info", result);
          this.verify_edited.emit(result);
        } else {
          // this.alertsComponent.alertActions("Fail to get news!", "danger");
        }
      }
    )

    this.isEditNewDialog = false;
  }

  cancel() {
    this.isEditNewDialog = false;
  }

}
