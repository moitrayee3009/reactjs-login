import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Login = React.lazy(() => import('./components/Login/Login'))
const Retrieve = React.lazy(() => import('./components/Retrieve'))
const Reset = React.lazy(() => import('./components/Reset'))

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/Retrieve' component={Retrieve} />
            <Route exact path='/Reset' component={Reset} />
            <Route exact path='/' component={Login} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
