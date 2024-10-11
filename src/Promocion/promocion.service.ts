import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePromocionDto } from './dto/create-promocion.dto';
import { UpdatePromocionDto } from './dto/update-promocion.dto';
import { Promocion } from './entities/promocion.entity';

@Injectable()
export class PromocionService {
  constructor(
    @InjectRepository(Promocion)
    private readonly promocionRepository: Repository<Promocion>,
  ) {}

  create(createPromocionDto: CreatePromocionDto) {
    const promocion = this.promocionRepository.create(createPromocionDto);
    return this.promocionRepository.save(promocion);
  }

  findAll() {
    return this.promocionRepository.find();
  }

  findOne(id: number) {
    return this.promocionRepository.findOneBy({ ID_Promocion: id });
  }
  

  update(id: number, updatePromocionDto: UpdatePromocionDto) {
    return this.promocionRepository.update(id, updatePromocionDto);
  }

  remove(id: number) {
    return this.promocionRepository.delete(id);
  }
}

