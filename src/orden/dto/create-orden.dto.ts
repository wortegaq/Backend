import { IsInt, IsDecimal, IsDate, IsNotEmpty } from 'class-validator';

export class CreateOrdenDto {
  @IsInt()
  @IsNotEmpty()
  ID_Usuario: number;

  @IsDate()
  Fecha_Orden: Date;

  @IsDecimal()
  Total: number;

  @IsInt()
  @IsNotEmpty()
  ID_Estado_Orden: number;

  @IsInt()
  Eliminado?: number;
}

