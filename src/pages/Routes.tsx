import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MonitorForm from './MonitorRegistration'
import MonitorList from './MonitorList'
import Home from './Home'
import AboutUs from './AboutUs'
import Events from './Events'

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/monitoras-lista' component={MonitorList}/>
      <Route path='/cadastrar-monitora' component={MonitorForm}/>
      <Route path='/sobre-nos' component={AboutUs}/>
      <Route path='/eventos' component={Events}/>
      <Route path='/' component={Home} exact/>
    </BrowserRouter>
  )
}

export default Routes