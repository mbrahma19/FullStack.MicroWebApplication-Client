import { Component, OnInit } from "@angular/core";
import { TagService } from "../tag/tag.service";

@Component({
  selector: "app-tag-selection",
  templateUrl: "./tag-selection.component.html",
  styleUrls: ["./tag-selection.component.css"]
})
export class TagSelectionComponent implements OnInit {
  tags: Array<any>;
  constructor(private tagService: TagService) {}

  ngOnInit() {
    this.tagService.getTags().subscribe(data => {
      this.tags = data;
    });
  }

  addTagToPostOnClick(tagId: number, postId: number) {
    console.log("here");
    this.tagService.addTagsToPost(tagId, postId);
  }
}
