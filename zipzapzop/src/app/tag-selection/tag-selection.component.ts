import { Component, OnInit } from "@angular/core";
import { TagService } from "../tag/tag.service";
import { ActivatedRoute } from "@angular/router";
import { Post } from "../post/post";

@Component({
  selector: "app-tag-selection",
  templateUrl: "./tag-selection.component.html",
  styleUrls: ["../app.component.css"]
})
export class TagSelectionComponent implements OnInit {
  tags: Array<any>;
  posts: Post[];

  constructor(private tagService: TagService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.tagService.getTags().subscribe(data => {
      this.tags = data;
      this.posts = [];
    });
  }

  onChange(tagId: number) {
    let isChecked: boolean = false;

    this.tagService.getPosts(tagId).subscribe(data => {
      this.posts = data;

      const postId = +this.route.snapshot.paramMap.get("id");
      for (let i = 0; i < this.posts.length; i++) {
        if (this.posts[i].id === postId) {
          isChecked = true;
        }
      }
      if (isChecked == false) {
        this.addTagToPostOnClick(tagId, postId);
      } else {
        this.removeTagFromPostOnClick(tagId, postId);
      }
    });
  }

  addTagToPostOnClick(tagId: number, postId: number) {
    this.tagService
      .addTagsToPost(tagId, postId)
      .subscribe(data => console.log(data));
  }

  removeTagFromPostOnClick(tagId: number, postId: number) {
    this.tagService
      .removeTagFromPost(tagId, postId)
      .subscribe(data => console.log(data));
  }
}
