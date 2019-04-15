import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

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
}
