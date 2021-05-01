import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private http: HttpClient,
  ) { }

  private headersJson = new HttpHeaders({'Content-Type': 'application/json'});
  private headersForm = new HttpHeaders({'Content-Type': 'application/X-www-form-urlencoded'});

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  /**
   * get
   * @method get
   * @param {String} url
   * @private
   */
  public get(url:string):any{
      return this.http.get(url, {headers:this.headersForm})
      .toPromise()
      .then((res) =>{
          return res;
      })
      .catch(this.handleError);
  }

  /**
   * post json
   * @method postJson
   * @param {String} url
   * @param {any} data
   * @private
   */
  public postJson(url: string, data: any):any {
      return this.http.post(url,data, {headers:this.headersJson})
      .toPromise()
      .then((res) => {
        console.log("res",res)
          return res;
      })
      .catch(this.handleError);
    }
  }
