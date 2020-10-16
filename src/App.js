import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

// CSS file
import './App.css';
import ApiComponent from './components/ApiComponent';
import ClassComponent from './components/class';
import ClassWithProps from './components/classWithProps';
import { ClassWithState, ClassWithStateProps } from './components/classWithState';

import FunctionComponent from './components/function';
import FunWithProps from './components/functionWithProps';
import ReactLifeCycle from './components/ReactLifeCycle';


function App() {
  return (
    <div className="row">
      <Router>
          <nav className="col-md-3 col-sm-12 nav flex-column nav-pills">
            <a href="/classComponent" className="nav-link">Class Component</a>
            <a href="/funComponent" className="nav-link">Function Component</a>
            <a href="/funWithProps" className="nav-link">Function with props</a>
            <a href="/classWithProps" className="nav-link">Class with props</a>
            <a href="/funWithPropsRender" className="nav-link">Function with props render</a>
            <a href="/classWithPropsRender" className="nav-link">Class with props render</a>
            <a href="/classWithState" className="nav-link">Class with state</a>
            <a href="/classWithStateProps" className="nav-link">Class with state & props</a>
            <a href="/reactLifeCycle" className="nav-link">React life cycle</a>
            <a href="/apiCalls" className="nav-link">Api Calls</a>
          </nav>
          <div className="col-md-9 col-sm-12 nav ">
            <Switch>  
              {/* <Route path="/" exact component={App}/> */}
              <Route path="/classComponent" component={ClassComponent}/>
              <Route path="/funComponent" component={FunctionComponent}/>
              {/* Function Props */}
              <Route path="/funWithProps" component={()=><FunWithProps name={'vamshi'}/>}/>
              <Route path="/classWithProps" component={()=><ClassWithProps name={'vamshi'} />}/>
              {/* it will pass location,history,match & other related parameter to the next component */}
              <Route path="/funWithPropsRender" render={(props)=><FunWithProps name="vamshi maroju" {...props}/>}/>
              <Route path="/classWithPropsRender" render={(props)=><ClassWithProps name="vamshi maroju" {...props}/>}/>
              <Route path="/classWithState" component={ClassWithState}/>
              <Route path="/classWithStateProps" render={(props)=><ClassWithStateProps name="vamshi maroju" {...props}/>}/>
              <Route path="/reactLifeCycle" render={(props)=><ReactLifeCycle name="react life cycle" {...props}/>}/>
              <Route path="/apiCalls" component={ApiComponent}/>
            </Switch>
          </div>
      </Router>      
    </div>
  );
}
export default App;
