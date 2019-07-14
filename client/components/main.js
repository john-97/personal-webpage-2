import React from 'react'
import { Route, Switch } from 'react-router-dom' // react-router v4/v5
import Landing from './landing'

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  )
}

export default Main
