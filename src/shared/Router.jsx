// Router.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, Detail, Home, Mypage, Write } from 'pages';
import Layout from 'components/Common/Layout';

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:postId" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} /> {/* 수정된 부분 */}
        <Route path="/write" element={<Write />} />
      </Route>
    </Routes>
  );
}
