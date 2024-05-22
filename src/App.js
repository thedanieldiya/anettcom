import React from 'react';
import './App.css';
import { Header } from './containers'
// import { Anettcom } from './assets'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Branding, Contact, Corporate, Ednify, Home, Letplus, Mobileapp, Nopage, Pavicoop, Services, Software, Softwaredev, Training, UIUX, Webdev, Webtraining } from './pages';

function App() {
  return (
    <div className="App">
      <div className='app__header'>
        {/* <img src={Anettcom} alt="" /> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Header/>}>
              <Route index element={<Home />} />
              <Route exact path='/services' element={<Services/>} />
              <Route exact path='/services/web_development' element={<Webdev />}/>
              <Route exact path='/services/uiux' element={<UIUX />} />
              <Route exact path='/services/mobile_app' element={<Mobileapp />} />
              <Route exact path='/services/branding' element={<Branding />} />
              <Route exact path='/services/software_development' element={<Softwaredev />} />
              <Route exact path='/services/ednify' element={<Ednify />} />
              <Route exact path='/services/pavicoop' element={<Pavicoop />} />
              <Route exact path='/services/letplus' element={<Letplus />} />
              <Route exact path='/services/corporate_training' element={<Corporate />} />
              <Route exact path='/services/web_training' element={<Webtraining />} />
              <Route exact path='/training' element={<Training/>} />
              <Route exact path='/software' element={<Software />} />
              <Route exact path='/contactus' element={<Contact />} />
              <Route exact path='*' element={<Nopage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      {/* <Header /> */}
    </div>
  );
}

export default App;
