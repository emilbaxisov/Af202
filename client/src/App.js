
import './App.css';

import About from './pages/about';
import Contact from './pages/contsact';
import Courses from './pages/courses';
import Element from './pages/elements';
import Home from './pages/home';
import News from './pages/news';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/courses"} element={<Courses/>}/>
        <Route path={"/elements"} element={<Element/>}/>
        <Route path={"/news"} element={<News/>}/>
        <Route path={"/contsact"} element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
