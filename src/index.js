import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import MainPage from './web/MainPage';

/* 로고(첫화면)*/
//import Logo from './web/Logo'

/* 키오스크 인트로 */
//import KioskIntro from './web/KioskIntro'

/* 한줄 설명(Overview) */
//import Overview from "./web/Overview"

/* 인터뷰 내용*/
//import DeskResearch from './web/DeskResearch'
//import DeskAnimation from './web/DeskAnimation'
//import DeskText from './web/DeskText'

//import DeskSection from './web/DeskSection'

/* 인트로 */
//import Intro from './web/Intro'

//import BF from './web/BF'

//import Kiosk from './web/Kiosk'

/* 카드: 9가지 기능 소개*/
//import CardSwipe from './web/CardSwipe'

//import CardSection from './web/CardSection'

/* 디자인 */
//import DesignIntro from './web/DesignIntro'

//import Design from './web/Design'

/* 프로젝트 목표 */
//import ProjectGoalText from './web/ProjectGoalText'
//import ProjectGoalSwipe from './web/ProjectGoalSwipe'

//import ProjectGoal from './web/ProjectGoal'

/* 서비스 설명 */
// import ServiceText from './web/ServiceText'
// import Service from './web/Service'
// import ServiceSwipe from './web/ServiceSwipe'

/* 마지막 마무리 */
// import Ending from './web/Ending'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
