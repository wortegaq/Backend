import { IsInt, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateFeedbackDto {
  @IsInt()
  @IsNotEmpty()
  ID_Usuario: number;

  @IsInt()
  @IsNotEmpty()
  ID_Elemento: number;

  @IsInt()
  @IsNotEmpty()
  Calificacion: number;

  @IsString()
  @IsNotEmpty()
  Comentario: string;

  @IsOptional()
  Fecha?: Date;
}
