import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TeamsModule } from './teams/teams.module';
import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './auth/local.strategy';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost/teste'),
    MongooseModule.forRoot('mongodb+srv://khauam:123qwe$@cluster0.9eothzx.mongodb.net/treino'),
    // retirando o UsersModule pois esta dentro do AuthModule agora e se deixar da erro de dependencia circular
    AuthModule,
    
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'front'),
    }),
    TeamsModule,
  ],
  controllers: [AppController],
  providers: [
    // AuthService,
    // LocalStrategy,
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    
  ],
})
export class AppModule {}
