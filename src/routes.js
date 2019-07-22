import React from 'react'
import Search from './Components/search'
import {Switch, Route} from 'react-router-dom'

export default (
    <Switch>
        <Route exact path='/' />
        <Route path='/cart' />
        <Route path='/search' component={Search} />
    </Switch>
)