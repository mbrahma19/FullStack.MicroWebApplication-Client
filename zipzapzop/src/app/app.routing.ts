import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { PostComponent } from "./post/post.component";
import { CommentComponent } from "./comment/comment.component";
import { TagComponent } from "./tag/tag.component";
import { RouterModule, Routes } from "@angular/router";
import {CreatePostComponent} from "./create-post/create-post.component";


export const AppRoutes: Routes = [
  { path: "app", component: AppComponent },

  { path: "user", component: UserComponent },

  { path: "posts", component: PostComponent },

  { path: "tags", component: TagComponent },

  { path: "createPost", component: CreatePostComponent }
];

export const AppComponents: any = [AppComponent, UserComponent, PostComponent, CreatePostComponent];
