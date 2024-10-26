import { IsString, IsNotEmpty, IsNumber, IsInt, IsOptional, IsEnum } from 'class-validator';

export class CreateElementoDto {
  @IsString()
  @IsNotEmpty()
  Nombre: string;

  @IsString()
  @IsOptional()
  Descripcion?: string;

  @IsNumber()
  @IsNotEmpty()
  Precio: number;

  @IsInt()
  @IsNotEmpty()
  ID_Categoria: number;

  @IsEnum(['Disponible', 'No disponible', 'En Espera'])
  @IsOptional()
  Disponibilidad?: 'Disponible' | 'No disponible' | 'En Espera';
}
