import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Link
} from 'react-router-dom'
import Home from './Home'
import Sobre from './Sobre'
import Produtos from './Produtos'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Gerenciar Produtos</a>          
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/produtos">Produtos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sobre">Sobre</Link>
                </li>              
              </ul>
            </div>
          </nav>

          <div className="container mt-2">
            <Route exact path ='/' component={Home} />
            <Route path ='/produtos' component={Produtos} />
            <Route exact path ='/sobre' component={Sobre} />
          </div>

        </div>
      </Router>
    )
  }
}

export default App
