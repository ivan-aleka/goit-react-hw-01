// import { useState } from 'react';
import './App.css';

import Profile from './components/Profile/Profile';
import userData from './userData.json';

export default function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
}
