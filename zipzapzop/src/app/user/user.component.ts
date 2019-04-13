import {Component, NgModule, OnInit} from '@angular/core';

// @ts-ignore
import { ROUTER_DIRECTIVES } from '@angular/router';


import {userService } from '../userService'




import { User } from '../user';
import {AppComponent} from "../app.component";
import {PostComponent} from "../post/post.component";
import {CommentComponent} from "../comment/comment.component";
import {TagComponent} from "../tag/tag.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

 User = new User();
 errorMessage: string;

  constructor(private userService: userService) {


  }

  ngOnInit() {
  }


  user: User = {

    title : 'User Registration',
    username: 'Username',
    password: 'password',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email'


};




   register(){

    if (!this.user) { return; }
    this.userService.register(this.user)
      .subscribe(
        user => this.user,
        error => this.errorMessage = <any>error);
  }






}
