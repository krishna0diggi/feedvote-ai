import { Module } from '@nestjs/common';

@Module({})
export class CommentsModule {
      constructor(){
        console.log("Comment module called")
    }
}
