import { Component, OnInit } from "@angular/core";
import { TagService } from "../tag/tag.service";

@Component({
  selector: "app-tag-selection",
  templateUrl: "./tag-selection.component.html",
  styleUrls: ["../app.component.css"]
})
export class TagSelectionComponent implements OnInit {
  tags: Array<any>;
  constructor(private tagService: TagService) {}
  isChecked: boolean = false;
  ngOnInit() {
    this.tagService.getTags().subscribe(data => {
      this.tags = data;
    });
  }

  onChange(tagId: number, postId: number) {
    if (!this.isChecked) {
      this.addTagToPostOnClick(tagId, postId);
      console.log(this.isChecked);
    } else {
      this.removeTagFromPostOnClick(tagId, postId);
      console.log(this.isChecked);
    }
  }

  addTagToPostOnClick(tagId: number, postId: number) {
    this.tagService
      .addTagsToPost(tagId, postId)
      .subscribe(data => console.log(data));
    this.isChecked = true;
  }

  removeTagFromPostOnClick(tagId: number, postId: number) {
    this.tagService
      .removeTagFromPost(tagId, postId)
      .subscribe(data => console.log(data));
    this.isChecked = false;
  }
}
