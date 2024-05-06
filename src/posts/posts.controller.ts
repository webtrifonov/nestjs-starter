import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/posts.dto';
import LocalFilesInterceptor from '../common/interceptors/localFiles.interceptor';

@Controller('api/posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/')
  getPosts() {
    return this.postsService.getPosts();
  }

  @UseInterceptors(
    LocalFilesInterceptor({
      fieldName: 'image',
      path: '',
    })
  )
  @Post('/')
  createPost(@UploadedFile() image: Express.Multer.File, @Body() createPostDto: CreatePostDto) {
    return this.postsService.createPost(createPostDto, image);
  }
}
