import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CommonModule } from './common/common.module';
import { DireccionesModule } from './Direccion/direcciones.module'
import { ElementosModule } from './Elemento/elementos.module';
import { FeedbackModule } from './Feedback/feedback.module';
import { PromocionModule } from './Promocion/promocion.module';
import { FeedbackPromocionModule } from './feedbackpromocion/feedback-promocion.module'; 
import { CategoriaModule } from './categoria/categoria.module';
import { HistorialPreciosModule } from './historiaprecios/historial-precios.module';
import { EstadoOrdenModule } from './estadoorden/estado-orden.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ssl: process.env.STAGE === 'prod',
      extra: {
        ssl: process.env.STAGE === 'prod'
          ? { rejectUnauthorized: false }
          : null,
      },
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),

    UsuariosModule,
    CommonModule,
    DireccionesModule,
    ElementosModule,
    FeedbackModule,
    PromocionModule,
    FeedbackPromocionModule,
    CategoriaModule,
    HistorialPreciosModule,
    EstadoOrdenModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule { }


