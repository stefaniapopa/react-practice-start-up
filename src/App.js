import './App.css';
import React, { Component } from 'react';
import BootstrapNavbar from './copmonents/navbar/BootstrapNavbar';
import Footer from './copmonents/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'
import Calendar from './pages/calendar/Calendar'
import ContactUs from './pages/ContactUs'
import Team from './pages/Team'
import Messages from './pages/Message'


class App extends Component {

  render() {
    return (
      <div >
        <Router>
          <header >
            <BootstrapNavbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/products" component={Products} />
              <Route path="/aboutus" component={AboutUs} />
              <Route path="/team" component={Team} />
              <Route path="/messages" component={Messages} />
              <Route path="/contactus" component={ContactUs} />
            </Switch>
          </header>
        </Router>
        <body>
          <div>
            <Calendar/>
          </div>
        </body>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
