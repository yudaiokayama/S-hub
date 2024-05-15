import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../mypages/Mypage.css';

interface QRButtonProps {
  mode: 'Formal' | 'Casual';
}

const QRButton: React.FC<QRButtonProps> = ({ mode }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/qr-show?mode=${mode}`);
  };

  return (
    <button className="qr-button" onClick={handleClick}>
      QRを表示
    </button>
  );
};

export default QRButton;
