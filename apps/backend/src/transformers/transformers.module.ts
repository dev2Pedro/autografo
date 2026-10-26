import { Module } from '@nestjs/common';
import { TransformersService } from './transformers.service';
import { TransformersController } from './transformers.controller';

@Module({
  controllers: [TransformersController],
  providers: [TransformersService],
})
export class TransformersModule {}
