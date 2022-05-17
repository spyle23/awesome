import { Comment } from 'src/app/core/models/comment.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {
  animate,
  query,
  state,
  style,
  group,
  transition,
  trigger,
  sequence,
  stagger,
  animateChild,
  useAnimation,
} from '@angular/animations';
import { FlashAnimation } from '../../animations/flash.animation';
import { SlideFadeAnimation } from '../../animations/slide-fade.animation';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  animations: [
    trigger('list', [
      transition(':enter', [
        query('@listItem',[
          stagger(100, [
            animateChild()
          ])
        ])
      ])
    ]),
    trigger('listItem', [
      state(
        'default',
        style({
          transform: 'scale(1)',
          'background-color': 'white',
          'z-index': 1,
        })
      ),
      state(
        'active',
        style({
          transform: 'scale(1.05)',
          'background-color': 'rgb(201, 157, 242)',
        })
      ),
      transition('default => active', [animate('100ms ease-in-out')]),
      transition('active => default', [animate('500ms ease-in-out')]),
      transition('void => *', [
        query('.comment-text, .comment-date', [
          style({
            opacity:0
          })
        ]),
        useAnimation(SlideFadeAnimation),
        group([
          useAnimation(FlashAnimation, {
            params:{
              time:'250ms',
              flashColor:'rgb(249,179,111)'
            }
          }),
          query('.comment-text', [
            animate('250ms', style({
              opacity:1
            }))
          ]),
          query('.comment-date', [
            animate('500ms', style({
              opacity:1
            }))
          ])
        ])
      ]),
    ]),

  ],
})
export class CommentComponent implements OnInit {
  @Input() comments!: Comment[];
  commentCtrl!: FormControl;
  @Output() newComment = new EventEmitter<string>();
  animationState: { [key: number]: 'default' | 'active' } = {};
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.commentCtrl = this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(10),
    ]);
    for (const index in this.animationState) {
      this.animationState[index] = 'default';
    }
  }
  onLeaveComment() {
    if (this.commentCtrl.invalid) {
      return;
    }
    const maxId = Math.max(...this.comments.map((comment) => comment.id));
    this.comments.unshift({
      id: maxId + 1,
      comment: this.commentCtrl.value,
      createdDate: new Date().toISOString(),
      userId: 1,
    });
    this.newComment.emit(this.commentCtrl.value);
    this.commentCtrl.reset();
  }

  onMouseEnter(index: number) {
    this.animationState[index] = 'active';
  }
  onMouseLeave(index: number) {
    this.animationState[index] = 'default';
  }
}
