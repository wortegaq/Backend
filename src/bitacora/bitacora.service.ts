import { Injectable } from '@nestjs/common';
import { CreateBitacoraDto } from './dto/create-bitacora.dto';
import { UpdateBitacoraDto } from './dto/update-bitacora.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bitacora } from './entities/bitacora.entity';

@Injectable()
export class BitacoraService {
  constructor(
    @InjectRepository(Bitacora)
    private readonly bitacoraRepository: Repository<Bitacora>,
  ) {}

  create(createBitacoraDto: CreateBitacoraDto) {
    const bitacora = this.bitacoraRepository.create(createBitacoraDto);
    return this.bitacoraRepository.save(bitacora);
  }

  findAll() {
    return this.bitacoraRepository.find();
  }

  findOne(id: number) {
    return this.bitacoraRepository.findOneBy({ ID_Bitacora: id });
  }

  update(id: number, updateBitacoraDto: UpdateBitacoraDto) {
    return this.bitacoraRepository.update(id, updateBitacoraDto);
  }

  remove(id: number) {
    return this.bitacoraRepository.delete(id);
  }
}

