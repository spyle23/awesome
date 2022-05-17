import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentComponent } from './components/comment/comment.component';
import { MatModule } from './mat.module';
import { ReactiveFormsModule } from '@angular/forms';
import { shortenPipe } from './pipe/shorten.pipe';
import { UserPipe } from './pipe/user.pipe';



@NgModule({
  declarations: [
    CommentComponent,
    shortenPipe,
    UserPipe
  ],
  imports: [
    CommonModule,
    MatModule,
    ReactiveFormsModule
  ],
  exports: [
    CommentComponent,
    MatModule,
    ReactiveFormsModule,
    shortenPipe,
    UserPipe
  ]
})
export class SharedModule { }
