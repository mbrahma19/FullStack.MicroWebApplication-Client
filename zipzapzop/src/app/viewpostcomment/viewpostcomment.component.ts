import {Component, Input, OnInit} from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";


import { ViewcommentService } from "./viewcomment.service";
import {ActivatedRoute, Router} from "@angular/router";

import { Viewcomment } from "./viewcomment";
import {TagService} from "../tag/tag.service";
import {Post} from "../post/post";


@Component({
  selector: 'app-viewpostcomment',
  templateUrl: './viewpostcomment.component.html',
  styleUrls: ['./viewpostcomment.component.css']
})
export class ViewpostcommentComponent implements OnInit {

  @Input() comments: Array<Comment>;



  constructor(
    private viewcommentService: ViewcommentService,
    private route: ActivatedRoute,
    private route1: Router,
  ) { }

  ngOnInit() {

    this.getComments();

  }


  viewcomment: Viewcomment = {

    id: 0,

    body: "",

    creationDate: null

  };


  getComments(): void {

     const id = +this.route.snapshot.paramMap.get("id");
    this.viewcommentService
      .getComments(id)
      .subscribe((comments: Comment[]) => (this.comments = comments));
  }



  btnClick= function () {
    this.route1.navigateByUrl('comments/'+this.viewcomment.id);
  };


  btnClickCreate= function () {
    this.route1.navigateByUrl('/createcomment');
  };


}





