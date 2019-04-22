import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Tag } from "./tag";
import { Headers, RequestOptions } from "@angular/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class TagService {
  private tagsUrl = "//localhost:8090/tags";
  private addTagsUrl = "//localhost:8090/posts";
  private http: HttpClient;

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
    // console.log(body.toString());
    // let headers = new Headers({ "Content-Type": "application/json" });
    // let options = new RequestOptions({ headers: headers });
    const url = `${this.addTagsUrl}/${postId}/tags/${tagId}`;
    console.log("finally here");
    console.log(url);
    return this.http.post(url, body);
  }
}
