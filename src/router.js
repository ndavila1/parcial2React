import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Panel from './components/Panel/panel';
import Post from './containers/Post/post';
import Albums from './containers/Albums/albums';
import App from './App';

const Router =() =>(
 <BrowserRouter>
    <Switch>
        <Route path='/' exact component={App}/>
        <Route path='/Panel' exact component={Panel}/> 
        <Route path='/Post' exact component={Post}/> 
        <Route path='/Albums' exact component={Albums}/> 
        <Route component={NotFound}/>

    </Switch>
 </BrowserRouter>   
)
export default Router