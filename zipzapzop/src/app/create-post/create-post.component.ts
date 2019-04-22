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
    //change it to logged in user
    let user = new User();
    // user.id = 1;
    //this.post.user = user;
    console.log(this.post);

    //send the post to the BE server
    //telling the service to tell the server to create the post
    this.service.WritePost(this.post).subscribe(x => this.router.navigate(['/posts']));
  }
}
