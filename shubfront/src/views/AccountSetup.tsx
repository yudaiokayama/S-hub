import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/AccountSetup.css';
import MypageHeader from './MypageHeader'; // 修正
import Button from './Button';

const AccountSetup: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="account-setup">
      <MypageHeader title="Account Setup" /> {/* 修正 */}
      <div className="form-group">
        <label htmlFor="photo">Photo</label>
        <input type="file" id="photo" />
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" />
        <label htmlFor="middleName">Middle Name</label>
        <input type="text" id="middleName" />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" />
        <label htmlFor="preferredName">Preferred First Name</label>
        <input type="text" id="preferredName" />
      </div>
      <div className="form-actions">
        <Button text="Back" onClick={() => navigate('/sign-in')} />
        <Button text="Go" onClick={() => navigate('/mypages')} />
      </div>
    </div>
  );
};

export default AccountSetup;
