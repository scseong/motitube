import React, { useState } from 'react'; // React와 useState 훅을 import합니다.
import { auth } from 'shared/firebase'; // Firebase 인증 서비스를 import합니다.
import 'components/Common/Mypage/PasswordChange.css'; // CSS 스타일을 import합니다.

export default function PasswordChange() {
  const [password, setPassword] = useState(''); // 새 비밀번호를 저장할 상태를 선언합니다.
  const [confirmPassword, setConfirmPassword] = useState(''); // 비밀번호 확인을 저장할 상태를 선언합니다.

  // 비밀번호를 업데이트하는 함수를 정의합니다.
  const updatePassword = () => {
    if (password !== confirmPassword) {
      // 비밀번호와 비밀번호 확인이 일치하지 않으면,
      alert('비밀번호가 일치하지 않습니다.'); // 경고를 표시하고,
      return; // 함수를 종료합니다.
    }
    const user = auth.currentUser; // 현재 로그인한 사용자를 가져옵니다.
    if (user) {
      // 사용자가 로그인한 상태인 경우에만 비밀번호 변경 작업을 수행합니다.
      user
        .updatePassword(password) // 새 비밀번호로 업데이트합니다.
        .then(() => {
          alert('비밀번호가 성공적으로 변경되었습니다.'); // 성공 알림을 표시합니다.
        })
        .catch((error) => {
          console.error(error); // 에러를 콘솔에 출력합니다.
        });
    } else {
      alert('현재 로그인한 사용자가 없습니다.'); // 사용자가 로그인하지 않은 상태라면 경고 메시지를 표시합니다.
    }
  };

  return (
    <div>
      {/* 새 비밀번호 입력 필드 */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // 사용자 입력을 password 상태에 저장합니다.
        placeholder="새 비밀번호"
      />
      {/* 비밀번호 확인 입력 필드 */}
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)} // 사용자 입력을 confirmPassword 상태에 저장합니다.
        placeholder="새 비밀번호 확인"
      />
      {/* 비밀번호 변경 버튼 */}
      <button onClick={updatePassword}>비밀번호 변경</button>
    </div>
  );
}
