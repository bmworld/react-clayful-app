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

## Create-React-App
- React앱 Install
- Babel & Webpack 설정이 이미 돼어있음



