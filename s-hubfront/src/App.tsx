import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./views/Signin";
import Top from "./views/Top";
import AccountSetup from "./views/Account_setup";
import Splash from './views/Splash';
import SignUp from './views/SignUp';
import Verification from './views/Verification';
import SettingPassword from './views/SettingPassword';

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path={`/`} element={<Signin />} />
        <Route path={`/Top`} element={<Top />} />
        <Route path={`/Account_setup`} element={<AccountSetup />} />
      </Routs>   */}
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/setting-password" element={<SettingPassword />} />
        <Route path="/top" element={<Top />} />
        <Route path="/account-setup" element={<AccountSetup />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
