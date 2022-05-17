import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Post } from '../../models/post.model';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postListes$!:Observable<Post[]>;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.postListes$ = this.route.data.pipe(
      map(data=>data['posts'])
    );
  }

}
