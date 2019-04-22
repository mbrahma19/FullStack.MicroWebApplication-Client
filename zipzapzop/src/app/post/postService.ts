import {Injectable}   from '@angular/core';
import {Http, Response} from "@angular/http";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Post } from './post';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
 };

@Injectable()
export class postService {

  private userUrl = 'http://localhost:8090/posts';

  private http: Http;
  private httpClient: HttpClient;

  constructor(http: Http, httpClient: HttpClient) {
    this.http = http;
    this.httpClient = httpClient;
  }

  getPosts(): Observable<Post[]> {
    return this.http.get(this.userUrl)
      .map((response: Response) => <Post[]>response.json())
      .catch(this.handleError);

  }

  getSinglePost(id: number): Observable<any>{
    const url = `${this.userUrl}/${id}`;
    return this.httpClient.get<Post>(url);
  }

  getPost(id:Number): Observable<Post> {
    return this.http.get(this.userUrl + "/" + id)
      .map((response: Response) => <Post>response.json())
      .catch(this.handleError);

  }
  updatePost(post: Post) {


    let body = JSON.stringify( post );
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log(body.toString());

    return this.http.put(this.userUrl, body, options);
  }

  WritePost(post: Post) {
    let body = JSON.stringify( post );
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log(body.toString());

    return this.http.post(this.userUrl, body, options);
      // .map(this.extractData)
      // .catch(this.handleError);
  }

  getmyPosts(): Observable<any> {
    return this.http.get(this.userUrl)
  }

  extractData(res: Response) {
    let body = res.json();
    let headers = new Headers({ 'Access-Control-Allow-Origin': "*" });
     return body.data || {};
    console.log (body.toString());
  }

  handleError(error: Response) {
    console.error(error);
    return throwError(error.toString() || error);
  }

}
