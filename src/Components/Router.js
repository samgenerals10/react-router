import React from 'react'
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import About from './About';
import Home from "./Home"
import Contact from './Contact';
import Services from './Services';
import {Button,Stack} from "react-bootstrap"

const Router = () => {
  return (
    <BrowserRouter>
        <nav>
          <Stack direction="vertical" gap={2}>
            <Link to="/"> <Button variant="primary">Home</Button></Link>
            <Link to="/about"><Button variant="danger">About</Button></Link>
            <Link to="/contact"><Button variant="warning">Contacts</Button></Link>
            <Link to="/services"><Button variant="dark">Services</Button></Link>
            </Stack>
        </nav>

        <hr />
        <Routes>
           <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        </Routes>

       
    </BrowserRouter>
  )
}

export default Router



