import { TransformerPhase } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

const MAX_POWER_KVA = 1_000_000;
const MAX_VOLTAGE = 1_000_000;
const MAX_DIMENSION_MM = 100_000;
const MAX_BUSHING_OR_RADIATOR = 100;

export class CreateTransformerDto {
  @IsString({ message: 'O nome deve ser um texto' })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @MaxLength(150, { message: 'O nome deve ter no máximo 150 caracteres' })
  name: string;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'A potência deve ser um número com no máximo 2 casas decimais' },
  )
  @IsPositive({ message: 'A potência deve ser maior que zero' })
  @Max(MAX_POWER_KVA, { message: 'A potência deve ser no máximo 1.000.000 kVA' })
  powerKva: number;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message:
        'A tensão primária deve ser um número com no máximo 2 casas decimais',
    },
  )
  @IsPositive({ message: 'A tensão primária deve ser maior que zero' })
  @Max(MAX_VOLTAGE, {
    message: 'A tensão primária deve ser no máximo 1.000.000 V',
  })
  primaryVoltage: number;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message:
        'A tensão secundária deve ser um número com no máximo 2 casas decimais',
    },
  )
  @IsPositive({ message: 'A tensão secundária deve ser maior que zero' })
  @Max(MAX_VOLTAGE, {
    message: 'A tensão secundária deve ser no máximo 1.000.000 V',
  })
  secondaryVoltage: number;

  @IsEnum(TransformerPhase, {
    message: 'As fases devem ser um destes valores: MONO, TRI',
  })
  phases: TransformerPhase;

  @IsOptional()
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'A altura deve ser um número com no máximo 2 casas decimais' },
  )
  @IsPositive({ message: 'A altura deve ser maior que zero' })
  @Max(MAX_DIMENSION_MM, { message: 'A altura deve ser no máximo 100.000 mm' })
  heightMm?: number;

  @IsOptional()
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'A largura deve ser um número com no máximo 2 casas decimais' },
  )
  @IsPositive({ message: 'A largura deve ser maior que zero' })
  @Max(MAX_DIMENSION_MM, { message: 'A largura deve ser no máximo 100.000 mm' })
  widthMm?: number;

  @IsOptional()
  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message:
        'A profundidade deve ser um número com no máximo 2 casas decimais',
    },
  )
  @IsPositive({ message: 'A profundidade deve ser maior que zero' })
  @Max(MAX_DIMENSION_MM, {
    message: 'A profundidade deve ser no máximo 100.000 mm',
  })
  depthMm?: number;

  @IsOptional()
  @IsInt({ message: 'A quantidade de buchas deve ser um número inteiro' })
  @Min(0, { message: 'A quantidade de buchas não pode ser negativa' })
  @Max(MAX_BUSHING_OR_RADIATOR, {
    message: 'A quantidade de buchas deve ser no máximo 100',
  })
  bushingCount?: number;

  @IsOptional()
  @IsInt({ message: 'A quantidade de radiadores deve ser um número inteiro' })
  @Min(0, { message: 'A quantidade de radiadores não pode ser negativa' })
  @Max(MAX_BUSHING_OR_RADIATOR, {
    message: 'A quantidade de radiadores deve ser no máximo 100',
  })
  radiatorCount?: number;

  @IsOptional()
  @IsBoolean({ message: 'O campo de tanque deve ser verdadeiro ou falso' })
  hasTank?: boolean;

  @IsOptional()
  @IsBoolean({
    message: 'O campo de conservador deve ser verdadeiro ou falso',
  })
  hasConservator?: boolean;
}
