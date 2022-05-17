import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentComponent } from './components/comment/comment.component';
import { MatModule } from './mat.module';
import { ReactiveFormsModule } from '@angular/forms';
import { shortenPipe } from './pipe/shorten.pipe';
import { UserPipe } from './pipe/user.pipe';
import { HighlightDirective } from './directives/highlight.directive';




@NgModule({
  declarations: [
    CommentComponent,
    shortenPipe,
    UserPipe,
    HighlightDirective,
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
    UserPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
