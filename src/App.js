import './App.css';
import React, {Component} from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import HomePage from './components/HomePage';
import RegisterForm from './components/RegisterForm';
import CreateAccountForm from './components/CreateAccountForm';
import NotFound from './components/NotFound';
import NavBar from './components/navbar';

class App extends Component{
    render() {
      return (
        <div >
            <NavBar />
            <div className="content" >
              <Switch>
                <Route path="/login" component={LoginForm}/>
                <Route path="/register" component={RegisterForm}/>
                <Route path="/createaccount" component={CreateAccountForm}/>
                <Route path="/not-found" component={NotFound} />
                <Route path="/" exact component={HomePage} />
                <Redirect to="/not-found" />
              </Switch>
            </div>
          </div>
      );
  }
}
export default App;
