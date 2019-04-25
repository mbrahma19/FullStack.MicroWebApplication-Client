import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { PostComponent } from "./post/post.component";
import { CommentComponent } from "./comment/comment.component";
import { TagComponent } from "./tag/tag.component";
import { RouterModule, Routes } from "@angular/router";
import { TagDetailComponent } from "./tag-detail/tag-detail.component";
import { CreatePostComponent } from "./create-post/create-post.component";
import { TagSelectionComponent } from "./tag-selection/tag-selection.component";
import { SinglePostComponent } from "./single-post/single-post.component";
import { ViewpostcommentComponent } from "./viewpostcomment/viewpostcomment.component";
import { EditcommentComponent } from "./editcomment/editcomment.component";
import { CreatecommentComponent } from "./createcomment/createcomment.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const AppRoutes: Routes = [
  { path: "app", component: AppComponent },

  { path: "user", component: UserComponent },

  { path: "posts", component: PostComponent },

  { path: "tags", component: TagComponent },

  { path: "tags/:id", component: TagDetailComponent },

  { path: "createPost", component: CreatePostComponent },

  { path: "posts/tags/:id", component: TagSelectionComponent },

  { path: "posts/:id", component: SinglePostComponent },

  { path: "posts/:id", component: ViewpostcommentComponent },

  { path: "posts/:id", component:CreatecommentComponent },

  { path: "comments", component: ViewpostcommentComponent },

  { path: "createcomment", component: CreatecommentComponent },

  { path: "comments/:id", component: EditcommentComponent },

  { path: "posts/:id/edit", component: EditPostComponent },

  { path: "home", component: HomePageComponent},

  { path: "about", component: AboutUsComponent}
];

export const AppComponents: any = [
  AppComponent,
  UserComponent,
  PostComponent,
  CreatePostComponent,
  SinglePostComponent,
  ViewpostcommentComponent,
  EditcommentComponent,
  CreatecommentComponent,
  EditPostComponent
];
