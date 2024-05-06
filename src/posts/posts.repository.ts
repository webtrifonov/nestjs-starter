import { Repository } from 'typeorm';
import { CustomRepository } from '@app/typeorm';
import { Post } from './entities/posts.entity';
import { CreatePostData } from './dto/posts.dto';

@CustomRepository(Post)
export class PostsRepository extends Repository<Post> {
  async getPosts() {
    return this.find();
  }

  async getPostById(id: number) {
    return this.findOneBy({ id });
  }

  async createPost(data: CreatePostData) {
    const { title, description, image } = data;
    const newPost = new Post();
    newPost.title = title;
    newPost.description = description;
    newPost.image = `http://localhost:5000/public/uploads/${image.filename}`;
    await this.save(newPost);
    return newPost;
  }
}
