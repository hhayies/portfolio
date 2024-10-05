import './App.css';
import BlogPage from './components/blogPage';
import Header from './components/header';
import HomePage from './components/homepage';
import Gsap from './components/gsap';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/sns" element={<Gsap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
