import './App.css';
import React, {Component} from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from "./components/presentation/LoginForm";
import HomePage from './components/presentation/HomePage';
import RegisterForm from './components/presentation/RegisterForm';
import NotFound from './components/utils/NotFound';

import CompanyDashboard from './components/company/CompanyDashboard';
import EmployeeDashboard from "./components/employee/EmployeeDashboard";
import ContactForm from "./components/presentation/ContactForm";
import EditEmployee from "./components/company/EditEmployee";

import PrivateCompanyRoute from "./components/utils/PrivateCompanyRoute";
import PrivateEmployeeRoute from "./components/utils/PrivateEmployeeRoute";


class App extends Component{
    render() {
      return (
        <div >
            <div className="content" >
              <Switch>
                <Route path="/login" component={LoginForm}/>
                <Route path="/register" component={RegisterForm}/>
                <Route path="/contact" component={ContactForm}/>

                <PrivateCompanyRoute path="/companydashboard/employee/:id" component={EditEmployee}/>
                <PrivateCompanyRoute path="/companydashboard" component={CompanyDashboard}/>
                <PrivateEmployeeRoute path="/employeedashboard" component={EmployeeDashboard}/>

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
