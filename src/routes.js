import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Items from './Components/Items/Items';
import Contact from './Components/Contact/Contact';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/items/' component={Items} />
        <Route path='/contact/' component={Contact} />
    </Switch>
)