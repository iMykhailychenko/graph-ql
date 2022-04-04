import { Injectable } from '@angular/core';
import { PostsInterface } from './posts.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: PostsInterface[] = [];
  constructor(private readonly http: HttpClient) {}

  getList(): void {
    this.http.get<PostsInterface[]>('').subscribe((res) => {
      this.posts = res;
    });
  }
}
