  import Header from "./Components/Header/Header";
  import Hero from "./Components/Hero/Hero";
  import Companies from "./Components/Compani/Companies";
  import Residencies from "./Components/Residencies/Residencies";
  import Value from "./Components/Value/value";
  import Contact from "./Components/Contact/Contact";
  import Getarted from "./Components/Getarted/Getarted";
  import "./App.css";
  import Footer from "./Components/Footer/Footer";
  function App() {
    return (
      <div className="App">
      <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <Getarted />
        <Footer />
      </div>
    );
  }

export default App;
