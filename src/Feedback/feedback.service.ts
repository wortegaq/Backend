import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from './entities/feedback.entity';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private feedbackRepository: Repository<Feedback>,
  ) {}

  create(createFeedbackDto: CreateFeedbackDto) {
    const newFeedback = this.feedbackRepository.create(createFeedbackDto);
    return this.feedbackRepository.save(newFeedback);
  }

  findAll() {
    return this.feedbackRepository.find({ relations: ['usuario', 'elemento'] });
  }

  findOne(id: number) {
    return this.feedbackRepository.findOne({ where: { ID_Feedback: id }, relations: ['usuario', 'elemento'] });
  }

  update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
    return this.feedbackRepository.update(id, updateFeedbackDto);
  }

  remove(id: number) {
    return this.feedbackRepository.delete(id);
  }
}
