import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class Home extends Component {    
  handleSubmit = (e) =>{
    e.preventDefault();
    let teacherName = this.name.value;
    let path = `searching/${teacherName}`;
    this.props.history.push(path);
  }
  render() {
    return (


      <div className="main-content courses">
      <div className="course-header group">
      <h2><NavLink exact to="/" >GoGo Search &nbsp; &nbsp;</NavLink></h2>



            <form onSubmit={this.handleSubmit}>
                <input className="top-search-input" type="text" placeholder="輸入關鍵字" name="name"  ref={ (input)=> this.name = input } />
                <button type="submit">搜尋</button>
            </form>
      </div>
    </div>
  





    );
  }
}

export default Home;