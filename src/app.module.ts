import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController, AdminController } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, AdminController],
  providers: [AppService],
})
export class AppModule { }
