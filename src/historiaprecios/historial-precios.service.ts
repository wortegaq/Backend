import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistorialPrecios } from './entities/historial-precios.entity';
import { CreateHistorialPreciosDto } from './dto/create-historial-precios.dto';
import { UpdateHistorialPreciosDto } from './dto/update-historial-precios.dto';
import { Elemento } from '../elemento/entities/elementos.entity';

@Injectable()
export class HistorialPreciosService {
  constructor(
    @InjectRepository(HistorialPrecios)
    private readonly historialPreciosRepository: Repository<HistorialPrecios>,
    @InjectRepository(Elemento)
    private readonly elementoRepository: Repository<Elemento>,
  ) {}

  async create(createHistorialPreciosDto: CreateHistorialPreciosDto): Promise<HistorialPrecios> {
    const { ID_Elemento, ...rest } = createHistorialPreciosDto;

    // Buscar la entidad Elemento usando el ID proporcionado
    const elemento = await this.elementoRepository.findOne({ where: { ID_Elemento } });
    if (!elemento) {
      throw new NotFoundException(`Elemento con ID ${ID_Elemento} no encontrado`);
    }

    // Crear el objeto de HistorialPrecios usando el resto de los datos y la entidad Elemento encontrada
    const historialPrecios = this.historialPreciosRepository.create({
      ...rest,
      ID_Elemento: elemento,
    });

    return await this.historialPreciosRepository.save(historialPrecios);
  }

  async findAll(): Promise<HistorialPrecios[]> {
    return await this.historialPreciosRepository.find();
  }

  async findOne(id: number): Promise<HistorialPrecios> {
    const historialPrecios = await this.historialPreciosRepository.findOne({ where: { ID_Historial: id } });
    if (!historialPrecios) {
      throw new NotFoundException(`Historial de precios con ID ${id} no encontrado`);
    }
    return historialPrecios;
  }

  async update(id: number, updateHistorialPreciosDto: UpdateHistorialPreciosDto): Promise<HistorialPrecios> {
    const historialPrecios = await this.findOne(id);
    Object.assign(historialPrecios, updateHistorialPreciosDto);
    return await this.historialPreciosRepository.save(historialPrecios);
  }

  async remove(id: number): Promise<void> {
    const historialPrecios = await this.findOne(id);
    await this.historialPreciosRepository.remove(historialPrecios);
  }
}
