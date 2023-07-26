import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import TodoApp from './todoApp';
import FetchApp from './FetchApp';

/*
  루트노드
  React로 구현한 애플리케이션은 일반적으로 하나의 루트DOM노드가 존재함.

  리액트 구동을 위해선 DOM엘리먼트 혹은 React엘리먼트를 root.render() 함수 안에 넣어두면 된다.

  페이지 로딩후 root.render() 함수 내부에 호출하고자하는 리엑트 컴포턴트를 추가시 해당
  컴포넌트가 호출이 되는데, App이라는 컴포넌트를 사용하기 위해서는 반드시 상단에 
  import로 App컴포넌트가 추가되어 있어야만 한다.

  리엑트 컴포넌트는 반드시 대문자로 시작해야된다. 이유는 리액트에서 소문자는 HTML DOM(div,body,p...)요소로 해석을하고,
  대문자로 시작을 했을때만 리액트 컴포넌트로 해석하기 때문이다.
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <FetchApp/>
);


