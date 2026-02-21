import { Module } from '@nestjs/common';

@Module({})
export class AuthModule {
    constructor(){
        console.log("Auth module called")
    }
}
