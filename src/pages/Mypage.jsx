// Mypage.jsx
import React from 'react';
<<<<<<< HEAD
import ProfileManagement from 'components/Mypage/ProfileManagement';
import PostManagement from 'components/Mypage/PostManagement';
import PasswordChange from 'components/Mypage/PasswordChange';
export default function Mypage() {
  return (
    <div>
=======
import ProfileManagement from 'components/Common/Mypage/ProfileManagement';
import PostManagement from 'components/Common/Mypage/PostManagement';
import PasswordChange from 'components/Common/Mypage/PasswordChange';
import 'components/Common/Mypage/Mypage.css';
export default function Mypage() {
  return (
    <div className="mypage">
>>>>>>> 7e718c2164e98317ae3322c1eaddd5854da14658
      <h1>Mypage</h1>
      <ProfileManagement /> {/* Profile management component */}
      <PostManagement /> {/* Post management component */}
      <PasswordChange /> {/* Password change component */}
    </div>
  );
}
