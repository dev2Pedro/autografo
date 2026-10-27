import { Test, TestingModule } from '@nestjs/testing';
import { TransformersController } from './transformers.controller';
import { TransformersService } from './transformers.service';
import { PrismaService } from '../prisma/prisma.service';

describe('TransformersController', () => {
  let controller: TransformersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransformersController],
      providers: [
        TransformersService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    controller = module.get<TransformersController>(TransformersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
