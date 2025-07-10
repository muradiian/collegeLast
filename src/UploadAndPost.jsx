import React, { useState } from 'react';
import axios from 'axios';

export default function UploadAndPost() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const uploadImage = async () => {
    const token = localStorage.getItem('token');
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

    alert('✅ Пост создан!');
  };

  return (
    <div>
      <input placeholder="Заголовок" onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Контент" onChange={(e) => setContent(e.target.value)} />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={createPost}>Создать пост</button>
    </div>
  );
}