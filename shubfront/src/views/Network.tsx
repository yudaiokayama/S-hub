import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/network.css';
import Header from './Header';
import Nav from './Nav';

interface User {
  id: number;
  name: string;
  icon: string; // アイコンのURLを仮定しています
}

const Network: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users'); // ここでバックエンドのエンドポイントを指定します
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="network">
      <Header title="Network" />
      <main>
        {/* ↓ここから削除 */}
        <div className="user-item">
          <div className="user-icon"></div>
          <div className="user-name">User Name</div>
        </div>
        <div className="user-item">
          <div className="user-icon"></div>
          <div className="user-name">User Name</div>
        </div>
        <div className="user-item">
          <div className="user-icon"></div>
          <div className="user-name">User Name</div>
        </div>
        <div className="user-item">
          <div className="user-icon"></div>
          <div className="user-name">User Name</div>
        </div>
        {/* ここまで */}
        <div className="user-list">
          {users.map((user) => (
            <div className="user-item" key={user.id}>
              <div className="user-icon">
                <img src={user.icon} alt={`${user.name}'s icon`} />
              </div>
              <div className="user-name">{user.name}</div>
            </div>
          ))}
        </div>
      </main>
      <Nav />
    </div>
  );
};

export default Network;



