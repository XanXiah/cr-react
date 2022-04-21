import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesService , CoursesDBService } from './course.service';
import { CoursesController , CoursesDB } from './courses.controller';

@Module({
  imports: [],
  controllers: [AppController , CoursesController , CoursesDB],
  providers: [AppService , CoursesService , CoursesDBService ],
})
export class AppModule {}
