import { Component, OnInit } from "@angular/core";
import { Post } from '../post/post';
import { postService } from '../post/postService';
import { User } from '../user/user';
import { Router } from '@angular/router';

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["../app.component.css"]
})
export class CreatePostComponent implements OnInit {
  post : Post = new Post();

  constructor(private service : postService, private router : Router) {

  }

  ngOnInit() {}

  submit(){

    let user = new User();
  
    console.log(this.post);

    this.service.WritePost(this.post).subscribe(x => this.router.navigate(['/posts']));
  }
}
