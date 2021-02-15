import React from "react";
import { Route, Switch, } from "react-router-dom";
import Login from './Login'
import SignUp from './SignUp'
export default function  Routes () {
return(
 <Switch>
   <Route path="/Login" exact component={Login} />
    <Route path="/SignUp" exact component={SignUp}  />
    </Switch>
)
}