import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post';
import { postService } from '../post/postService';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user/user';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post : Post = new Post();
  id : Number;

  constructor(private service : postService, private router : Router, private route: ActivatedRoute)  { 
    //whatever the id of the post, set it to this id
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    //when it create the component, whatever is in the body. that's what it does, which is get post
    //when you get the post, i want you to assign it to post
    this.service.getPost(this.id).subscribe(data => this.post = data);
  }
  submit(){
    let user = new User();
    console.log(this.post);
    this.service.updatePost(this.post).subscribe(x => this.router.navigate(['/posts/' + this.id]));
  }

}

