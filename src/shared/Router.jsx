// Router.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import { Register, Login, Detail, Home, Mypage, Write } from 'pages';
=======
import { Login, Detail, Home, Mypage, Write } from 'pages';
>>>>>>> 7e718c2164e98317ae3322c1eaddd5854da14658
import Layout from 'components/Common/Layout';

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:postId" element={<Detail />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/register" element={<Register />} />
        <Route path="/mypage" element={<Mypage />} />
=======
        <Route path="/mypage" element={<Mypage />} /> {/* 수정된 부분 */}
>>>>>>> 7e718c2164e98317ae3322c1eaddd5854da14658
        <Route path="/write" element={<Write />} />
      </Route>
    </Routes>
  );
}
