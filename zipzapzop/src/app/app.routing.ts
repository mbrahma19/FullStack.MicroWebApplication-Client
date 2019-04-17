import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { PostComponent } from "./post/post.component";
import { CommentComponent } from "./comment/comment.component";
import { TagComponent } from "./tag/tag.component";
import { RouterModule, Routes } from "@angular/router";

export const AppRoutes: Routes = [
  { path: "app", component: AppComponent },

  { path: "user", component: UserComponent },

  { path: "posts", component: PostComponent },

  { path: "tags", component: TagComponent }
];

export const AppComponents: any = [AppComponent, UserComponent, PostComponent];
