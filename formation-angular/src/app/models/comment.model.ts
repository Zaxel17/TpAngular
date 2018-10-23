import {Post} from './post.model';

export class Comment {

  id: number;
  body: string;
  postid: Post;

  constructor(id: number, body: string, postid: Post) {
    this.id = id;
    this.body = body;
    this.postid = postid;
  }


}
