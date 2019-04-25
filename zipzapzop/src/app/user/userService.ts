import { Injectable } from "@angular/core";

import { Http, Response } from "@angular/http";

import { Headers, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Observable";

import { Router, RouterModule, Routes } from "@angular/router";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { User } from "./user";

@Injectable()
export class userService {
  private userUrl = "http://localhost:8090/registration";

  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  getProducts(): Observable<User[]> {
    return this.http
      .get(this.userUrl)
      .map((response: Response) => <User[]>response.json())
      .catch(this.handleError);
  }

  register(user: User) {
    let body = JSON.stringify(user);
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });

    console.log(body.toString());

    return this.http
      .post(this.userUrl, body, options)
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
