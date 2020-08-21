import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AOS from 'aos';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import Main from './Main.js';
import EqualiCare from './projects/EqualiCare';
import Work from './pages/Work.js';
import About from './pages/About.js';
import Resume from './pages/Resume.js';
import Footer from './Footer.js';

class App extends Component {
  componentDidMount() {
      window.scrollTo(0, 0);
  
      const script = document.createElement("script");
      script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
      script.async = true;
      document.body.appendChild(script);
  }

  render() {
    AOS.init();

    return (

      <div className="App">
        <Route
          exact path="/"
          component={Main}
        />
        <Route 
          path="/equalicare"
          component={EqualiCare}
        />
        <Route
          exact path="/about"
          component={About}
        />
        <Route
          exact path="/resume"
          component={Resume}
        />
        <Footer />
      </div>

      // <BrowserRouter>
      //   <div className="App">

      //     {/* NAVBAR */}
      //     <Route exact path="/" component={Work} />
      //     <Route path="/about" component={About} />
      //     <Route path="/resume" component={Resume} />

      //     <div className="navigation">
      //       <img src={logo} className="logo" alt="Logo Image" />
      //       <div className="navigation-sub">
      //         <Link to="/" className="item">Work</Link>
      //         <Link to="/about" className="item">About</Link>
      //         <Link to="/resume" className="item">Resume</Link>
      //       </div>
      //     </div>
      //   </div>
      // </BrowserRouter> 
    );
  }
}

export default App;
