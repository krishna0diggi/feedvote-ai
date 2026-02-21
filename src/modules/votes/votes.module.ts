import { Module } from '@nestjs/common';

@Module({})
export class VotesModule {
      constructor(){
        console.log("Votes module called")
    }
}
