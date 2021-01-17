
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import authentication from './auth.jsx'
  
const PrivateCompanyRoute = ({component: Component, ...rest}) => {
    
    return (
        <Route {...rest} render={props => {
            if(authentication() === "company")
                return <Component {...props}/>;
            return <Redirect to={{pathname: '/login'}}/>
        }}/>
    );
}

export default PrivateCompanyRoute;