import React, { useState } from 'react';
import CourseServices from '../services/CourseServices';

type CourseFormProps = {

};

const CourseForm = (props: CourseFormProps) => {

  const [newNumber, setnewNumber] = useState<string>('');
  const [newTitle, setnewTitle] = useState<string>('');
  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setnewNumber(e.target.value);
  };

 
  const handleSubmit = () => {
    const newCourse = {
      number: newNumber,
      title: newTitle,
    };
    
  CourseServices.createCourse(newCourse)
  .then(course => {alert("Save");});
  }
  return (
    <div>
      Number:<input value={newNumber} onChange={handleNumber} /><br />
      Title:<input value={newTitle} onChange={(e) => setnewTitle(e.target.value)} /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>)
};

export default CourseForm; 