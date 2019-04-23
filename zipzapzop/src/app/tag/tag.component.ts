import { Component, OnInit } from "@angular/core";
import { TagService } from "./tag.service";

@Component({
  selector: "app-tag",
  templateUrl: "./tag.component.html",
  styleUrls: ["../app.component.css",
"./tag.component.css"]
})
export class TagComponent implements OnInit {
  tags: Array<any>;

  constructor(private tagService: TagService) {}

  ngOnInit() {
    this.tagService.getTags().subscribe(data => {
      this.tags = data;
    });
  }
}
