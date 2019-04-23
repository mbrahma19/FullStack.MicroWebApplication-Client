import { Component, OnInit, Input } from '@angular/core';
import { postService } from '../post/postService';
import { Post } from '../post/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['../app.component.css', './post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(private postservice : postService) { }
  @Input() post: Post;
  
  ngOnInit() {
  }

}
