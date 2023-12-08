import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from 'shared/firebase';
import {
  StAvatar,
  StContent,
  StPostContainer,
  Stusername,
  Sttimestamp
  // Strecommendation
} from './styles';

const Category = () => {
  const [posts, setPosts] = useState([]);
  const [sortedPosts, setSortedPosts] = useState([...posts]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapShot = await getDocs(collection(db, 'post'));
      const postDataArray = [];
      querySnapShot.forEach((doc) => {
        const data = {
          id: doc.id,
          ...doc.data()
        };
        postDataArray.push(data);
      });
      setPosts(postDataArray);
    };

    fetchData();
  }, []);
  // const handleSortByLikes = () => {
  //   // 추천순 작동안댐
  //   const SortedPosts = [...posts].sort((a, b) => b.likes - a.likes);
  //   setSortedPosts(SortedPosts);
  // };
  return (
    <StPostContainer>
      {/* <div>
        <Strecommendation onClick={handleSortByLikes}>추천순</Strecommendation>
      </div> */}

      {posts.map((item) => (
        <div key={item.id}>
          <Sttimestamp>{item.timestamp}</Sttimestamp>
          <div>
            <StAvatar src={item.avatar} />
          </div>
          <div>
            <Stusername>유저이름:{item.userName}</Stusername>
          </div>
          <div>
            <StContent>내용:{item.content}</StContent>
          </div>
          <div>좋아요:{item.likes}♥</div>
        </div>
      ))}
    </StPostContainer>
  );
};

export default Category;
