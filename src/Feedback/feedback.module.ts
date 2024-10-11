import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from './entities/feedback.entity';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { ElementosModule } from '../Elemento/elementos.module';

@Module({
  imports: [TypeOrmModule.forFeature([Feedback]), UsuariosModule, ElementosModule],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule {}
