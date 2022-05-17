import { Comment } from "src/app/core/models/comment.model";
import { Component ,Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comments!: Comment[];
  commentCtrl!:FormControl;
  @Output() newComment = new EventEmitter<string>();
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.commentCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(10)]);
  }
  onLeaveComment(){
    this.newComment.emit(this.commentCtrl.value);
    this.commentCtrl.reset();
  }

}
