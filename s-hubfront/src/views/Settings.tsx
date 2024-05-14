import React, { useState } from 'react';
import axios from 'axios';
import './css/Settings.css';

const Settings: React.FC = () => {
  const [profileImg, setProfileImg] = useState('');
  const [profileName, setProfileName] = useState('');
  const [profileText, setProfileText] = useState('');
  const [bio, setBio] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [socialLinks, setSocialLinks] = useState({
    instagram: '',
    facebook: '',
    linkedin: '',
    github: '',
    huggingface: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // フォームの入力値をバックエンドのAPIに送信する
      await axios.post('/api/settings', {
        profileImg,
        profileName,
        // 他の入力値も追加
      });
      alert('Settings saved successfully!');
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('Failed to save settings. Please try again later.');
    }
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Profile Image:
          <input type="file" accept="image/*" onChange={(e) => setProfileImg(e.target.value)} />
        </label>
        <label>
          Profile Name:
          <input type="text" value={profileName} onChange={(e) => setProfileName(e.target.value)} />
        </label>
        <label>
          Profile Text:
          <textarea value={profileText} onChange={(e) => setProfileText(e.target.value)} />
        </label>
        <label>
          Bio:
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
        </label>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <h3>Social Links:</h3>
        <label>
          Instagram:
          <input
            type="url"
            value={socialLinks.instagram}
            onChange={(e) => setSocialLinks({ ...socialLinks, instagram: e.target.value })}
          />
        </label>
        <label>
          Facebook:
          <input
            type="url"
            value={socialLinks.facebook}
            onChange={(e) => setSocialLinks({ ...socialLinks, facebook: e.target.value })}
          />
        </label>
        <label>
          LinkedIn:
          <input
            type="url"
            value={socialLinks.linkedin}
            onChange={(e) => setSocialLinks({ ...socialLinks, linkedin: e.target.value })}
          />
        </label>
        <label>
          GitHub:
          <input
            type="url"
            value={socialLinks.github}
            onChange={(e) => setSocialLinks({ ...socialLinks, github: e.target.value })}
          />
        </label>
        <label>
          Hugging Face:
          <input
            type="url"
            value={socialLinks.huggingface}
            onChange={(e) => setSocialLinks({ ...socialLinks, huggingface: e.target.value })}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Settings;