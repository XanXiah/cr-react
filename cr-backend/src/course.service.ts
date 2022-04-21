import { Course } from './interfaces/courses.interface'
import { Injectable } from '@nestjs/common';
import { firestore } from './utils/firebase';
import { addDoc , getDocs , collection , query } from '@firebase/firestore';
import { countReset } from 'console';
import { CreateCourseDto } from './dto/create-course.dto';


@Injectable()
export class CoursesService {
    async findAll(): Promise<Course[]> {
        return [
          {
            id: '100' ,
            number: '01204111',
            title: 'Computer Programming'
          },
          {
            id: '101' ,
            number: '01204112',
            title: 'Review Courses'
          }
        ];
      }
}

export class CoursesDBService {
  async findAll(): Promise<Course[]> {
    const allPost = [];
    const q = await query(collection(firestore, 'user'))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      allPost.push({number:doc.data().number,title:doc.data().title})
      // console.log(doc.id, ' => ', doc.data())
    })
    return allPost
  }
  async create(createCourseDto: CreateCourseDto){
    const test = await addDoc(collection(firestore, 'user'), createCourseDto);
    return test;
  }
}