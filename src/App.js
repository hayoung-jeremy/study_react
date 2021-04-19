import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";


function App () {
  return (
    <HashRouter>
      {/* 만약 /about로 접속할 경우, About component를 보여주어라 */}
      
      <Navigation />
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />

    </HashRouter>
  )
}

export default App;