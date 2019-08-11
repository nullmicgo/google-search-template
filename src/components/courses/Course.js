import React from 'react';
import { NavLink } from 'react-router-dom';

const Course = (props) => (
  <li className="course media group">
    <div>



    <h3><NavLink  exact to={"/about/"+props.type} >{props.title}</NavLink></h3>
      <p className="news-url">{props.url}</p>
      <p>{props.desc}</p>
    </div>
  </li>
);

export default Course;