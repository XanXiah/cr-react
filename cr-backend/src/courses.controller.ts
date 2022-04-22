import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
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
  
  @Get('number/:coursenumber')
  async findbynumber(@Param('coursenumber') coursenumber:string): Promise<Course[]> {
    console.log("Pass Teset");
    const course  = this.courseDB.findbynumber(coursenumber);
    return course;
  }

  @Delete('delete/:coursenumber')
  async deletecoursenum(@Param('coursenumber') coursenumber:string): Promise<Course[]> {
    const course = this.courseDB.deletecoursenum(coursenumber);
    return [];
  }

  @Put(':coursenumber/:changenumber')
  async changecoursenumber(@Param('coursenumber') coursenumber:string , @Param('changenumber') changenumber:string): Promise<Course[]> {
    console.log("Update");
    console.log(coursenumber,changenumber);
    const course = this.courseDB.changecoursenumber(coursenumber,changenumber);
    return[];
  }

  @Get('find?')
  async findquery(@Query() data:Course ): Promise<Course[]> {
    console.log(data.number,data.title)
    return []
  }
}
