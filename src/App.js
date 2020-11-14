import './App.css';
import React, {Component} from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import CreateAccountForm from "./components/CreateAccountForm";

class App extends Component{
    render() {
      return (
          <React.Fragment>
            <main className="container">
                <LoginForm path="/login" component={LoginForm}/>
                {/*<RegisterForm path="/register" component={RegisterForm}/>*/}
                {/*<CreateAccountForm path="/create" component={CreateAccountForm}/>*/}
            </main>
          </React.Fragment>
      );
  }
}
export default App;
