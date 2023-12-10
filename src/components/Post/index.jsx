import React from 'react';
import {
  StDiv,
  StForm,
  StButtonDiv,
  StSelect,
  StButton,
  StInputDiv,
  StUrlTitleInput,
  StContentTextarea
} from './styles';
import { formattedDate } from 'util/date';
import useInput from 'hooks/useInput';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from 'react-query';
import { addPost } from 'api/post';
import { useSelector } from 'react-redux';

export default function Post() {
  const { value: url, onChange: handleUrlChange } = useInput();
  const { value: title, onChange: handleTitleChange } = useInput();
  const { value: content, onChange: handleContentChange } = useInput();
  const { value: tag, onChange: handleSelect } = useInput('success');
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { email, displayName, photoURL } = useSelector((state) => state.authSlice);

  const selectList = [
    { value: 'success', name: '성공' },
    { value: 'finance', name: '금융' },
    { value: 'time management', name: '시간관리' },
    { value: 'relationships', name: '인간관계' },
    { value: 'etc', name: '기타' }
  ];

  const mutationAddPost = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post'] });
    },
    onError: (error) => {
      console.log(error);
    }
  });

  const onClickAddPostButtonHandler = (e) => {
    e.preventDefault();
    if (!url) {
      return toast.error('url을 입력해주세요.');
    } else if (!title) {
      return toast.error('제목을 입력해주세요.');
    } else if (!content) {
      return toast.error('내용을 입력해주세요.');
    }

    const videoId = url.split('=')[1];
    const newPost = {
      url,
      title,
      content,
      tag,
      id: uuidv4(),
      timestamp: formattedDate(Date.now()),
      avatar: photoURL,
      likes: 0,
      userId: email,
      userName: displayName,
      thumbnail: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
      videoId
    };
    mutationAddPost.mutate(newPost);
    alert('게시물이 등록되었습니다.');
    navigate('/');
  };

  return (
    <StDiv>
      <StForm onSubmit={onClickAddPostButtonHandler}>
        <StButtonDiv>
          <StSelect value={tag} onChange={handleSelect}>
            {selectList.map((item) => {
              return (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              );
            })}
          </StSelect>
          <StButton type="submit">등록하기</StButton>
        </StButtonDiv>

        <StInputDiv>
          <StUrlTitleInput
            type="url"
            value={url}
            placeholder="URL을 입력하세요."
            onChange={handleUrlChange}
          />
          <StUrlTitleInput
            type="text"
            value={title}
            placeholder="제목을 입력하세요."
            onChange={handleTitleChange}
          />
          <StContentTextarea
            type="text"
            value={content}
            placeholder="내용을 입력하세요."
            onChange={handleContentChange}
          />
        </StInputDiv>
      </StForm>
    </StDiv>
  );
}

