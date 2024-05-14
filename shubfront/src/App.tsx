import React from 'react';
import { Routes, Route } from "react-router-dom";
import Splash from './views/Splash';
import SignUp from './views/SignUp';
import Verification from './views/Verification';
import SettingPassword from './views/SettingPassword';
import PageSwiper from './components/PageSwiper';
import PageForm from './components/PageForm';
import Search from './views/Search';
import Network from './views/Network';
import Settings from './views/Settings';
import SignIn from './views/SignIn';
import AccountSetup from './views/AccountSetup';
import Header from './views/MypageHeader';
import Nav from './views/Nav';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/setting-password" element={<SettingPassword />} />
      <Route path="/mypages" element={<PageSwiper />} />
      <Route path="/search" element={<Search />} />
      <Route path="/network" element={<Network />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/account-setup" element={<AccountSetup />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>

  );
}

export default App;
