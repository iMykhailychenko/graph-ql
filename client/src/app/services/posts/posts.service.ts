import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { postItemQuery, postsListQuery } from '../../queries/posts.query';

import {
  PostItemResultInterface,
  PostsInterface,
  PostsListResultInterface,
} from './posts.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  public postsError = '';
  public postsLoading = true;
  public posts: PostsInterface[] = [];

  public postError = '';
  public postLoading = true;
  public post: PostsInterface = {} as PostsInterface;

  constructor(private readonly apollo: Apollo) {}

  getList(): void {
    this.apollo
      .watchQuery<PostsListResultInterface>({ query: postsListQuery })
      .valueChanges.subscribe((results) => {
        this.postsLoading = false;

        if (results.error) {
          this.postsError = 'Something went wrong!';
        } else {
          this.posts = results.data.posts;
        }
      });
  }

  getPostItem(id: string): void {
    this.apollo
      .watchQuery<PostItemResultInterface>({
        query: postItemQuery,
        variables: { id },
      })
      .valueChanges.subscribe((results) => {
        this.postLoading = false;

        if (results.error) {
          this.postError = 'Something went wrong!';
        } else {
          this.post = results.data.post;
        }
      });
  }
}
