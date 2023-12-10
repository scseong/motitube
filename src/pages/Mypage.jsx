// Mypage.jsx
import React from 'react';
import ProfileManagement from 'components/Mypage/ProfileManagement';
import PostManagement from 'components/Mypage/PostManagement';
import PasswordChange from 'components/Mypage/PasswordChange';
export default function Mypage() {
  return (
    <div>
      <h1>Mypage</h1>
      <ProfileManagement /> {/* Profile management component */}
      <PostManagement /> {/* Post management component */}
      <PasswordChange /> {/* Password change component */}
    </div>
  );
}
