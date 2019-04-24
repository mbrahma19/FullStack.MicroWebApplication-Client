import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../app.component.css']
})
export class FooterComponent implements OnInit {
  title = 'ZipZapZop Blog';
  constructor() { }

  ngOnInit() {
  }

}
