import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromocionService } from './promocion.service';
import { PromocionController } from './promocion.controller';
import { Feedback } from '../Feedback/entities/feedback.entity';
import { Promocion } from '../Promocion/entities/promocion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Promocion])],
  controllers: [PromocionController],
  providers: [PromocionService],
})
export class PromocionModule {}
