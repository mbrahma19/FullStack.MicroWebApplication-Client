import { Post } from "../post/post";

export class Tag {
  id: number;
  keyWord: string;
  posts: Array<Post>;
}
