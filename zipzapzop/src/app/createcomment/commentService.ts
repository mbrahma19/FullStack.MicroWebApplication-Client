import {Injectable}   from '@angular/core';

import {Http, Response} from "@angular/http";

import { Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import { throwError } from 'rxjs';




import {Router, RouterModule, Routes} from '@angular/router';







import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { Comment } from './comment';
import {map} from "rxjs/operators";
import {User} from "../user/user";
import {Tag} from "../tag/tag";

@Injectable()
export class commentService {

  private commentUrl = 'http://localhost:8090/commentMyPost';



  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }


  submitComment(comment: Comment, id: number) {
    let body = JSON.stringify(comment);


    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });

    console.log(body.toString());
    const newUrl= `${this.commentUrl}/${id}`;
    return this.http
      .post(newUrl, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    // let body = res.json();
    let body = res.toString();

    let headers = new Headers({ "Access-Control-Allow-Origin": "*" });
    // return body.data || {};
    console.log(body.toString());

    return body.toString();
  }

  private handleError(error: Response) {
    console.error(error);

    return Observable.throw(error.json().error || 'Server Error');
  }











}
