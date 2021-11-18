import React, { useState, useEffect } from "react";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import HeaderSlide from "./Components/HeaderSlide";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <>
          <Navbar />
          <HeaderSlide />
          <About />
          <Menu />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
