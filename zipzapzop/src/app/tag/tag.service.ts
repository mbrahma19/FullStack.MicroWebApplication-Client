import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Tag } from "./tag";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class TagService {
  private tagsUrl = "//localhost:8090/tags";

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
}
