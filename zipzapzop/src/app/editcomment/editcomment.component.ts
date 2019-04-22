import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TagService} from "../tag/tag.service";
import {ViewcommentService} from "../viewpostcomment/viewcomment.service";
import {Viewcomment} from "../viewpostcomment/viewcomment";
import {EditcommentService} from "./editcommentService";


@Component({
  selector: 'app-editcomment',
  templateUrl: './editcomment.component.html',
  styleUrls: ['./editcomment.component.css']
})
export class EditcommentComponent implements OnInit {
  @Input() comment: Viewcomment;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private viewpostcommentService: ViewcommentService,
    private ediicommentService : EditcommentService
  ) { }

  ngOnInit()

   {

    this.getComment();
  }

  getComment(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.viewpostcommentService.getComment(id).subscribe(comment => (this.comment = comment));
  }


  submiteditedCommentonPost() {
    if (!this.comment) {
      return;
    }

    console.log(this.comment.body.toString());
    const id = +this.route.snapshot.paramMap.get("id");

    let commentbody= this.comment.body;

    this.ediicommentService.submitComment(this.comment,id)


      .subscribe(comment => this.comment, error => (this.errorMessage = <any>error));
  }

}
