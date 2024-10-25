import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class LoginDto {

  @IsNotEmpty()
  @IsString()
  Nombre: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
