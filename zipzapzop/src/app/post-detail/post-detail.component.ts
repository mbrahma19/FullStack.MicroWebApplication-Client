import { Component, OnInit, Input } from "@angular/core";
import { postService } from "../post/postService";
import { Post } from "../post/post";
import { Tag } from "../tag/tag";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["../app.component.css", "./post-detail.component.css"]
})
export class PostDetailComponent implements OnInit {
  constructor(
    private postservice: postService,
    private route: ActivatedRoute
  ) {}

  @Input() post: Post;
  @Input() tags: Array<Tag>;
  ngOnInit() {
    this.getTagsOnThisPost();
  }
  getTagsOnThisPost(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.postservice.getTagsForPost(id).subscribe(data => {
      this.tags = data;
    });
  }
}
