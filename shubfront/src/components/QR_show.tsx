import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../mypages/Mypage.css';

const QR_show: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const params = new URLSearchParams(location.search);
  const mode = params.get('mode');

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        const response = await fetch(`/api/get-qr-code?mode=${mode}`);
        const data = await response.json();
        setQrCodeUrl(data.qrCodeUrl);
      } catch (error) {
        console.error('Error fetching QR code:', error);
      }
    };

    fetchQRCode();
  }, [mode]);

  return (
    <div className="qr-page">
      <h1>{mode === 'Formal' ? 'Formal' : 'Casual'}</h1>
      {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" className="qr-code" />}
      <button className="scan-button">QRコード読み取り</button>
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default QR_show;
