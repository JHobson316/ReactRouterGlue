import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Contact from "./routes/Contact";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="testpage" element={<TestPage />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <h3>Enjoy Your Visit</h3>
      <Footer />
    </div>
  );
}

function Main() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link> |
        | <Link to="/testpage">Test Page</Link> |
        | <Link to="/contact">Contacts</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link> |
         | <Link to="/testpage">Test Page</Link>
      </nav>
    </>
  );
}

function TestPage() {
  return (
    <>
      <main>
        <h2>Testing...</h2>
        <p>Hello? Anyone there?</p>
      </main>
      <nav>
        <Link to="/">Home</Link> |
        | <Link to="/about">About</Link>
      </nav>
    </>
  );
}
export default App;
