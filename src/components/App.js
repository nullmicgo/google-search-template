import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Header from './Header';


import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';
import Searching from './Searching';
import { HashRouter } from 'react-router-dom'




/* 
//We can use this way to pass props into the Route
<Route  path="/about" render={ () => <About/>} />  
*/



const App = () => (
  <HashRouter>

  <div className="container">
      <div className="counter">
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Home} />


                       <Route  path="/about/:typeid" component={About} />

          <Route  exact path="/teachers" component={Teachers} />
          <Route  path="/teachers/:topic/:name" component={Featured} />
          <Route  path="/courses" component={Courses} />      
          <Route  path="/searching/:name" component={Searching} />



          <Route   component={NotFound} />        
        </Switch>
      </div>
  </div>
  </HashRouter>

);

export default App;