import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import createNote from "./components/CreateNote";
import notes from "./notes";

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>{notes.map(createNote)}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
