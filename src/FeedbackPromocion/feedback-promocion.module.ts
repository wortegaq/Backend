import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackPromocionService } from './feedback-promocion.service';
import { FeedbackPromocionController } from './feedback-promocion.controller';
import { FeedbackPromocion } from './entities/feedback-promocion.entity';
import { Feedback } from '../feedback/entities/feedback.entity';
import { Promocion } from '../promocion/entities/promocion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FeedbackPromocion, Feedback, Promocion])],
  controllers: [FeedbackPromocionController],
  providers: [FeedbackPromocionService],
})
export class FeedbackPromocionModule {}
