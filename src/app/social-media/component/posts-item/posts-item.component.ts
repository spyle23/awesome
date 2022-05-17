import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.scss']
})
export class PostsItemComponent implements OnInit {
  @Input() post!:Post;
  @Output() postCommented = new EventEmitter<{comment:string, postId:number }>();

  userTemp = {
    firstName: "Andriatiana",
    lastName: "Jean-Marie"
  }

  constructor() { }

  ngOnInit(): void {
  }
  onNewComment(comment: string){
    this.postCommented.emit({comment, postId:this.post.id});
  }

}
