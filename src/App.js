import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Main/Main_content/Profile/Profile';
import Sidebar from './components/Main/Sidebar/Sidebar';
import './reset.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dialogs from './components/Main/Main_content/Dialogs/Dialogs';
import Friends from './components/Main/Main_content/Friends/Friends';
import Music from './components/Main/Main_content/Music/Music';
import Settings from './components/Main/Main_content/Settings/Settings';


const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className='Main'>
          <div className='Main__container _container'>
            <Sidebar />
            <Routes>
              <Route path="/profile/*" element={<Profile />} />
              <Route path="/dialogs/*" element={<Dialogs />} />
              <Route path="/friends/*" element={<Friends />} />
              <Route path="/music/*" element={<Music />} />
              <Route path="/settings/*" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
