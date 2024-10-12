import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFeedbackPromocionDto } from './dto/create-feedback-promocion.dto';
import { FeedbackPromocion } from './entities/feedback-promocion.entity';
import { UpdateFeedbackPromocionDto } from './dto/update-feedback-promocion.dto';

@Injectable()
export class FeedbackPromocionService {
  constructor(
    @InjectRepository(FeedbackPromocion)
    private readonly feedbackPromocionRepository: Repository<FeedbackPromocion>,
  ) {}

  create(createFeedbackPromocionDto: CreateFeedbackPromocionDto) {
    const feedbackPromocion = this.feedbackPromocionRepository.create({
      feedback: { ID_Feedback: createFeedbackPromocionDto.ID_Feedback } as any,
      promocion: { ID_Promocion: createFeedbackPromocionDto.ID_Promocion } as any,
    });
    return this.feedbackPromocionRepository.save(feedbackPromocion);
  }

  findAll() {
    return this.feedbackPromocionRepository.find({ relations: ['feedback', 'promocion'] });
  }

  findOne(id: number) {
    return this.feedbackPromocionRepository.findOne({
      where: { ID_Feedback_Promocion: id },
      relations: ['feedback', 'promocion'],
    });
  }

  update(id: number, updateFeedbackPromocionDto: UpdateFeedbackPromocionDto) {
    const feedbackPromocion = this.feedbackPromocionRepository.create({
      feedback: { ID_Feedback: updateFeedbackPromocionDto.ID_Feedback } as any,
      promocion: { ID_Promocion: updateFeedbackPromocionDto.ID_Promocion } as any,
    });
    return this.feedbackPromocionRepository.update(id, feedbackPromocion);
  }

  remove(id: number) {
    return this.feedbackPromocionRepository.delete(id);
  }
}
