import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class App extends Component {

render(){
    const Home = function(){
        return (
            <div>
                <h2>This is Home Page.</h2>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/index'}>Index</Link></li>
                </ul>
            </div>
        )
    };
    const About = function () {
        return (
            <div>
                <h2>This is About Page.</h2>
            </div>
        )
    };
    const Index = function () {
        return (
            <div>
                <h2>This is Index Page.</h2>
            </div>
        )
    };
    return (
        <Router>
            <div>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/about'} component={About}/>
                <Route path={'/index'} component={Index}/>
            </div>
        </Router>
    )
}






  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
}

export default App;
