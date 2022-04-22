import { Course } from './interfaces/courses.interface'
import { Injectable } from '@nestjs/common';
import { firestore } from './utils/firebase';
import { addDoc , getDocs , collection , query , where , deleteDoc , doc , updateDoc} from '@firebase/firestore';
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
    const allCourse = [];
    const q = await query(collection(firestore, 'user'))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.data());
      allCourse.push({Id:doc.id,number:doc.data().number,title:doc.data().title})
      // console.log(doc.id, ' => ', doc.data())
    })
    return allCourse
  }
  async create(createCourseDto: CreateCourseDto){
    const test = await addDoc(collection(firestore, 'user'), createCourseDto);
    return test;
  }

  async findbynumber(coursenumber:string): Promise<Course[]> {
    const allCourse = [];
    const q = await query(
      collection(firestore, 'user') ,
      where('number', '==', coursenumber), 
    )
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      allCourse.push({number:doc.data().number,title:doc.data().title})
      // console.log(doc.id, ' => ', doc.data())
    })
    return allCourse
  }

  async deletecoursenum(coursenumber:string): Promise<Course[]> {
    await deleteDoc(doc(firestore,"user",coursenumber));
    return [];
  }
  
  async changecoursenumber(coursenumber:string , changenumber:string): Promise<Course[]> {
    await updateDoc(doc(firestore,'user',coursenumber) , {
      number : changenumber
    })
    return [];
  }
}