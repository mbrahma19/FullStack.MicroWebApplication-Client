import { Component, OnInit, Input } from "@angular/core";
import { Tag } from "../tag/tag";
import { ActivatedRoute } from "@angular/router";
import { TagService } from "../tag/tag.service";
import { Location } from "@angular/common";
import { Post } from "../post/post";

@Component({
  selector: "app-tag-detail",
  templateUrl: "./tag-detail.component.html",
  styleUrls: ["../app.component.css"]
})
export class TagDetailComponent implements OnInit {
  @Input() tag: Tag;
  @Input() posts: Array<Post>;
  constructor(
    private route: ActivatedRoute,
    private tagService: TagService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getTag();
    this.getPosts();
  }

  goBack(): void {
    this.location.back();
  }

  getTag(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.tagService.getTag(id).subscribe(tag => (this.tag = tag));
  }

  getPosts(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.tagService
      .getPosts(id)
      .subscribe((posts: Post[]) => (this.posts = posts));
  }
}
