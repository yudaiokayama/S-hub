// PageForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PageForm {
  id: number;
  component: React.ReactNode;
}

const PageForm: React.FC = () => {
  const navigate = useNavigate();
  const [newPage, setNewPage] = useState<PageForm>({
    id: 0,
    component: null,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ここで新しいページをmypagesに追加する処理を行う
    navigate('/mypages');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Page ID"
        value={newPage.id}
        onChange={(e) => setNewPage({ ...newPage, id: Number(e.target.value) })}
      />
      <textarea
        placeholder="Page Content"
        value={newPage.component ? newPage.component.toString() : ''}
        onChange={(e) => setNewPage({ ...newPage, component: e.target.value })}
      />
      <button type="submit">Add Page</button>
    </form>
  );
};

export default PageForm;