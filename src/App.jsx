import React from "react";
import { Footer, Hero, Navbar, Services, VeterinaryServicesPage } from "./components";
import "./App.css";
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <VeterinaryServicesPage/>
      <Services/>
      <Footer/>
    </div>
  );
};

export default App;
