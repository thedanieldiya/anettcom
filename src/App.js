import React from 'react';
import './App.css';
import { Header } from './containers'
// import { Anettcom } from './assets'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contact, Home, Nopage, Services, Software, Training } from './pages';

function App() {
  return (
    <div className="App">
      <div className='app__header'>
        {/* <img src={Anettcom} alt="" /> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Header/>}>
              <Route index element={<Home />} />
              <Route path='services' element={<Services/>} />
              <Route path='training' element={<Training/>} />
              <Route path='software' element={<Software />} />
              <Route path='contactus' element={<Contact />} />
              <Route path='*' element={<Nopage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      {/* <Header /> */}
    </div>
  );
}

export default App;
