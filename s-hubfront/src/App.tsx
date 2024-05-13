import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from './views/Splash';
import SignUp from './views/SignUp';
import Verification from './views/Verification';
import SettingPassword from './views/SettingPassword';
import PageSwiper from './components/PageSwiper';
import PageForm from './components/PageForm';
import Search from './views/Search';
import Network from './views/Network';
import Settings from './views/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/setting-password" element={<SettingPassword />} />
        <Route path="/mypages" element={<PageSwiper />} />
        <Route path="/search" element={<Search />} />
        <Route path="/network" element={<Network />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

