import { IsString, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateDireccionDto {
  @IsInt()
  @IsNotEmpty()
  ID_Usuario: number;

  @IsString()
  @IsNotEmpty()
  Calle: string;

  @IsString()
  @IsNotEmpty()
  Ciudad: string;

  @IsString()
  @IsNotEmpty()
  Codigo_Postal: string;

  @IsString()
  @IsNotEmpty()
  Pais: string;
}
