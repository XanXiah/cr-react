import React from 'react';
import { Course } from '../Interface/course.interface'

type CourseItemProps = {
    course : Course;
}; 

const CourseItem = (props : CourseItemProps ) => {
    const course:Course = props.course;
    const data = <li>{course.number} - {course.title}</li>
    return (
    <li className = 'Course'>{course.number} - {course.title} <button>Delete</button></li>
    );
};

export default CourseItem;