import React, { useState } from 'react';
import {
  collection,
  doc,
  setDoc,
  serverTimestamp,
  addDoc,
  updateDoc,
} from 'firebase/firestore'
import { firestore } from "../../../cr-backend/src/utils/firebase"
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
    
    fetch('http://localhost:3000/db/', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(newCourse)
    })
    .then(res => console.log(res))
    .then(res => {alert(res);});
  };

  return (
    <div>
      Number:<input value={newNumber} onChange={handleNumber} /><br />
      Title:<input value={newTitle} onChange={(e) => setnewTitle(e.target.value)} /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>)
};

export default CourseForm;