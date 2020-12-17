import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import AllUsers from "./components/all-users/AllUsers";
import Home from "./components/home/Home";
import './App.css';
import Nav from "./components/nav/Nav";

class App extends Component {
    render() {
        return (
                <div className="App">
                    <header className="App-header">
                        <Nav/>

                        <div className="app-route">
                            <Switch>
                                <Route path={'/all-users'} render={()=> <AllUsers/>}/>
                                <Route path={'/'} render={()=> <Home/>}/>
                            </Switch>
                        </div>
                    </header>
                </div>

        );
    }
}

export default App;
