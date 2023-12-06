## 내배캠 React 3기 A-2조 아웃소싱 프로젝트

### 📢 프로젝트 개요

**23. 12. 05 - 23. 12. 11**

- 프로젝트명: **MotiTube (Motivation + YouTube)**
- 주제: 동기부여 동영상을 추천하는 커뮤니티
- 내용: 사용자들이 동영상에 대한 댓글을 남기고, 좋아요를 표시할 수 있으며, 자신이 좋아하는 동영상을 직접 업로드하여 추천도 할 수 있는 커뮤니티 공간

### 👥 팀 소개

- 팀명: 우공2산(愚公2山)
- 팀원: 안준표, 강호수, 손창성, 윤유빈, 이아름

### [💡 구현 기능](https://github.com/scseong/motitube/wiki/%EA%B8%B0%EB%8A%A5-%EB%AA%A9%EB%A1%9D#%ED%95%84%EC%88%98%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD)

#### 필수요구사항

- 회원가입/로그인
  - 사용자가 이메일과 비밀번호를 입력할 수 있는 텍스트 필드와 전송 버튼
  - 소셜 로그인
- 마이 페이지
  - 프로필 사진과 사용자 정보 표시
  - 프로필 사진 등록, 변경, 닉네임, 소개글 수정
  - 작성한 게시글 목록, 좋아요한 게시글 목록
- 메인 페이지
  - 네비게이션 헤더 (로고, 로그인/로그아웃, 유저 아이콘, 페이지 이동 네비게이션)
  - 조회수 높은 영상 목록순으로 배치
  - 카드에는 동영상 제목, 업로드한 사용자 이름, 조회수, 썸네일, 좋아요 수 등의 정보 표시
  - 카드를 클릭하면 해당 동영상의 상세 페이지로 이동
- 상세 페이지
  - 동영상 플레이어와 게시글 제목, 내용, 게시 시간, 간략한 작성자 정보
  - 좋아요
  - 댓글 작성 및 댓글 목록
- 게시글 작성 페이지
  - 게시글 제목, 내용, 동영상 링크 입력폼
- 검색
  - 게시글, 사용자로 검색하여 결과 표시

### 📝 역할 분담

| 안준표      | 강호수      | 손창성      | 윤유빈      | 이아름           |
| ----------- | ----------- | ----------- | ----------- | ---------------- |
| 메인 페이지 | 마이 페이지 | 상세 페이지 | 게시글 작성 | 회원가입, 로그인 |

### 🚩 개발 내용
#### 💻 개발 환경
- IDE: Visual Studio Code
- OS: windows, Mac
- Package Manager: Yarn Classic (v1.22.19)
- React boilerplate: create-react-app

#### 📌 사용 기술

- React - 사용자와 상호작용할 수 있는 UI를 효율적으로 구현
- Redux Toolkit - 전역 상태 관리 도구
- React-router-dom - 클라이언트 사이드 라우팅. URL에 맞는 컴포넌트 렌더링
- Styled-components - 자바스크립트로 스타일 관리. 재사용이 쉬운 컴포넌트를 만들고 동적 스타일링 용이
- Firebase - 사용자 인증과 데이터베이스 등의 서버 기능 제공
- React Query - 비동기 관련 로직과 상태를 관리

####  🗼 초기 화면 설계

| 글쓰기 페이지                                                | 메인 페이지                                                  | 상세페이지                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![image](https://github.com/scseong/motitube/assets/82589401/4e27b82f-47cf-49b0-98ab-57071fce9f11) | ![image](https://github.com/scseong/motitube/assets/82589401/de833b3e-47d6-4c31-8711-f1e6d7bbf220) | ![image](../assets/images/README/56c787fd-5f56-4767-a592-da249e0934a7.png) |

| 로그인                                                       | 회원가입                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![image](https://github.com/scseong/motitube/assets/82589401/395df2b7-48f0-46fd-9333-8c4e18c0b354) | ![image](https://github.com/scseong/motitube/assets/82589401/d879c103-c2c6-47c4-8c96-38a353cf2ff1) |



#### 📂 디렉토리 구조
```
📦 project
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂api
 ┃ ┣ 📂assets
 ┃ ┣ 📂constants
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂component1
 ┃ ┃ ┃ ┣📜component1.jsx
 ┃ ┃ ┃ ┗📜styles.js
 ┃ ┃ ┣ 📂component2
 ┃ ┃ ┃ ┣📜component2.jsx
 ┃ ┃ ┃ ┗📜styles.js
 ┃ ┣ 📂hooks
 ┃ ┣ 📂mock
 ┃ ┣ 📂pages
 ┃ ┣ 📂shared
 ┃ ┣ 📂styles
 ┃ ┣ 📂redux
 ┃ ┃ ┣ 📂config
 ┃ ┃ ┗ 📂modules
 ┃ ┣ 📜App.jsx
 ┃ ┗ 📜index.js
 ┣ 📜.eslintrc
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜jsconfig.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜yarn.lock
```

- `api/` 서버와의 통신에 사용되는 코드
- `assets/` 멀티미디어 파일(이미지, 폰트)
- `constants/` 상수 (색상, 공유되는 값 등)
- `components/` 재사용 가능한 컴포넌트
- `hooks/` 커스텀 훅
- `mock/` 샘플 데이터
- `pages/` 라우팅되는 페이지 컴포넌트
- `shared/` 공통적으로 사용되는 리소스
- `styles/` 스타일 관련
- `redux/` 리덕스 관련 파일

### [📃 코드 컨벤션](https://github.com/scseong/motitube/wiki/%EC%BD%94%EB%93%9C-%EC%BB%A8%EB%B2%A4%EC%85%98)

### [🚥 깃 전략](https://github.com/scseong/motitube/wiki/%EA%B9%83-%EC%A0%84%EB%9E%B5)
