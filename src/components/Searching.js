import React, { Component } from 'react';

import { Route, NavLink, Redirect } from 'react-router-dom';


import CourseContainer from  './courses/CourseContainer';
import {HTMLCourses, CSSCourses, JSCourses} from '../data/courses';

class Searching extends Component {   
  constructor(props, context) {
		super(props, context);
		this.state = {
          searchingname: ""
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
	  }




  componentDidMount() {

    const { name } = this.props.match.params
    //this.setState({ searchingname: name});
    this.keywords.value = name;
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    let teacherName = this.keywords.value;
    this.setState({ searchingname: teacherName});
    //this.keywords.value = this.state.searchingname;
  }

  render() {

  return (
  <div className="main-content courses">
    <div className="course-header group">
    <h2><NavLink exact to="/" >GoGo Search &nbsp; &nbsp;</NavLink></h2>

          <form onSubmit={this.handleSubmit}>
              <input className="top-search-input" type="text" placeholder="輸入關鍵字" name="name"  ref={ (input)=> this.keywords = input } />
              <button type="submit">搜尋</button>
          </form>


    </div>
    <hr className="seperate-line-style" />
    <CourseContainer data={HTMLCourses} />
  </div>
)
  }

}
export default Searching;