import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../post/post';
import {postService} from '../post/postService'
import {Location} from '@angular/common'
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['../app.component.css']
})
export class SinglePostComponent implements OnInit {
  
  constructor(
    private postservice : postService, 
    private route: ActivatedRoute,
    private location: Location) { }

  @Input() post: Post;

  ngOnInit() {
    this.getPost();
  }

  goBack(){
    this.location.back();
  }

  getPost() : void{
    const id = +this.route.snapshot.paramMap.get("id");
    this.postservice.getSinglePost(id).subscribe(data => {
      this.post = data;
    });
  }
}
