import { Module } from '@nestjs/common';

@Module({})
export class PostsModule {
      constructor(){
        console.log("Post module called")
    }
}
