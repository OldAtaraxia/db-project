import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';
import { AnimesModule } from './animes/animes.module';
import { EpisodeModule } from './episode/episode.module';

@Module({
  imports: [
    DbModule,
    UsersModule,
    AnimesModule,
    EpisodeModule
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
