import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateEstadoOrdenDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  Estado: string;
}
