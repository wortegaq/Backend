import { IsNotEmpty, IsEnum, IsString, IsDate, IsBoolean } from 'class-validator';

export class CreateBitacoraDto {
  @IsNotEmpty()
  ID_Usuario: number;

  @IsDate()
  Fecha: Date;

  @IsEnum(['Insertar', 'Actualizar', 'Eliminar'])
  Accion: string;

  @IsString()
  Descripcion: string;

  @IsBoolean()
  Eliminado: boolean;
}

