import logo from './logo.svg';
import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import React, { useEffect} from "react";
// import DocumentMeta from 'react-document-meta';

function App() {
  // useEffect(() => {
  //   document.title = "Abel Roy.";
  //   document.description = "Portfolio Website developed on React JS";
  //   document.getElementsByTagName("META")[2].content="Portfolio Website developed on React";
  //   }, []);
  // const meta = {
  //   title: 'Abel Roy',
  //   description: 'Portfolio Website developed on React JS',
  //   meta: {
  //       charset: 'utf-8',
  //       name: {
  //           keywords: 'react,javascript,portfolio,abelroy,website,gsap'
  //       }
  //   }
  // }

  return (
    <>
      {/* <DocumentMeta {...meta} /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App