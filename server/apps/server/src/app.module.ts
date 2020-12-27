import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimesModule } from './animes/animes.module';
import { EpisodeModule } from './episode/episode.module';
import { DbModule } from '@libs/db';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AnimesModule, EpisodeModule,DbModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
