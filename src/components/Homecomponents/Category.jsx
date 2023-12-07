import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { db } from 'shared/firebase';

function Category() {
  useEffect(() => {
    const fetchData = async () => {
      const querySnapShot = await getDocs(collection(db, 'post'));
      querySnapShot.forEach((doc) => {
        const data = {
          id: doc.id,
          ...doc.data()
        };
        console.log(data);
      });
    };
    fetchData();
  }, []);
  return (
    <div>
      <ul>
        <li>성공</li>
        <li>시간관리</li>
        <li>꿈</li>
        <li>금융</li>
        <li>커뮤니케이션</li>
        <li>리더쉽</li>
        <li>문제해결능력</li>
        <li>공감</li>
        <li>라이프스타일</li>
      </ul>
    </div>
  );
}
export default Category;
