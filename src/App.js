import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import {ToastContainer} from "react-toastify";
import AdminMenus from "./pages/AdminMenus";
import "./css/main.scss"

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/login" exact component={Login}/>
              <Route path="/admin/menus" exact component={AdminMenus}/>
            </Switch>

            <ToastContainer/>
        </BrowserRouter>
    );
};

export default App;