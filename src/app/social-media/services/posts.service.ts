import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }
  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(`${environment.urlApi}/posts`);
  }
  postComment(postCommented:{comment:string, postId:number}){
    console.log(postCommented);
  }
}
