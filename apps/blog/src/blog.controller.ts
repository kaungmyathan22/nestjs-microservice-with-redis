import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { BlogService } from './blog.service';

@Controller()
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @MessagePattern('getHello')
  getHello(name: string): string {
    return this.blogService.getHello(name);
  }
}
