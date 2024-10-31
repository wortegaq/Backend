import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';
import { UnauthorizedException } from '@nestjs/common';



@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuariosRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(createUsuarioDto.Contraseña, saltOrRounds);

    const newUsuario = this.usuariosRepository.create({
      ...createUsuarioDto,
      Contraseña: hashedPassword,
      Fecha_Registro: new Date(), // Asignar la fecha actual como timestamp
    });

    return this.usuariosRepository.save(newUsuario);
  }

  findAll() {
    return this.usuariosRepository.find();
  }

  findOne(id: number) {
    return this.usuariosRepository.findOne({ where: { ID_Usuario: id } });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    if (updateUsuarioDto.Contraseña) {
      const saltOrRounds = 10;
      updateUsuarioDto.Contraseña = await bcrypt.hash(updateUsuarioDto.Contraseña, saltOrRounds);
    }
    return this.usuariosRepository.update(id, updateUsuarioDto);
  }

  remove(id: number) {
    return this.usuariosRepository.delete(id);
  }

  async validateUser(loginDto: LoginDto): Promise<any> {
    const { Correo_Electronico, password } = loginDto;
    console.log('Nombre:', Correo_Electronico);  // Verificar el nombre proporcionado
    console.log('Contraseña:', password);  // Verificar la contraseña proporcionada
  
    const usuario = await this.usuariosRepository.findOne({ where: { Correo_Electronico } });   
  
    if (!usuario) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }
  
    console.log('Usuario encontrado:', usuario);  // Verificar el usuario recuperado
    console.log('Contraseña del usuario:', usuario.Contraseña);  // Verificar la contraseña almacenada
  
    const passwordValido = await bcrypt.compare(password, usuario.Contraseña);
  
    if (!passwordValido) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }
  
    return {
      mensaje: 'Login exitoso',
      usuario: {
        ID_Usuario: usuario.ID_Usuario,
      },
    };
  }
}  