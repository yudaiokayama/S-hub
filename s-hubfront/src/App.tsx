import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from './views/Splash';
import SignUp from './views/SignUp';
import Verification from './views/Verification';
import SettingPassword from './views/SettingPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/setting-password" element={<SettingPassword />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
