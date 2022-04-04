import { Injectable } from '@angular/core';
import { PostsInterface } from './posts.interface';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  loading = true;
  posts: PostsInterface[] = [];

  constructor(private readonly apollo: Apollo) {}

  getList(): void {
    this.apollo
      .watchQuery({
        query: gql`
          query {
            posts {
              _id
              title
              image
              description
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        console.log(result);
      });
  }
}
