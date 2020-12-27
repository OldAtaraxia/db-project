import { Module } from '@nestjs/common';
import { AnimesController } from './animes.controller';

@Module({
  controllers: [AnimesController]
})
export class AnimesModule {}
