import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl = environment.url + "/users";


  constructor( public http: HttpClient  ) { }

  // user login   对象 obj: {username , password  }
  login(obj) {
   console.log ('login data =', obj);   
   return this.http.post( `${this.baseUrl}/login` , obj );
  } 

  //user register
  register(obj : any ) {
    console.log ('register data =', obj);  
    return this.http.post( `${this.baseUrl}/register` , obj );
  } 

  getAllUsers() {
    return this.http.get( this.baseUrl);
  }

  deleteSpcificUser(id) {
    let url = this.baseUrl + "/" + id
    return this.http.delete(url)
  }

  editSpecificUser(id, obj) {
    let url = this.baseUrl + "/" + id;
    return this.http.put(url, obj)
  }

}
