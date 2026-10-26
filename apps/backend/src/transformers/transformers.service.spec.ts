import { Test, TestingModule } from '@nestjs/testing';
import { TransformersService } from './transformers.service';
import { PrismaService } from '../prisma/prisma.service';

describe('TransformersService', () => {
  let service: TransformersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransformersService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    service = module.get<TransformersService>(TransformersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
