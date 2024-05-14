import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Search.css';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 検索クエリを使用して検索処理を実行する
    // 例えば、バックエンドのAPIに検索クエリを送信して結果を取得するなど
    console.log('Search query:', searchQuery);
  };

  const handleQRCodeClick = () => {
    // QRコード画面に遷移する
    navigate('/qrFormal');
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
        />
        <button type="submit" className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <div className="qr-code-icon" onClick={handleQRCodeClick}>
        <i className="fas fa-qrcode"></i>
      </div>
    </div>
  );
};

export default Search;
