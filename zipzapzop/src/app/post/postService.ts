import {Injectable}   from '@angular/core';

import {Http, Response} from "@angular/http";

import { Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import { throwError } from 'rxjs';




import {Router, RouterModule, Routes} from '@angular/router';







import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { Post } from './post';
import {map} from "rxjs/operators";

@Injectable()
export class postService {

  private userUrl = 'http://localhost:8090/posts';



  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  getPosts(): Observable<Post[]> {
    return this.http.get(this.userUrl)
      .map((response: Response) => <Post[]>response.json())
      .catch(this.handleError);

  }






  WritePost(post: Post) {


    let body = JSON.stringify( post );
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log(body.toString());

    return this.http.post(this.userUrl, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }




  getmyPosts(query): Observable<any> {
    return this.http.get(this.userUrl)

    //   .pipe(
    //   map(this.extractData)
    // );
  }




  extractData(res: Response) {
    let body = res.json();
    //let body = res.toString();
    //
    //("Access-Control-Allow-Origin", "*");



    let headers = new Headers({ 'Access-Control-Allow-Origin': "*" });
     return body.data || {};
    console.log (body.toString());

    //return  body.toString();


  }

  handleError(error: Response) {
    console.error(error);
    return throwError(error.toString() || error);


    // Observable.throw(error.json().error || 'Server Error');
  }









}
