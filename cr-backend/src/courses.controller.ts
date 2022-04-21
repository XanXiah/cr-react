import { Body, Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { CoursesService , CoursesDBService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './interfaces/courses.interface';

@Controller('courses')
export class CoursesController {
  constructor(private courseService : CoursesService) {}

  @Get()
  findAll(): Promise<Course[]> {
    return this.courseService.findAll();
  }

}

@Controller('db')
export class CoursesDB {
  constructor(private courseDB : CoursesDBService) {}

  @Get()
  async findAll(): Promise<any> {
    return this.courseDB.findAll();
  }

  @Post()
  async create(@Body() createCourseDto:CreateCourseDto) {
    const course = this.courseDB.create(createCourseDto);
    return course;
  }
  
}
