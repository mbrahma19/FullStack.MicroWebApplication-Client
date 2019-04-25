import { Component, OnInit, Input } from "@angular/core";
import { postService } from "../post/postService";
import { Post } from "../post/post";
import { Tag } from "../tag/tag";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["../app.component.css", "./post-detail.component.css"]
})
export class PostDetailComponent implements OnInit {
  constructor(
    private postservice: postService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  @Input() post: Post;
  @Input() tags: Array<Tag>;
  ngOnInit() {
    this.getTagsOnThisPost(this.post.id);
  }
  getTagsOnThisPost(idNum: Number): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.postservice.getTagsForPost(idNum).subscribe(data => {
      this.tags = data;
    });
  }

  goToTagsPage(id: Number) {
    this.router.navigate(["/tags/" + id]);
  }
}
