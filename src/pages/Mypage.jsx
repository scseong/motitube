// Mypage.jsx
import React from 'react';
import ProfileManagement from 'components/Common/Mypage/ProfileManagement';
import PostManagement from 'components/Common/Mypage/PostManagement';
import PasswordChange from 'components/Common/Mypage/PasswordChange';
import 'components/Common/Mypage/Mypage.css';
export default function Mypage() {
  return (
    <div className="mypage">
      <h1>Mypage</h1>
      <ProfileManagement /> {/* Profile management component */}
      <PostManagement /> {/* Post management component */}
      <PasswordChange /> {/* Password change component */}
    </div>
  );
}
