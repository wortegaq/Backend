import { IsString, MaxLength, IsNotEmpty } from 'class-validator';

export class CreateCategoriaDto {
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  Nombre: string;

  @IsString()
  Descripcion: string;
}
