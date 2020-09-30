import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MonitorForm from './MonitorRegistration'
import MonitorList from './MonitorList'

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/monitoras-lista' component={MonitorList}/>
      <Route path='/cadastrar-monitora' component={MonitorForm}/>
    </BrowserRouter>
  )
}

export default Routes