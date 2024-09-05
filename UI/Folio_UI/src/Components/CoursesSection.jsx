import React from 'react';

const CoursesSection = () => {
  const courses = [
    { title: "Basics of C", description: "Master The Fundamentals Of C Programming..." },
    { title: "Basics of C++", description: "Master The Basics Of C++..." },
    { title: "Basics of Java", description: "Unlock The Power Of Java..." },
    { title: "Basics of Python", description: "Get Started With Python..." },
    // Add more courses as needed
  ];

  return (
    <div className="courses-section">
      <h2>Our Courses Offering</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button>Start Learning</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesSection;
