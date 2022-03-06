# <h1>멋쟁이 사자처럼 React로 쇼핑몰 만들기</h1>

## 웹팩
1. 여러 파일의 자바스크립트 코드를 압축하여 최적화 -> 로딩에 필요한 네트워크 자원을 줄일 수 있다.
2. 모듈 단위로 개발 가능: 가독성 + 쉬운 유지보수


<br/>

## 바벨
최신 자바스크립트 문법을 지원하지 브라우저들에, 최신 자바스크립트 문법을 지원하도록 변환시켜주는 라이브러리

```js
//Babel Input:ES6 Arrow Function
[1,2,3].map( n => n + 1 );

// Babel Output: ES5 Equivalent
[1,2,3].map(function(n){
  return n + 1;
})
```
<br/>

---

## Create-React-App
- React앱 Install
- Babel & Webpack 설정이 이미 돼어있음

- 설치명령어
create-react-app + 경로 (./) 현재경로에 설치
```shell
$ npx create-react-app ./
```

### npx란?
- npx는 Node Package 실행을 도와주는 도구
- npm registry(라이브러리들이 저장된 공간)에 있는 package를 가져와서 현재 폴더(react-clayful-app)에 설치해줌



### SPA (Single Page Application)
- Multi Page Application 전통적인 페이지 구성은 각 페이지마다 html을 생성하였다.
- React는 웹사이트의 전체 페이지를 하나의 페이지에 담아 동적으로 화면을 바꿔가며 표현한다.

<br/>

#### Q. SPA에서 화면변경은 어떻게 일어나나?
- History API를 사용하여, 하나의 페이지 내에서 화면 이동이 일어난 것처럼 보여준다.
- ReactRouterDom 사용

```shell
$ npm install react-router-dom --save
```

<br/>

```js
// 중요: "Routes"를 써야 에러가 안 난다 
// Router ==> 에러남
// Uncaught Error: You cannot render a <Router> inside another <Router>. You should never have more than one in your app.
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
    </Routes>
  );
}
```



### ES7 React/Redux/GraphQL/React-Native Snippets (Plugin) 다운받기
```js
   //rfce 입력  > 스니팻 선택
  import React from 'react'

  function App() {
    return (
      <div>App</div>
    )
  }

  export default App
```

<br/>

---

## React-Bootstrap
- CSS를 생산성있게 구현해주는 Framework

```shell
$ npm install react-bootstrap bootstrap@5.1.3
```

- Bootstrap 가져오기 (import 위치)
```js
// App.js 또는 index.js
import 'bootstrap/dist/css/bootstrap.min.css';
```

<br/>

---


# Clayful 이란?
다양한 커머스 환경을 위한 솔루션
1. API & SDK 제공
2. 관리자 페이지 제공
3. 연동솔루션 제공

<a href="https://clayful.io" target="_blank">Clayful 이동하기</a>


<br/>

- Clayful API 설치하기

```shell
1. clayful api 회원가입
2. store개설 -> 관리하기
3. store관리하기 page Menu > 개발 > 연동클라이언트 > 스토어 프론트 클라이언트
4. API접근 토큰을 이제 react app 에 연동해줘야한다

4-2 npm설치
$ npm i clayful --save
4-3 AXIOS 설치 (통신을 위함)
$ npm i axios --save
```

<br/>

Install code 가져오기 (Javascript (CommonJS))

<a href="https://www.notion.so/ac4b1c6e6d3f4364974cd93120bf2b9d" taraget="_blank">설치 링크</a>

```js
// index.js 또는 app.js

import Clayful from 'clayful/client-js';
import axios from 'axios';

Clayful.config({
  client: '<api-access-token>'
});

// or when using axios
Clayful.install('request', require('clayful/plugins/request-axios')(axios)); // clayful에서 사용할 AXIOS연결


```



<br/>

---
## React Router

설명 | 내용
--|--
BrowerRouter | History API를 사용하여 URL과 UI를 동기화하는 Router
Routes<br>(또는 Router) |  Route에 매치되는 첫 번째 요소를 Render())
Route | Component의 속성에 설정된 URL과 현재 경로가 일치할 경우, 해당 Component를 Render()
Link | a태그와 유사. to 속성에 설정된 링크로 이동함 / History객체에 기록 저장


