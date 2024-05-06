import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostsRepository } from './posts.repository';
import { CreatePostDto } from './dto/posts.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsRepository)
    private readonly postsRepo: PostsRepository
  ) {}
  async createPost(createPostDto: CreatePostDto, image: Express.Multer.File) {
    return this.postsRepo.createPost({ ...createPostDto, image });
  }
  async getPosts() {
    return this.postsRepo.getPosts();
  }
}
