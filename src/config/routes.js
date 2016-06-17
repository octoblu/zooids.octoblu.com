import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../containers/app'
import Components from '../containers/components'
import Design from '../containers/design'
import GettingStarted from '../containers/getting-started'
import Generators from '../containers/generators'
import NotFound from '../components/NotFound/NotFound'

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={GettingStarted} />
      <Route path="components/:componentId" component={Components} />
      <Route path="design" component={Design} />
      <Route path="getting-started" component={GettingStarted} />
      <Route path="generators" component={Generators} />
    </Route>
    <Route path="*" status={404} component={NotFound} />
  </Route>
)
