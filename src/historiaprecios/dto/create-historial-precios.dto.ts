import { IsInt, IsDecimal, IsDate } from 'class-validator';

export class CreateHistorialPreciosDto {
  @IsInt()
  ID_Elemento: number;

  @IsDecimal({ decimal_digits: '2' })
  Precio: number;

  @IsDate()
  Fecha_Cambio: Date;
}
