import React from 'react';

const PracticeSection = () => {
  const practices = [
    { title: "Practice C", level: "Beginner to Advance" },
    { title: "Practice C++", level: "Beginner to Advance" },
    { title: "Practice Java", level: "Beginner to Advance" },
    { title: "Practice Python", level: "Beginner to Advance" },
    { title: "Practice DSA with C", level: "Beginner to Advance" },
    // Add more items as needed
  ];

  return (
    <div className="practice-section">
      <h2>Explore Our World's Best Practices</h2>
      <div className="practice-grid">
        {practices.map((practice, index) => (
          <div key={index} className="practice-card">
            <h3>{practice.title}</h3>
            <p>{practice.level}</p>
            <button>Practice Problems</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PracticeSection;
