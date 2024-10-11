import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePromocionDto {
  @IsString()
  @IsNotEmpty()
  Nombre: string;

  @IsString()
  @IsNotEmpty()
  Descripcion: string;

  @IsNumber()
  @IsNotEmpty()
  Descuento: number;

  @Type(() => Date)  // Transformar a tipo Date
  @IsDate()
  @IsNotEmpty()
  Fecha_Inicio: Date;

  @Type(() => Date)  // Transformar a tipo Date
  @IsDate()
  @IsNotEmpty()
  Fecha_Fin: Date;

  @IsNumber()
  @IsNotEmpty()
  Aplicable_a: number;
}

