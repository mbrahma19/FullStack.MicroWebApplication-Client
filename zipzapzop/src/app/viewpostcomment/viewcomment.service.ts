import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tag} from "../tag/tag";

@Injectable({
  providedIn: 'root'
})
export class ViewcommentService {


  private commentUrl = "//localhost:8090/commentsByPostId";
  private singlecommenturl="//localhost:8090/comments"

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }



  getComments(id: number): any {
    const url = `${this.commentUrl}/${id}`;
    return this.http.get<any>(url);
  }

  getComment(id: number): Observable<any> {
    const url = `${this.singlecommenturl}/${id}`;
    return this.http.get<Comment>(url);
  }
}
