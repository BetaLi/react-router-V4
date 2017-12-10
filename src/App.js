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
    const Topic = function ({match}) {
        return (
            <div>
            <h3>{match.params.topicID}</h3>
            </div>
        )
    };
    const Index = function ({match}) {
        return (
            <div>
                <ul>
                    <li><Link to={`${match.url}/Rendering`}>Rendering by react.</Link></li>
                    <li><Link to={`${match.url}/Component`}>Component by react.</Link></li>
                    <li><Link to={`${match.url}/Props.V`}>Props .V by react.</Link></li>
                </ul>
                <hr/>
                <Route path={`${match.url}/:topicID`} component={Topic}/>
                <Route exact path={match.url} render={() => (<h3>请选择一个主题。</h3>)}/>
            </div>
        )
    };
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/index'}>Index</Link></li>
                </ul>
                <hr/>
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
