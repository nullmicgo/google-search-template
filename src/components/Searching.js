import React, { Component } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import CourseContainer from  './courses/CourseContainer';
import {NewsCase001, NewsCase002, NewsCase003, NewsCase004} from '../data/courses';




class Searching extends Component {   
  constructor(props, context) {
		super(props, context);
		this.state = {
          searchingname: "",
          targetNews:NewsCase004,
          case:"NORMAL",
          loading: true

    };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.searchResult = this.searchResult.bind(this);

	  }




  componentDidMount() {

    const { name } = this.props.match.params
    //this.setState({ searchingname: name});

    this.keywords.value = name;
    this.searchResult(name);
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    let teacherName = this.keywords.value;
    this.setState({ searchingname: teacherName});
    //this.keywords.value = this.state.searchingname;
    this.searchResult(teacherName);
  }
  searchResult(name){
    if(name.includes("四州大廈")){
      this.setState({ targetNews: NewsCase001 , case:"NORMAL"});
    }else if(name.includes("世界各地")){
      this.setState({ targetNews: NewsCase002, case:"NORMAL"});
    }else if(name.includes("異度空間")){
      this.setState({ targetNews: NewsCase003, case:"SPECIAL"});
    }else {
      this.setState({ targetNews: NewsCase004, case:"SPECIAL"});
    }

  }


  render() {

 let content ="";
 if(this.state.case === "NORMAL"){
   content =  <CourseContainer data={this.state.targetNews} />;
 }else{
  content =  <main>

<NavLink  exact to={"/about/6"} >
<img src="loading.gif" />
</NavLink>




     
     </main>;
 }

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
    {content}
  </div>
)
  }

}
export default Searching;