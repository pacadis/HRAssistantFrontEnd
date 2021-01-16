import './App.css';
import React, {Component} from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import HomePage from './components/HomePage';
import RegisterForm from './components/RegisterForm';
import NotFound from './components/NotFound';

import CompanyDashboard from './components/CompanyDashboard';
import EmployeeDashboard from "./components/EmployeeDashboard";
import ContactForm from "./components/ContactForm";
import EditEmployee from "./components/EditEmployee";


class App extends Component{
    render() {
      return (
        <div >
            <div className="content" >
              <Switch>
                <Route path="/login" component={LoginForm}/>
                <Route path="/register" component={RegisterForm}/>
                <Route path="/contact" component={ContactForm}/>

                <Route path="/companydashboard/employee/:id" component={EditEmployee}/>
                <Route path="/companydashboard" component={CompanyDashboard}/>
                <Route path="/employeedashboard" component={EmployeeDashboard}/>

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
