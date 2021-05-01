import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  baseUrl = environment.url + "/comments";

  constructor(
    public http: HttpClient
  ) { }

  getAllComments() {  
    return this.http.get(this.baseUrl);
  } 

  addNew(obj) {
    return this.http.post(this.baseUrl , obj );
  }

  getSpecificNew(id) {
    let url = this.baseUrl + "/" + id;
    return this.http.get(url);
  }

  getAllCommentsOfSpecificNew(newid){
    let url = environment.url + "/newcomments/" + newid;
    return this.http.get(url);
  }
}
