import {Injectable, Input} from '@angular/core';

import {Http, Response} from "@angular/http";

import { Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import { throwError } from 'rxjs';




import {Router, RouterModule, Routes} from '@angular/router';







import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



import {map} from "rxjs/operators";
import {User} from "../user/user";
import {Tag} from "../tag/tag";
import {Viewcomment} from "../viewpostcomment/viewcomment";

@Injectable()
export class EditcommentService {
 // @Input() comment: Viewcomment;

  private editcommentUrl = 'http://localhost:8090/comment';
  private deletecommenturl="//localhost:8090/deletecomment";


  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }


  submitComment(comment: Viewcomment, id: number) {
    let body = JSON.stringify(comment);


    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });

    console.log(body.toString());
    const newUrl= `${this.editcommentUrl}/${id}`;
    return this.http
      .put(newUrl, body, options)
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

  deleteComment(id: number) {

    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });
 
    const newUrl= `${this.deletecommenturl}/${id}`;
    return this.http
      .delete(newUrl, options)
      .map(this.extractData)
      .catch(this.handleError);
  }




}
