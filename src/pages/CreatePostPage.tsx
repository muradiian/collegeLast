import React, { useState } from 'react';
import axios from 'axios';

const CreatePostPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const uploadImage = async () => {
    const token = localStorage.getItem('token');
    if (!file) return null;
    const formData = new FormData();
    formData.append('files', file);

    const res = await axios.post('http://localhost:1337/api/upload', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return res.data[0].id;
  };

  const createPost = async () => {
    const token = localStorage.getItem('token');
    const imageId = await uploadImage();

    await axios.post(
      'http://localhost:1337/api/posts',
      {
        data: {
          title,
          content,
          image: imageId,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert('✅ Пост создан');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Создать пост</h2>
      <input className="border p-2 mb-2 block" placeholder="Заголовок" onChange={(e) => setTitle(e.target.value)} />
      <textarea className="border p-2 mb-2 block" placeholder="Контент" onChange={(e) => setContent(e.target.value)} />
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="mb-2" />
      <button onClick={createPost} className="bg-purple-600 text-white px-4 py-2">Создать</button>
    </div>
  );
};

export default CreatePostPage;
