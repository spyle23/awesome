import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './component/posts/posts.component';
import { PostsResolver } from './resolvers/posts.resolver';

const routes: Routes = [
  {path:'', component:PostsComponent, resolve:{posts: PostsResolver }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialMediaRoutingModule { }
