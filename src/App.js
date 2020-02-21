import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <Note />
      </div>
    </div>
  );
};

export default App;
