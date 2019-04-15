import {Component,  OnInit} from '@angular/core';


// @ts-ignore
import { ROUTER_DIRECTIVES } from '@angular/router';


import {userService } from './userService'




import { User } from './user';

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


 errorMessage: string;

  constructor(public userService: userService) {


  }



  ngOnInit() {

  }


  user: User = {

    title:'Please Register',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''


};



   register(){

    if (!this.user) { return; }
    console.log(this.user.firstName.toString())
    this.userService.register(this.user)
      .subscribe(
        user => this.user,
        error => this.errorMessage = <any>error);
  }






}
