import { json } from "stream/consumers";
import { Course
 } from "../Interface/course.interface";

export async function fetchCourse():Promise<Course[]> {
    const res = await fetch("http://localhost:3000/db/")
    const courses = res.json();
    return courses;
}

export async function createCourse(newCourse: Course): Promise<Course> {
    const res = await fetch('http://localhost:3000/db/', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(newCourse)
    });
    const nCourse = res.json();
    return nCourse;
}


export default {
    fetchCourse, createCourse,
}