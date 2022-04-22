import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Course } from "./Interface/course.interface";
import CourseItem from './components/CourseItem';
import CourseForm from './components/CourseForm';
import { getFirestore, collection, getDocs, connectFirestoreEmulator } from 'firebase/firestore/lite';
import CourseServices, { fetchCourse } from './services/CourseServices';

const App = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [formVisible, setformVisible] = useState<boolean>(false);
  

  const toggleFormVisible = () => {
    setformVisible(!formVisible);
  }
  
  const fetchCourse = () => {
    CourseServices.fetchCourse()
    .then(courses => {
      setCourses(courses);
    })
  }
  useEffect(() => {
    fetchCourse();
  }, []);
  return (
    <div className="App">
      <ul>
        {courses.map((item) => (
          <CourseItem key={item.id} course={item} />
        ))}
      </ul>

      <button onClick={toggleFormVisible}>New Course</button>
      {formVisible &&
        <CourseForm/>
      }
    </div>
  );
}


/*type AppState = {
  message : string;
};

class App extends React.Component<{}, AppState> {
  state: AppState = {
    // optional second annotation for better type inference
    message : 'Default',
  };

  componentDidMount() {
    fetch("http://localhost:3000/courses/")
      .then(x => x.json())
      .then(x => {
        this.setState({message:x.message});
      });
  }
  render() {
    return (
      <div>
         {this.state.message}
      </div>
    );
  }
}
*/
export default App;
