import React, { useState, useEffect } from 'react';
import { db, storage } from '../../shared/firebase';
import { updateDoc, doc, getDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export default function ProfileManagement() {
  const [username, setUsernameState] = useState('');
  const [bio, setBioState] = useState('');
  const [avatar, setAvatarState] = useState('');
  const [avatarFile, setAvatarFile] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      if (username) {
        const docSnap = await getDoc(doc(db, 'users', username));
        if (docSnap.exists()) {
          setUsernameState(docSnap.data().username);
          setBioState(docSnap.data().bio);
          setAvatarState(docSnap.data().avatar);
        }
      }
    };

    loadProfile();
  }, [username]);

  const updateProfile = async () => {
    if (username && bio && avatar) {
      const docSnap = await getDoc(doc(db, 'users', username));

      if (docSnap.exists()) {
        setUsernameState(docSnap.data().username);
        setBioState(docSnap.data().bio);
        setAvatarState(docSnap.data().avatar);
      }

      await updateDoc(doc(db, 'users', username), { username, bio, avatar });
    }
  };

  const handleUpload = (event) => {
    setAvatarFile(event.target.files[0]);
  };

  const updateAvatar = () => {
    if (avatarFile) {
      const storageRef = ref(storage, 'avatars/' + avatarFile.name);
      const uploadTask = uploadBytesResumable(storageRef, avatarFile);

      uploadTask.on(
        'state_changed',
        (snapshot) => {},
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setAvatarState(downloadURL);
          });
        }
      );
    }
  };

  return (
    <div>
      <label>Profile Image:</label>
      <input type="file" onChange={handleUpload} />
      <button onClick={updateAvatar}>Update Profile Image</button>

      <div>
        <label>Current Profile Image:</label>
        {avatar && <img src={avatar} alt="Current Avatar" />}
      </div>

      <div>
        <label>New Profile Image:</label>
        {avatarFile && <img src={URL.createObjectURL(avatarFile)} alt="New Avatar" />}
      </div>

      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsernameState(e.target.value)} />
      <button onClick={updateProfile}>Update Username</button>

      <label>Bio:</label>
      <input type="text" value={bio} onChange={(e) => setBioState(e.target.value)} />
      <button onClick={updateProfile}>Update 한줄소개</button>
    </div>
  );
}
