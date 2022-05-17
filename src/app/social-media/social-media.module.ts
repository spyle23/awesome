import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostsService } from './services/posts.service';
import { PostsResolver } from './resolvers/posts.resolver';
import { PostsComponent } from './component/posts/posts.component';
import { PostsItemComponent } from './component/posts-item/posts-item.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PostsComponent,
    PostsItemComponent
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule,
    SharedModule
  
  ],
  providers:[
    PostsService,
    PostsResolver
  ]
})
export class SocialMediaModule { }
