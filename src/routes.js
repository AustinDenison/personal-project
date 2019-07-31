import React from 'react'
import Search from './Components/search'
import {Switch, Route} from 'react-router-dom'
import frontPage from './Components/frontPage'
import cart from './Components/cart'

export default (
    <Switch>
        <Route exact path='/' component={frontPage} />
        <Route path='/cart' component={cart} />
        <Route path='/search' component={Search} />
    </Switch>
)