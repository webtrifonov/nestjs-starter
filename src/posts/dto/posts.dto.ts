import { Post } from '../entities/posts.entity';
import { ID } from '../../common/database/entities/_base.entity';

export class CreatePostDto {
  title: Post['title'];
  description: Post['description'];
}
export interface CreatePostData extends CreatePostDto {
  image: Express.Multer.File;
}
export class RemovePostDto {
  readonly id: ID;
}
