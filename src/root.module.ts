import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { CommentsModule } from './modules/comments/comments.module';
import { VotesModule } from './modules/votes/votes.module';
import { UsersModule } from './modules/users/users.module';
import { BoardsModule } from './modules/boards/boards.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { PostsModule } from './modules/posts/posts.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDatabaseConfig } from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({ useFactory: getDatabaseConfig, inject: [ConfigService] }),
    AuthModule, CommentsModule, VotesModule, UsersModule, BoardsModule, AnalyticsModule, PostsModule,],
  controllers: [],
  providers: [],
})
export class RootModule { }
