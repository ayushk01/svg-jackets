import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Content />
      <Preview />
      <Footer />
    </div>
  );
}

export default App;
