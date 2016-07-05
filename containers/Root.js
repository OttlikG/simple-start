
import React                      from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider }               from 'react-redux'
import { syncHistoryWithStore }   from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'
import thunk                      from 'redux-thunk'
import createLogger               from 'redux-logger'

import App                        from './App'
import reducers                   from '../reducers'

import testStore                  from '../test_store'

const middlewares = [ thunk, createLogger() ]
const store = createStore(reducers, applyMiddleware(...middlewares))
const history = syncHistoryWithStore(browserHistory, store)

testStore(store)

export default function () {
  return (
    <Provider store={ store }>
      <Router history={ history }>
        <Route path='/' component={ App }>
          {/*<Route path='/resource' component={ ResourceListView }/>
          <Route path='/resource/:id' component={ ResourceShowView }/>*/}
        </Route>
      </Router>
    </Provider>
  )
}
