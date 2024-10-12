import { Controller, Post, Get, Param, Patch, Delete, Body } from '@nestjs/common';
import { FeedbackPromocionService } from './feedback-promocion.service';
import { CreateFeedbackPromocionDto } from './dto/create-feedback-promocion.dto';
import { UpdateFeedbackPromocionDto } from './dto/update-feedback-promocion.dto';

@Controller('feedback-promocion')
export class FeedbackPromocionController {
  constructor(private readonly feedbackPromocionService: FeedbackPromocionService) {}

  @Post()
  create(@Body() createFeedbackPromocionDto: CreateFeedbackPromocionDto) {
    return this.feedbackPromocionService.create(createFeedbackPromocionDto);
  }

  @Get()
  findAll() {
    return this.feedbackPromocionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feedbackPromocionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFeedbackPromocionDto: UpdateFeedbackPromocionDto,
  ) {
    return this.feedbackPromocionService.update(+id, updateFeedbackPromocionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feedbackPromocionService.remove(+id);
  }
}
