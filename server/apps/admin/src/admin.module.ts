import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';
import { AnimesModule } from './animes/animes.module';
import { EpisodeModule } from './episode/episode.module';
import { MulterModule } from '@nestjs/platform-express';

const multer = require('multer');
const MAO = require('multer-aliyun-oss')

@Module({
  imports: [
    MulterModule.register({
      storage: MAO({
        config: {
            region: 'oss-cn-qingdao',
            accessKeyId: 'LTAI4GDJRbKi4tAj8FRKAtvq',
            accessKeySecret: '56npSzW1ep1GpR91afYjG9cstboEJu',
            bucket: 'gensokyo'
        }
       })
    }),
    DbModule,
    UsersModule,
    AnimesModule,
    EpisodeModule
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
