"use client";

import { useState } from 'react';

const coursesData = [
  {
    course: 'Course 1',
    subcourses: ['Topic 1', 'Topic 2', 'Topic 3'],
  },
  {
    course: 'Course 2',
    subcourses: ['Topic 1', 'Topic 2'],
  },
  {
    course: 'Course 3',
    subcourses: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'],
  },
];
export default function Home() {
  const [activeCourse, setActiveCourse] = useState(null);
  const [expandedCourse, setExpandedCourse] = useState(null);

  const toggleSubcourses = (course) => {
    if (expandedCourse === course) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(course);
    }
  };

  return (
    <div className="p-6">
      {coursesData.map(({ course, subcourses }) => (
        <div key={course} className="mb-4">
          <div
            className={`flex justify-between items-center p-4 border rounded-lg cursor-pointer ${activeCourse === course ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveCourse(course)}
          >
            <span onClick={() => toggleSubcourses(course)}>{course}</span>
            {activeCourse === course && <span className="text-sm text-green-500">Active</span>}
          </div>
          {expandedCourse === course && (
            <div className="mt-2 pl-4">
              {subcourses.map((subcourse) => (
                <div key={subcourse} className="p-2 bg-gray-100 border rounded-lg mb-2">{subcourse}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
