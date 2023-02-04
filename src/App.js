import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Popular from './components/Popular'

import Login from './components/Login'

import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Account from './components/Account'
import MovieDetails from './components/MovieDetails'
import Search from './components/Search'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/popular" component={Popular} />
      <Route exact path="/movies/:id" component={MovieDetails} />

      <ProtectedRoute exact path="/search" component={Search} />
      <ProtectedRoute exact path="/account" component={Account} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
