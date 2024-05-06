import { Post } from '../entities/posts.entity';
import { ID } from '../../common/database/entities/_base.entity';

export class CreatePostDto {
  title: Post['title'];
  description: Post['description'];
  image: Post['image'];
}
export class RemovePostDto {
  readonly id: ID;
}
