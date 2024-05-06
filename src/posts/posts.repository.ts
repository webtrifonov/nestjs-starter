import { Repository } from 'typeorm';
import { CustomRepository } from '@app/typeorm';
import { Post } from './entities/posts.entity';
import { CreatePostDto } from './dto/posts.dto';

@CustomRepository(Post)
export class PostsRepository extends Repository<Post> {
  async getPosts() {
    return this.find();
  }

  async getPostById(id: number) {
    return this.findOneBy({ id });
  }

  async createPost(data: CreatePostDto) {
    console.log(`>>> data = `, data);
    const { title, description } = data;
    const newPost = new Post();
    newPost.title = title;
    newPost.description = description;
    newPost.image = null;
    await this.save(newPost);
    return newPost;
  }
}
