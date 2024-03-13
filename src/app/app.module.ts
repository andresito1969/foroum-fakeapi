import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { PostsComponent } from './posts/posts.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostItemComponent } from './posts/post-list/post-item/post-item.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostCommentComponent } from './posts/post-detail/post-comment/post-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavheaderComponent,
    PostsComponent,
    PostListComponent,
    PostItemComponent,
    PostDetailComponent,
    PostCommentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
