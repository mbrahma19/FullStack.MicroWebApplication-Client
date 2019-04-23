import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post';
import { postService } from '../post/postService';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user/user';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ["../app.component.css"]
})
export class EditPostComponent implements OnInit {
  post : Post = new Post();
  id : Number;

  constructor(private service : postService, private router : Router, private route: ActivatedRoute)  { 
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.service.getPost(this.id).subscribe(data => this.post = data);
  }
  submit(){
    let user = new User();
    console.log(this.post);
    this.service.updatePost(this.post).subscribe(x => this.router.navigate(['/posts/' + this.id]));
  }

}

