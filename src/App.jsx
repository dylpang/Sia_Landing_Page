import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutCourses from "./components/AboutCourses";
import ClassesImage from "./assets/classes.png";
import CourseExample from "./assets/course.png";
import CoursePreview from "./components/CoursePreview";

function App() {
  useEffect(() => {
    // change background color
    document.body.classList.add("bg-off-black");
  }, []);
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutCourses
        title="Create Your Courses, Your Way"
        description="Whether you're tackling the intricacies of Molecular Biology or exploring the depths of English Literature, your personalized class awaits. It’s education, designed by you, for you."
        imageUrl={ClassesImage}
      ></AboutCourses>
      <CoursePreview
        imageUrl={CourseExample}
        title="Upload and Organize with Ease"
        description="Upload files directly to your class, organizing your study materials in one accessible place. From lecture notes to essential readings, keep your educational journey organized and at your fingertips."
      ></CoursePreview>
    </div>
  );
}

export default App;
