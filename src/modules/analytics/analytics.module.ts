import { Module } from '@nestjs/common';

@Module({})
export class AnalyticsModule {
      constructor(){
        console.log("Analytics module called")
    }
}
