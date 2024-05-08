// AccountSetup.tsx
import React, { useState } from 'react';
import './AccountSetup.css';

interface AccountSetupProps {}

const AccountSetup: React.FC<AccountSetupProps> = () => {
 const [firstName, setFirstName] = useState<string>('');
 const [middleName, setMiddleName] = useState<string>('');
 const [lastName, setLastName] = useState<string>('');
 const [preferredFirstName, setPreferredFirstName] = useState<string>('');

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   // Handle form submission logic here
 };

 return (
   <div className="account-setup">
     <h2>Account Setup</h2>
     <div className="s-hub">S-Hub</div>
     <form onSubmit={handleSubmit}>
       <div className="form-group">
         <div className="user-icon">
           <svg>
             {/* User icon SVG code */}
           </svg>
         </div>
         <div className="form-field">
           <label htmlFor="firstName">First Name *</label>
           <input
             type="text"
             id="firstName"
             value={firstName}
             onChange={(e) => setFirstName(e.target.value)}
             required
           />
         </div>
         <div className="form-field">
           <label htmlFor="middleName">Middle Name</label>
           <input
             type="text"
             id="middleName"
             value={middleName}
             onChange={(e) => setMiddleName(e.target.value)}
           />
         </div>
         <div className="form-field">
           <label htmlFor="lastName">Last Name *</label>
           <input
             type="text"
             id="lastName"
             value={lastName}
             onChange={(e) => setLastName(e.target.value)}
             required
           />
         </div>
         <div className="form-field">
           <label htmlFor="preferredFirstName">Preferred first name</label>
           <input
             type="text"
             id="preferredFirstName"
             value={preferredFirstName}
             onChange={(e) => setPreferredFirstName(e.target.value)}
           />
         </div>
         <div className="form-actions">
           <button type="button" className="back-btn">Back</button>
           <button type="submit" className="go-btn">Go</button>
         </div>
       </div>
     </form>
   </div>
 );
};

export default AccountSetup;