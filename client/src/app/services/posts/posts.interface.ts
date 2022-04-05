export interface PostsInterface {
  _id: string;
  title: string;
  description: string;
  image: string;
}

export interface PostsListResultInterface {
  posts: PostsInterface[];
}

export interface PostItemResultInterface {
  post: PostsInterface;
}
