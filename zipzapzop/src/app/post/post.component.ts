import { Component, OnInit } from '@angular/core';

import { Post } from './post';

import {postService}  from './postService';
import {Router} from "@angular/router";
import {User} from "../user/user";
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})



export class PostComponent implements OnInit {


  constructor(public postService: postService) {


  }


  post: Post = {

    title1: 'Our Universal Blogs',
    title: '',
    body: '',
    createDate: '',
    tags: ''

  };

  private router: Router;
  errorMessage: string;
  posts: any[];
  searchQuery='';


  handleSuccess(res){


    this.posts=res.json();




    console.table(this.posts)


  }


getPosts(){




}




  ngOnInit() {


    return this.postService.getmyPosts(this.searchQuery)


      .subscribe(data => {
          this.handleSuccess(data);
          this.post.createDate = new Date().toLocaleDateString();

        }

      );




  }
}
