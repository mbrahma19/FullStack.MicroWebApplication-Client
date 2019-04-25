import { Component, OnInit } from "@angular/core";

// @ts-ignore
import { Router, ROUTER_DIRECTIVES } from "@angular/router";

import { userService } from "./userService";

import { User } from "./user";


@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["../app.component.css"]
})
export class UserComponent implements OnInit {
  errorMessage: string;

  constructor(public userService: userService,  private router: Router) {}

  ngOnInit() {}

  user: User = {
    title: "Please Fill in the Below Information",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    // id: 0 
  };

  register() {
    if (!this.user) {
      return;
    }

    console.log(this.user.firstName.toString());

    this.userService
      .register(this.user)

      .subscribe(user => {
        this.user, error => (this.errorMessage = <any>error);
        
      });
      this.router.navigate(['/posts']);
  }

}
