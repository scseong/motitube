import React, { useState } from 'react';
import { auth } from 'shared/firebase';

export default function PasswordChange() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const updatePassword = () => {
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    const user = auth.currentUser;
    if (user) {
      user
        .updatePassword(password)
        .then(() => {
          alert('비밀번호가 성공적으로 변경되었습니다.');
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert('현재 로그인한 사용자가 없습니다.');
    }
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="새 비밀번호"
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="새 비밀번호 확인"
      />
      <button onClick={updatePassword}>비밀번호 변경</button>
    </div>
  );
}
