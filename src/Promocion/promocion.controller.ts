import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { PromocionService } from './promocion.service';
import { CreatePromocionDto } from './dto/create-promocion.dto';
import { UpdatePromocionDto } from './dto/update-promocion.dto';

@Controller('promociones')
export class PromocionController {
  constructor(private readonly promocionService: PromocionService) {}

  @Post()
  create(@Body() createPromocionDto: CreatePromocionDto) {
    return this.promocionService.create(createPromocionDto);
  }

  @Get()
  findAll() {
    return this.promocionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.promocionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePromocionDto: UpdatePromocionDto) {
    return this.promocionService.update(+id, updatePromocionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.promocionService.remove(+id);
  }
}

