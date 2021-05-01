import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl = environment.url + "/news";

  constructor(
    public http: HttpClient
  ) { }

  getAllNews() {  
    return this.http.get(this.baseUrl);
  } 

  addNew(obj) {
    return this.http.post(this.baseUrl , obj );
  }

  getSpecificNew(id) {
    let url = this.baseUrl + "/" + id;
    return this.http.get(url);
  }

  deleteSpecificNew(id) {
    let url = this.baseUrl + "/" + id;
    return this.http.delete(url);
  }

  editSpecificNew(id, obj) {
    let url = this.baseUrl + "/" + id;
    return this.http.put(url, obj)
  }

}
