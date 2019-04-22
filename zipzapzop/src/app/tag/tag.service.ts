import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Tag } from "./tag";
import { Headers, RequestOptions, Http, Response } from "@angular/http";
import { throwError } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class TagService {
  private tagsUrl = "http://localhost:8090/tags";
  private addTagsUrl = "http://localhost:8090/posts";
  private http: HttpClient;
  private http2: Http;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getTags(): Observable<any> {
    return this.http.get(this.tagsUrl); //.map(response => response.json());
  }

  getTag(id: number): Observable<any> {
    const url = `${this.tagsUrl}/${id}`;
    return this.http.get<Tag>(url);
  }

  getPosts(id: number): any {
    const url = `${this.tagsUrl}/${id}/posts`;
    return this.http.get<any>(url);
  }

  addTagsToPost(tagId: number, postId: number): Observable<any> {
    let body = JSON.stringify(this.getTag(tagId));
    console.log("also here");
    let headers = { "Content-Type": "application/json" };
    let options = { headers: headers };
    const url = `${this.addTagsUrl}/${postId}/tags/${tagId}`;
    console.log("finally here");
    console.log(url);
    return this.http.post<any>(url, "", options);
  }

  removeTagFromPost(tagId: number, postId: number): Observable<any> {
    let body = JSON.stringify(this.getTag(tagId));
    console.log("also here");
    let headers = { "Content-Type": "application/json" };
    let options = { headers: headers };
    const url = `${this.addTagsUrl}/${postId}/tags/${tagId}`;
    console.log("finally here");
    console.log(url);
    return this.http.delete<any>(url);
  }
}
