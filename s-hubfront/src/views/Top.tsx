//Top.tsx
export {};

import { useNavigate } from "react-router-dom";

export default function Top() {
    const navigate = useNavigate();
    
    return (
        <div className="container">
        <h1>Top Page</h1>
        <button 
            onClick={() => navigate('/')}
            >ログアウト
        </button>
        </div>
    );
}