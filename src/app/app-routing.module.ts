import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { Error404Component } from './error404/error404.component';

const appRoutes: Routes = [{
  path: '',
  component: PostsComponent
}, {
  path: 'posts/:id',
  component: PostDetailComponent
}, {
  path: 'error404',
  component: Error404Component
}, {
  path: '**',
  redirectTo: 'error404'
}]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
