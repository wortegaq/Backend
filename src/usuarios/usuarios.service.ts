import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
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
}
