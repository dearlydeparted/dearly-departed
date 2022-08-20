import React from "react";
import {
  AppBar,
  Container,
} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Routes,
  Route,Switch,Link
} from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./Pages/home";
import About from "./Pages/about";

//import Dashboard from "./components/Dashboard/Dashboard";
  
function App() {
  return (
    <div className="App">
      <Router>
     
        <Container maxWidth="lg" className="container">
        <span className="intro">Welcome to:</span>
         <h1> DEARLY DEPARTED</h1>
         <p>Transparency pricing and expert help in Age and Health transitions</p>

        </Container>
  
      </Router>
    </div>
  );
}
  
export default App;