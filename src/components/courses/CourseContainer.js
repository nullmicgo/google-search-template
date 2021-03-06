import React from 'react';
import Course from './Course';

const CourseContainer = (props) => {
  let courses = props.data.map((course) => {
    return <Course title={course.title}
                   desc={course.description}
                   img={course.img_src}
                   url={course.url}
                   type={course.type}
                   key={course.id} />
  }); 
  return (
    <div className="news-item">
      <ul>
        {courses}    
      </ul>
    </div>
  );
}

export default CourseContainer;