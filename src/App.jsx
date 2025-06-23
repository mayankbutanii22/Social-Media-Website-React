
import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import HomeFeed from './Pages/HomeFeed';
import Profile from './Pages/Profile';
import Explore from './Pages/Explore';
import Messages from './Pages/Messages';
import Notifications from './Pages/Notifications';
import CreatePost from './Pages/CreatePost';
import Settings from './Pages/Settings';

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomeFeed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;


