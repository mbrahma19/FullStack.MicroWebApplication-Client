
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { TagComponent } from './tag/tag.component';
import { FormsModule } from '@angular/forms';
import {userService} from "./user/userService";
import {postService} from "./post/postService";
import {User} from "./user/user";
import {Post} from "./post/post"
import {HttpModule} from "@angular/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import {ReactiveFormsModule} from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { TagService } from "./tag/tag.service";
import { Tag } from "./tag/tag";
import { HttpClientModule } from "@angular/common/http";

import { AppComponents, AppRoutes } from "./app.routing";
import { CreatePostComponent } from './create-post/create-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    TagComponent,
    CreatePostComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    HttpClientInMemoryWebApiModule,
    RouterModule,
     RouterModule.forRoot(AppRoutes)



  ],
  providers: [
    userService,
    User,
    postService,
    Post,
    TagService,
    Tag


  ],


  bootstrap: [AppComponent]
})
export class AppModule {}
