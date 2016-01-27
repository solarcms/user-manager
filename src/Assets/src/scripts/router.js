/**
 * Created by n0m4dz on 1/10/16.
 */
import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import history from 'history'
import {browserHistory, Router, Route, Link, IndexRoute} from 'react-router'
import UserContainer from './containers/UserContainer'

export default () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={UserContainer}/>
        </Router>
    )
}


