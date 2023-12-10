// ProfileManagement.jsx
// 사용자의 프로필 데이터를 Firestore 데이터베이스에서 불러옵니다.
// 사용자가 프로필 사진을 업로드하면, 이를 Firebase 스토리지에 저장합니다.
// 사용자가 사용자 이름이나 한 줄 소개를 업데이트하면, 이를 Firestore 데이터베이스에 업데이트합니다.
// 사용자가 프로필 사진이나 사용자 이름을 업데이트하면, 이를 Redux 스토어에도 반영합니다.
import React, { useState, useEffect } from 'react';
import { db, storage } from 'shared/firebase'; // Firebase 데이터베이스와 스토리지를 import합니다.
import { useDispatch } from 'react-redux'; // Redux의 dispatch 함수를 사용하기 위해 import합니다.
import { setUsername, setAvatarURL } from '../../../redux/config/profileSlice'; // Redux의 액션 생성 함수를 import합니다.
import { updateDoc, doc, getDoc } from 'firebase/firestore'; // Firebase의 Firestore 데이터베이스를 위한 함수를 import합니다.
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'; // Firebase의 스토리지를 위한 함수를 import합니다.
import 'components/Common/Mypage/ProfileManagement.css'; // CSS 스타일을 import합니다.

// 프로필 관리 컴포넌트를 정의합니다.
export default function ProfileManagement() {
  // State 변수를 선언합니다. 이 변수들은 컴포넌트의 상태를 관리합니다.
  const [username, setUsernameState] = useState('');
  const [bio, setBioState] = useState('');
  const [avatar, setAvatarState] = useState('');
  const [avatarFile, setAvatarFile] = useState(null);

  const dispatch = useDispatch(); // Redux의 dispatch 함수를 가져옵니다.

  // 컴포넌트가 마운트될 때 현재 프로필 데이터를 로드합니다.
  useEffect(() => {
    const loadProfile = async () => {
      if (username) {
        const docSnap = await getDoc(doc(db, 'users', username)); // Firestore 데이터베이스에서 사용자 문서를 가져옵니다.
        if (docSnap.exists()) {
          setUsernameState(docSnap.data().username); // 사용자 이름을 상태로 설정합니다.
          setBioState(docSnap.data().bio); // 한 줄 소개를 상태로 설정합니다.
          setAvatarState(docSnap.data().avatar); // 프로필 사진 URL을 상태로 설정합니다.
        }
      }
    };

    loadProfile(); // 프로필 데이터를 로드하는 함수를 호출합니다.
  }, [username]);

  // 프로필 업데이트를 처리하는 함수를 정의합니다.
  const updateProfile = async () => {
    if (username && bio && avatar) {
      const docSnap = await getDoc(doc(db, 'users', username)); // Firestore 데이터베이스에서 사용자 문서를 가져옵니다.

      if (docSnap.exists()) {
        setUsernameState(docSnap.data().username); // 사용자 이름을 상태로 설정합니다.
        setBioState(docSnap.data().bio); // 한 줄 소개를 상태로 설정합니다.
        setAvatarState(docSnap.data().avatar); // 프로필 사진 URL을 상태로 설정합니다.
      }

      // Firestore 데이터베이스에서 사용자 문서를 업데이트합니다.
      await updateDoc(doc(db, 'users', username), { username, bio, avatar });
      // Redux 스토어에 액션을 dispatch하여 상태를 업데이트합니다.
      dispatch(setUsername(username));
      dispatch(setAvatarURL(avatar));
    }
  };

  // 파일 업로드를 처리하는 함수를 정의합니다.
  const handleUpload = (event) => {
    setAvatarFile(event.target.files[0]); // 선택한 파일을 상태로 설정합니다.
  };

  // 프로필 사진 업데이트를 처리하는 함수를 정의합니다.
  const updateAvatar = () => {
    if (avatarFile) {
      const storageRef = ref(storage, 'avatars/' + avatarFile.name); // Firebase 스토리지에 파일을 업로드하기 위한 참조를 생성합니다.
      const uploadTask = uploadBytesResumable(storageRef, avatarFile); // 파일 업로드 작업을 시작합니다.

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // 업로드 진행 상황을 처리합니다.
        },
        (error) => {
          // 업로드 실패를 처리합니다.
          console.error(error);
        },
        () => {
          // 업로드 완료를 처리합니다.
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setAvatarState(downloadURL); // 업로드된 파일의 다운로드 URL을 상태로 설정합니다.
          });
        }
      );
    }
  };

  return (
    <div className="profile-management">
      {/* 프로필 사진 업로드 */}
      <label>Profile Image:</label>
      <input type="file" onChange={handleUpload} />
      <button onClick={updateAvatar}>Update Profile Image</button>

      {/* 현재 프로필 사진 */}
      <div>
        <label>Current Profile Image:</label>
        {avatar && <img src={avatar} alt="Current Avatar" />}
      </div>

      {/* 새로 업로드한 프로필 사진 */}
      <div>
        <label>New Profile Image:</label>
        {avatarFile && <img src={URL.createObjectURL(avatarFile)} alt="New Avatar" />}
      </div>

      {/* 사용자 이름 업데이트 */}
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsernameState(e.target.value)} />
      <button onClick={updateProfile}>Update Username</button>

      {/* 한 줄 소개 업데이트 */}
      <label>Bio:</label>
      <input type="text" value={bio} onChange={(e) => setBioState(e.target.value)} />
      <button onClick={() => updateProfile('bio')}>Update 한줄소개</button>
    </div>
  );
}
