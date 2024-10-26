import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';
import { Orden } from './entities/orden.entity';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { EstadoOrden } from '../estadoorden/entities/estado-orden.entity';

@Injectable()
export class OrdenService {
  constructor(
    @InjectRepository(Orden)
    private ordenRepository: Repository<Orden>,
    
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    
    @InjectRepository(EstadoOrden)
    private estadoOrdenRepository: Repository<EstadoOrden>,
  ) {}

  async create(createOrdenDto: CreateOrdenDto) {
    const { ID_Usuario, ID_Estado_Orden, ...rest } = createOrdenDto;

    // Buscar las referencias de Usuario y EstadoOrden
    const usuario = await this.usuarioRepository.findOneBy({ ID_Usuario });
    const estadoOrden = await this.estadoOrdenRepository.findOneBy({ ID_Estado_Orden });

    if (!usuario || !estadoOrden) {
      throw new Error('Usuario o EstadoOrden no encontrado');
    }

    // Crear la orden con las referencias adecuadas
    const orden = this.ordenRepository.create({
      ...rest,
      ID_Usuario: usuario,
      ID_Estado_Orden: estadoOrden,
    });
    return this.ordenRepository.save(orden);
  }

  async update(id: number, updateOrdenDto: UpdateOrdenDto) {
    const { ID_Usuario, ID_Estado_Orden, ...rest } = updateOrdenDto;

    // Buscar las referencias de Usuario y EstadoOrden
    const usuario = await this.usuarioRepository.findOneBy({ ID_Usuario });
    const estadoOrden = await this.estadoOrdenRepository.findOneBy({ ID_Estado_Orden });

    if (!usuario || !estadoOrden) {
      throw new Error('Usuario o EstadoOrden no encontrado');
    }

    // Actualizar la orden con las referencias adecuadas
    return this.ordenRepository.update(id, {
      ...rest,
      ID_Usuario: usuario,
      ID_Estado_Orden: estadoOrden,
    });
  }

  findAll() {
    return this.ordenRepository.find();
  }

  findOne(id: number) {
    return this.ordenRepository.findOneBy({ ID_Orden: id });
  }

  remove(id: number) {
    return this.ordenRepository.delete(id);
  }
}
