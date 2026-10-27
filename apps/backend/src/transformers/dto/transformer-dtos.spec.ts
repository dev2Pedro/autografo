import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateTransformerDto } from './create-transformer.dto';
import { UpdateTransformerDto } from './update-transformer.dto';

const valid = {
  name: 'Transformador 500 kVA',
  powerKva: 500,
  primaryVoltage: 13800,
  secondaryVoltage: 380,
  phases: 'TRI',
};

async function errorFields<T extends object>(
  type: new () => T,
  body: Record<string, unknown>,
): Promise<string[]> {
  const errors = await validate(plainToInstance(type, body), {
    whitelist: true,
    forbidNonWhitelisted: true,
  });
  return errors.map((error) => error.property);
}

describe('CreateTransformerDto', () => {
  it('aceita campos opcionais omitidos', async () => {
    expect(await errorFields(CreateTransformerDto, valid)).toEqual([]);
  });

  it.each(['hasTank', 'hasConservator'])(
    'rejeita null em %s (coluna não-nula no banco)',
    async (field) => {
      expect(
        await errorFields(CreateTransformerDto, { ...valid, [field]: null }),
      ).toEqual([field]);
    },
  );

  it.each(['heightMm', 'widthMm', 'depthMm', 'bushingCount', 'radiatorCount'])(
    'aceita null em %s (coluna anulável no banco)',
    async (field) => {
      expect(
        await errorFields(CreateTransformerDto, { ...valid, [field]: null }),
      ).toEqual([]);
    },
  );
});

describe('UpdateTransformerDto', () => {
  it('aceita body vazio', async () => {
    expect(await errorFields(UpdateTransformerDto, {})).toEqual([]);
  });

  it.each(['hasTank', 'hasConservator'])(
    'rejeita null em %s (coluna não-nula no banco)',
    async (field) => {
      expect(
        await errorFields(UpdateTransformerDto, { [field]: null }),
      ).toEqual([field]);
    },
  );
});
