"use strict";
(self["webpackChunk_vallista_blog"] = self["webpackChunk_vallista_blog"] || []).push([[194,247],{

/***/ 9427:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: function() { return /* binding */ useConfig; }
});

;// ./config/profile.json
var profile_namespaceObject = /*#__PURE__*/JSON.parse('{"author":"Vallista","title":"Blog","titleTemplate":"%s · Vallista","placeholder":"/profile.png","siteUrl":"https://vallista.kr","description":"Vallista의 블로그","twitterUserName":"","github":"vallista","secondary":"https://vallista.tistory.com"}');
;// ./config/resume.json
var resume_namespaceObject = /*#__PURE__*/JSON.parse('{"config":{"name":"마광휘","role":"Software Engineer","bio":["웹 프론트엔드에 관심이 많은 <string>소프트웨어 엔지니어</string>","우아한형제들 배민공통서비스웹프론트개발팀장","우아한형제들 <string>웹 프론트 전반 아키텍쳐 설계 및 공통 서비스 개발</string>"],"github":"https://github.com/vallista","email":"mgh950714@gmail.com"},"careers":{"title":"경력","list":[{"name":"우아한형제들","position":"Senior Staff Software Engineer","department":"웹 프론트엔드","startDate":"2024.02","endDate":null,"descriptions":["우아한형제들 배민공통서비스웹프론트개발팀 리드"],"projects":[{"name":"배민 공통 서비스 웹 프론트 리드","descriptions":["배민의 모든 서비스에서 사용하는 공통 서비스를 개발 및 운영","푸드/커머스/공통 영역에서 사용되는 모바일 웹 프론트 아키텍처 설계 / 리드","팀원 일정 관리 및 조율"],"startDate":"2024.02","endDate":null,"which":["여러 도메인의 서비스 운영 및 개발 경험, 시스템 설계"]}]},{"name":"우아한형제들","position":"Senior Software Engineer","department":"웹 프론트엔드","startDate":"2019.09","endDate":"2024.01","descriptions":["커머스 전반 웹 리드","테크리드 및 매니징 업무 진행","B마트/배민스토어/배민쇼핑라이브 커머스 웹 프론트 전반 설계/구축 및 운영","SUS, 서비스 피쳐 개발 업무 싱크업 및 정리"],"projects":[{"name":"커머스 웹 매니징","descriptions":["커머스 웹 전반 고도화 및 사용성 강화를 위한 웹 프론트 과제 바텀업","팀원 일정 관리 및 조율","유관부서 커뮤니케이션 및 일정 조율, 담당자 선정"],"startDate":"2020.12","endDate":"2024.01","which":["주도적인 디자인팀 커뮤니케이션을 통한 웹 컴포넌트 고도화, 서비스 역제안","여러 TF 진행, 웹 프론트 구성원 일정 관리 및 조율"]},{"name":"커머스 웹 테크리드","descriptions":["여러 서비스를 공통적으로 관리할 수 있는 아키텍처 수립 및 개발","TF등 일정 내 효율적으로 협업할 수 있는 아키텍처 구축","장애 컨트롤 및 고도화에 열려있는 프로덕트 구축"],"startDate":"2019.09","endDate":"2024.01","which":["웹 프론트 아키텍쳐 설계","전사 단위 기술 제안, 객체지향/타입스크립트/등 기본기 역량 강화","회고 문화를 통한 이슈 트래킹 및 정보 공유, 코드 리뷰 등 개발 문화 조성","다양한 인원에 대한 (1명부터 10명이상까지) 개발 인원 배정 및 프로덕트 개발 완료 경험"]},{"name":"커머스 프로덕트 설계","startDate":"2019.09","endDate":"2024.01","descriptions":["구축한 아키텍처 범위 내 프로덕트 설계"],"which":["공통 컴포넌트, 비즈니스, 데이터를 쉽게 관리하기 위한 계층 설계","서비스와 어드민을 대응할 수 있는 디자인 시스템 레이어 설계","비즈니스 로직을 쉽게 테스트하고 격리할 수 있는 클래스 기반 모델 레이어 설계","Loadable Component와 Node.js를 사용하여 SSR 환경 구축","Vue -> React 전환 경험, 전환하는 이유 등 시장의 형태에 따른 프로덕트 구축 가능","CRA -> SSR (Loadable Component -> Next.js) 점진적 고도화 진행, 기술적으로 왜 필요한지 이해","프레임워크에 상관없이 쉽게 사용할 수 있는 TypeScript 기반 로그 시스템 제작, 비즈니스 로직에서의 로그의 분리와 코드 응집도 개선","비즈니스, 인원에 따른 적합한 기술 선정 및 설계"]},{"name":"커머스 서비스 운영","startDate":"2019.09","endDate":"2024.01","descriptions":["B마트/배민스토어/배민쇼핑라이브 모바일 프론트 서비스 운영","전사 통합 셀러오피스, 어드민 프론트 서비스 운영"],"which":["SSR 기반 웹 어플리케이션 운영","Sentry 적용을 통한 장애 감지","구글 애널리틱스를 통한 이벤트 페이지 지표 측정","기존 마케터가 마크업을 하던 방식에서 매달 수십개 이상의 이벤트 발행하는 자동화 툴 개발/운영","개발에 필요한 유틸리티를 쉽게 제작해주는 툴 개발/운영","기존 산재하던 레거시 소스 통합, 성능 최적화"]},{"name":"커머스 비즈니스 개발","startDate":"2019.09","endDate":"2024.01","descriptions":["주문, 결제, 커머스 전반 비즈니스 플로우에 대한 이해","물류 시스템에 대한 웹 프론트 이해","퀵 커머스 서비스에 대한 웹 프론트 이해","배달/배송 비즈니스에 대한 이해"],"which":["장바구니, 주문서, 결제 등 결제 플로우 페이지 개발","상품 상세, 정보제공고시 등 상품 페이지 개발","이메일 고지 / 영수증 화면 개발","센터에서 활용되는 PDA 웹앱 개발","POS기 기반의 웹 어플리케이션을 통한 영수증 출력 프로그램 개발"]},{"name":"커머스 웹 인프라 구축/구성","startDate":"2019.09","endDate":"2024.01","descriptions":["웹 서비스를 지탱하는 인프라 설정/사용","팀 내 데브옵스 구축"],"which":["AWS Elastic Beanstalk + Code deploy를 사용한 Blue-green 무중단 배포","S3 - Cloud Front를 이용한 정적 리소스 비용 절감 및 CDN 사용","웹 정적 사이트 배포 및 SSR 인프라 개발","데브옵스 구축을 통한 코드리뷰 자동화 및 자동 리포트 등 개발"]}]},{"name":"와인포인트","department":"개발팀","position":"Software Engineer","startDate":"2018.02","endDate":"2019.08","fold":true,"descriptions":["와인포인트는 \'와인을 넘어, 주류 시장 중간 과정에 들어가는 마진을 최소화하여 정직한 가격으로 소비자들에게 공급한다\'는 포부를 갖고 탄생한 서비스입니다.","현재 주류는 전통주를 제외하고 대면해서 신분증을 제시하지 않으면 구매가 불가능합니다. 그래서 와인포인트는 앱 내에서 주문하면 받고 싶은 위치의 가장 가까운 이마트24 편의점에서 대면하여 결제하고 픽업할 수 있습니다."],"projects":[{"name":"와인포인트 웹 프론트엔드 개발","descriptions":["와인포인트 웹 버전 프론트엔드를 개발하였습니다. (비오픈)"],"startDate":"2019.03","endDate":"2019.08","which":["와인포인트 와인 상세페이지 웹 컨버팅","와인포인트 앱 비밀번호 변경 페이지 개발"],"techStacks":["React.js","TypeScript","Redux"]},{"name":"와인포인트 데이터 어드민 개발","descriptions":["와인을 등록할 수 있는 어드민 페이지를 개발하였습니다."],"startDate":"2018.02","endDate":"2019.08","which":["대쉬보드 데이터 시각화 작업","JWT를 이용한 인증","와인 등록 기능 개발"],"techStacks":["Vue","JavaScript","PostgreSQL","Express.js","knex.js"]},{"name":"와인포인트 주문 어드민 개발","descriptions":["오프라인 매장 및 물류창고에서 사용하는 어드민을 개발하였습니다."],"startDate":"2018.03","endDate":"2019.08","which":["재고 관리 기능 개발","와인 재고 증감 기능 개발","주문 이행 기능 개발","영수증 발행 기능 개발","바코드 인식 기능 추가","배달현황 기능 추가"],"techStacks":["Vue","JavaScript","PostgreSQL","Express.js","knex.js"]},{"name":"와인포인트 랜딩 페이지 개발","descriptions":["와인포인트 초창기 랜딩 페이지를 개발하였습니다."],"startDate":"2018.07","endDate":"2018.07","which":["디자인 작업","마크업 작업"],"techStacks":["Vue"]}]},{"name":"Republic Dot.","department":"개발팀","position":"Software Engineer","startDate":"2017.07","endDate":"2017.12","fold":true,"descriptions":["Republic Dot은 세상의 모든 리뷰 \'리뷰왕 김리뷰\'를 운영하던 김리뷰가 리뷰 커뮤니티를 목표로 만든 스타트업 입니다.","유저는 자신의 리뷰로 아이템을 살 수 있고 Republic Dot에서는 B2B 시장에서 아이템을 홍보해주고 수익을 창출할 수 있는 리뷰 순환 구조를 만들고자 탄생한 커뮤니티 서비스입니다."],"projects":[{"name":"Review Republic","descriptions":["Review Republic은 최대 동시 접속자수가 4000명까지 있었던 리뷰 커뮤니티 서비스입니다."],"startDate":"2017.07","endDate":"2017.12","which":["React 기반 커뮤니티 사이트 유지보수 및 개발"],"techStacks":["React.js","JavaScript","Meteor.js"]}]},{"name":"(주)HOMI","department":"개발팀","position":"Game Client Programmer","startDate":"2014.02","endDate":"2017.06","fold":true,"descriptions":["Unity 3D, Cocos2d-x를 이용해 크로스 플랫폼 모바일 게임 개발을 진행했습니다.","2년 10개월간 병역 특례를 받아 병역의 의무를 수행하였습니다."],"projects":[{"name":"태권 VR","descriptions":["Vive VR과 Perception Neuron을 사용한 바디 스캔, VR 환경에서 장비를 입고 태권도 자세를 취할 수 있도록 개발","Unity3D 환경에서 VR 얼라이어싱 현상 개선"],"startDate":"2016.11","endDate":"2017.06","which":["Vive VR + Unity3D를 이용한 3D 게임 개발"],"techStacks":["Vive VR","Unity 3D","Serial Port 통신","Perception Neuron"]},{"name":"Pandaria Dash","descriptions":["러닝 장르 게임으로써 장애물을 피하고 코인을 모으는 게임"],"startDate":"2015.11","endDate":"2016.12","which":["Vive VR + Unity3D를 이용한 3D 게임 개발","폰의 사양에 따라서 텍스쳐 크기를 작게 컨버트해서 메모리 최적화","Terrain이 퍼포먼스 최적화를 위한 Model fbx파일을 Unity로 옮겨와서 bake 진행"],"techStacks":["Unity3D"]},{"name":"Tile Road","descriptions":["꼬리와 머리를 클리어 존에 배치시키는 퍼즐게임","iOS, AOS 동시 런칭"],"startDate":"2016.02","endDate":"2016.07","which":["맵툴, 인게임 요소를 제작","AdColony, Vungle, Google Play Games, Unity Ads, Google Ads, EveryDay 등의 수많은 dependency 포함하여 충돌나는 문제 해결"],"techStacks":["Unity3D"]},{"name":"TabBrick","descriptions":["장애물을 피하면서 가장 위로 올라가는 점수를 내는 게임"],"startDate":"2015.03","endDate":"2016.02","which":["맵툴, 인게임 요소를 제작"],"techStacks":["Unity3D"]},{"name":"4D Gunslinger","descriptions":["승마 헬스 기계를 탑승하여 말의 속도와, 총을 들고 진행하는 4D 게임"],"startDate":"2014.06","endDate":"2015.03","which":["아두이노를 통해 승마 기계와의 시리얼 포트 통신을 해서 신호를 조작","레이싱 맵 제작할 수 있는 에디터 개발"],"techStacks":["Unity3D"]},{"name":"4D BIGWAR","descriptions":["4D 체감형 머신을 탑승하고 그 위에서 조작을 통해서 발칸을 발사하여 게임을 진행"],"startDate":"2014.02","endDate":"2015.03","which":["3D 광원 효과 및 지형 모델 최적화","Unity3D 에디터 작업"],"techStacks":["Unity3D"]}]}]},"skills":{"title":"기술","list":[{"title":"HTML/CSS","descriptions":[{"title":"Semantic Markup을 중요하게 여기며, HTML를 작성할 때 의미를 부여합니다.","subTitle":["HTML이 길어질 수록 Semantic Markup이 중요해집니다. 그러므로, 초기에 작성할 때 부터 고려를 많이하는 편입니다."]},{"title":"CSS를 짤 때 최대한 간단하고, 개발자 친화적으로 짤 수 있게 노력합니다.","subTitle":["복잡한 문법을 style에서 담으려고 하지 않습니다. style은 이해하기 쉬울수록 최고라고 생각하기 때문입니다. CSS를 개발할 때 tag들을 각 요소별로 구분하여 쉽게 알아볼 수 있도록 코딩합니다."]},{"title":"SASS(SCSS)와 같은 CSS Preprocessor를 사용할 수 있습니다.","subTitle":["CSS Module과 SCSS 조합을 선호합니다.","Emotion 및 Styled Component를 활용한 프로젝트를 설계 할 수 있고, 구현이 가능합니다."]},{"title":"여러 브라우저를 지원할 수 있습니다.","subTitle":["Chrome, Safari, Firefox등 여러 브라우저들을 지원하는 앱을 만들 수 있습니다."]},{"title":"favicon, Open Graph protocol, SEO 등의 적용 경험이 있습니다.","subTitle":["네이버, 구글등 Robot.txt를 통해 검색되도록 지원해본 경험이 있습니다."]}]},{"title":"TypeScript","descriptions":[{"title":"TypeScript를 이용한 React 코딩에 익숙합니다.","subTitle":["다양한 프로젝트 경험으로 코드 리딩 및 작성이 가능합니다."]},{"title":"문법을 잘 활용하며, 적절한 타입을 사용합니다.","subTitle":["객체지향 프로그래밍에 익숙하기 때문에 상속 등을 통한 클래스 타입에도 강점을 지닙니다."]},{"title":"Generic에 익숙합니다.","subTitle":["Generic과 더불어 다양한 문법들 ex) Overloading, Tuple 등을 이용한 코딩을 할 수 있습니다."]}]},{"title":"JavaScript","descriptions":[{"title":"ES2015 이후의 JavaScript 문법에 익숙합니다.","subTitle":["JavaScript ES2015 이상의 문법을 수월하게 작성하거나 읽을 수 있습니다."]},{"title":"Vanilla JavaScript를 통해 DOM을 다루는데 익숙합니다.","subTitle":[]},{"title":"Reduce, Map과 같은 고차함수를 적극적으로 사용합니다.","subTitle":[]},{"title":"비동기 작업을 하는데 익숙합니다. (promise, async await)","subTitle":[]}]},{"title":"SPA Framework","descriptions":[{"title":"크거나 작은 규모의 웹 프로그램을 설계할 수 있습니다.","subTitle":["모바일 웹앱, PC, 어드민 등 다양한 프로젝트를 리딩하고 개발한 경험이 있습니다."]},{"title":"React hooks를 사용하여 적절하게 데이터를 분배합니다.","subTitle":["Custom hooks을 줄곧 잘 쓰며, Context API를 사용하여 맥락에 맞는 컴포넌트 상태 격리를 통한 구현이 가능합니다.","이러한 시스템을 이용하여 디자인 시스템을 구현한 경험이 있습니다."]},{"title":"효율적인 데이터 구조를 작성하여 유지보수 용이하게 Folder Structure를 구성합니다.","subTitle":[]},{"title":"Redux, Vuex와 같은 상태 관리 패턴에 대해서 사용해봤으며, 복잡한 코딩을 피합니다. 상태 관리 패턴이 소스가 길어질 수록 레거시가 많이 쌓이기 때문입니다.","subTitle":[]},{"title":"Container 와 Presentational의 차이점을 인지하고 구조를 서버에서 데이터 받는 부분과 데이터를 뿌려주는 부분을 명확하게 작성합니다","subTitle":[]},{"title":"Atomic Design으로 컴포넌트 분할을 하거나 프로젝트에 맞게 구조를 작성합니다.","subTitle":[]},{"title":"React, Vue 컴포넌트 라이프 사이클을 이해하여 적절하게 활용합니다.","subTitle":[]}]},{"title":"Server","descriptions":[{"title":"Express.js를 활용하여 RESTful API를 작성할 수 있습니다.","subTitle":[]},{"title":"라우팅 규칙을 적절하게 사용하여 경로를 작성합니다.","subTitle":[]},{"title":"PostgreSQL 9, 10 버전을 사용할 수 있으며 쿼리 작성이 가능합니다.","subTitle":["transaction 처리, window function 등을 사용하여 PostgreSQL만의 표현을 사용할 수 있습니다."]},{"title":"JWT 인증을 사용하여 브라우저 쿠키에 저장하고 세션 처리를 할 수 있습니다.","subTitle":[]}]},{"title":"DevOps","descriptions":[{"title":"자동화 프로세스를 만들어서 팀 내 생산성을 높힙니다.","subTitle":["코드리뷰 자동화 프로세스"]},{"title":"AWS EC2, ECS, S3 등의 인프라 요소를 사용해본 경험이 있습니다.","subTitle":[]},{"title":"Jenkins, Docker를 사용하여 개발 환경을 구축할 수 있습니다.","subTitle":[]},{"title":"Travis CI, AWS Code Deploy, DinD, docker compose, AWS S3 사용하여 무중단배포를 구축할 수 있습니다.","subTitle":[]},{"title":"Nginx 설정을 다룰 수 있으며, PM2, Nginx를 통해 로그 분석이 가능합니다.","subTitle":[]},{"title":"Crontab, Slack bot 등의 경험이 있습니다.","subTitle":[]}]},{"title":"그 외","descriptions":[{"title":"Git을 능숙하게 다룰 수 있습니다.","subTitle":["git flow, github flow, gitlab flow를 회사에서 적용해본 경험이 있습니다."]}]}]},"hobby":{"description":"취미","list":[{"title":"블로깅","url":"https://vallista.kr","descriptions":["개발을 좋아해서 틈틈히 공부를 하고 글을 작성하여 블로그에 투고합니다.","6년간 꾸준히 글을 써오면서 성실한 면이 부각되었다고 생각합니다.","위의 제목을 누르면 제 블로그를 가실 수 있어요!","https://vallista.tistory.com/ 에서 과거의 글을 보실 수 있어요!"]},{"title":"운동","url":null,"descriptions":["운동을 통해 스트레스를 해소하고 건강을 챙깁니다.","끊임없는 야근의 원동력이 되는 중요한 덕목입니다."]},{"title":"맛집탐방","url":null,"descriptions":["카카오맵에 400개 이상의 맛집이 잠들어있는 일명 \'마슐랭\'","맛있는 음식점을 세계 여행다니면서 기록하고 있습니다."]},{"title":"웹 만들기","url":null,"descriptions":["만들고 싶은 웹을 만듭니다. 좋아하는 연예인의 팬 페이지, 블로그 템플릿 같은 디자인적 요소가 많은 걸 좋아해요."]}]},"speaker":{"description":"발표","list":[{"title":"우아콘 - 웹앱 서비스 히스토리를 관리하기 위한 여정","url":"https://www.youtube.com/watch?v=q_NBDCtZaQU"},{"title":"Vuetiful.korea - Vue.js를 이용한 백오피스 구현기 발표","url":"https://vuejs-kr.github.io/meetup/#/"},{"title":"NaverD2 - Vue.js를 이용한 백오피스 제작 경험 공유","url":"https://www.youtube.com/watch?v=_WACO1jIIhE"}]},"activities":{"description":"활동","list":[{"title":"2022.02 ~ 2022.06 우아한 테크코스 프론트엔드 리뷰어 활동","url":"https://github.com/woowacourse"},{"title":"2021.03 ~ 2021.06 우아한 테크코스 프론트엔드 리뷰어 활동","url":"https://github.com/woowacourse"},{"title":"2020.06 ~ 2020.12 패스트 캠퍼스 모의 면접관 활동","url":null},{"title":"2020.12 우아톤 제 2회 2위","url":null},{"title":"2019.12 우아톤 제 1회 3위","url":null},{"title":"2019.05.18 스포카 무쓸모톤 1위","url":"https://festa.io/events/281"},{"title":"2018.02 ~ STACCATO 멘토","url":null},{"title":"2016.06 ~ STAC 멘토","url":null},{"title":"2016.06 ~ 2016.08 국제글로벌통상고등학교 강사","url":null},{"title":"2014.02 ~ 2017.06 한국게임과학고등학교 강사","url":null}]},"lectures":{"description":"강연","list":[{"title":"2021.6.1 [우아한인터뷰] 프론트엔드 개발자 \'마광휘님\'","url":"https://www.youtube.com/watch?v=MUF-13_6UjQ"},{"title":"2018.07 한국게임과학고등학교, “게임 개발자에서 서비스 개발자로” 주제로 강연","url":null},{"title":"2018.04 한세사이버보안고등학교, “게임 개발자에서 서비스 개발자로” 주제로 강연","url":null},{"title":"2015.08 장성중학교, “게임 프로그래머 직업에 대해” 주제로 강연","url":null}]},"awards":{"description":"수상","list":[{"title":"2020 우아한형제들 우수사원","url":null},{"title":"2016.08 제 15회 KWC, 지도교사상 (우송대학교 총장상) - 우송대학교","url":null},{"title":"2013.11 Smarteen App Challenge, 우수상 (대표이사상) - 캡스톤 파트너즈","url":null},{"title":"2013.10 비즈쿨 창업 경진대회, 은상 - 창업진흥원","url":null},{"title":"2013.08 제 12회 KWC, 대상 (대전광역시 교육감상) - 우송대학교","url":null},{"title":"2013.08 제 11회 게임캠프 게임제작 부분, 대상 (전라북도지사상) - 전라북도","url":null},{"title":"2013.07 제 9회 주니어 창업 경진대회, 우수상 - 한밭대학교","url":null},{"title":"2013.05 제 15회 고교생 만화 애니메이션 공모전 게임 부문, 은상 (상명대학교 총장상) - 상명대학교","url":null},{"title":"2013.04 2013 기능경기대회 전라북도, 금상 (기능경기 위원장상) - 전라북도 기능경기 위원회","url":null},{"title":"2013.02 KBS 스카우트 인터파크편, 최종 우승 (1등) - KBS","url":null},{"title":"2012.11 금강 청소년 영상 예술제 게임 부문, 금상 (한국컨텐츠진흥원장상) - 한국컨텐츠진흥원","url":null},{"title":"2012.06 제 18회 서울정보과학경시대회 장려상 - 서울정보과학경시대회","url":null}]}}');
;// ./src/hooks/useConfig.ts
function useConfig(){return{profile:profile_namespaceObject,resume:resume_namespaceObject};}

/***/ }),

/***/ 5981:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ post; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(1855);
// EXTERNAL MODULE: ../../packages/design-system/dist/index.js + 112 modules
var dist = __webpack_require__(3109);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@18.3.18_react@18.2.0__@types+react@18.3.18_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js + 1 modules
var emotion_styled_base_browser_esm = __webpack_require__(2803);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.18_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__(814);
;// ./src/components/Comment/Comment.style.tsx
const _Wrapper=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",{target:"e11mj3800"})("max-width:900px;width:100%;margin:4rem auto;box-sizing:border-box;padding:2rem 2rem;border-top:1px solid ",_ref=>{let{theme}=_ref;return theme.colors.PRIMARY.ACCENT_2;},";&>p{margin-bottom:1.5rem;font-size:1.8rem;",_ref2=>{let{theme}=_ref2;return/*#__PURE__*//*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("color:",theme.colors.PRIMARY.FOREGROUND,";"+( true?"":0), true?"":0);},";}&>a{border:none!important;outline:none!important;transition:none!important;background:none!important;&:hover{background:none!important;border-color:none!important;}}"+( true?"":0));
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3159);
;// ./src/components/Comment/index.tsx
const Comment=()=>{const ref=(0,react.useRef)(null);const{0:state,1:setState}=(0,react.useState)({status:'pending'});(0,dist/* useMount */.JO)(()=>{var _ref$current$children,_ref$current,_ref$current2;const hasScript=(_ref$current$children=(_ref$current=ref.current)===null||_ref$current===void 0?void 0:_ref$current.children)!==null&&_ref$current$children!==void 0?_ref$current$children:[];if(hasScript.length>0)return;const scriptEl=document.createElement('script');scriptEl.onload=()=>{setState({status:'success'});};scriptEl.onerror=()=>{setState({status:'failure'});};scriptEl.async=true;scriptEl.src='https://utteranc.es/client.js';scriptEl.setAttribute('repo','Vallista/vallista.github.io');scriptEl.setAttribute('issue-term','title');scriptEl.setAttribute('theme','github-light');scriptEl.setAttribute('crossorigin','anonymous');(_ref$current2=ref.current)===null||_ref$current2===void 0?void 0:_ref$current2.appendChild(scriptEl);});return/*#__PURE__*/(0,jsx_runtime.jsxs)(_Wrapper,{children:[state.status!=='success'&&/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Spinner */.y$,{size:50}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{ref:ref})]});};
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.39.0/node_modules/core-js/modules/esnext.string.replace-all.js
var esnext_string_replace_all = __webpack_require__(840);
;// ./src/components/Markdown/Markdown.style.tsx
function _EMOTION_STRINGIFIED_CSS_ERROR__(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const Markdown_style_Wrapper=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("section",{target:"e15iac6l1"})( true?{name:"ufexmo",styles:"width:100%;max-width:900px;padding:2rem;margin-left:auto;margin-right:auto;@media screen and (max-width: 1024px){padding:1rem;}"}:0);const _Contents=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(Markdown_style_Wrapper,{target:"e15iac6l0"})("width:calc(100vw - 400px);@media screen and (max-width: 1308px){width:calc(100vw - 408px);}@media screen and (max-width: 1024px){width:calc(100vw - 8px);}",_ref=>{let{theme}=_ref;return/*#__PURE__*//*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("p>img{width:100%;}p{color:",theme.colors.PRIMARY.ACCENT_8,";font-weight:400;line-height:1.6;letter-spacing:-0.02rem;}p,table,ul,blockquote,ol{font-size:1rem;margin:0 0 2rem;}center{color:",theme.colors.PRIMARY.ACCENT_5,";font-size:0.8rem;font-weight:400;line-height:1.5;letter-spacing:-0.02rem;margin:0 0 2rem;}p+center,iframe+center{margin-top:-1rem;}h1,h2,h3,h4,h5{position:relative;color:",theme.colors.PRIMARY.FOREGROUND,";line-height:1.2;scroll-margin-top:60px;letter-spacing:-0.02rem;font-weight:600;background:none;&>a{color:",theme.colors.PRIMARY.FOREGROUND,";opacity:0;border:none;position:absolute;top:50%;left:0;transform:translate(-100%, -50%);padding-right:4px;}&:hover>a{color:",theme.colors.PRIMARY.FOREGROUND,";background:none;border:none;opacity:1;}}h2:not(:first-of-type),h3:not(:first-of-type),h4:not(:first-of-type){margin-top:3rem;}h1,h2,h3,h4,h5{margin:0 0 1.25rem;}h1,h2{font-size:1.8rem;filter:brightness(1);}h3{font-size:1.4rem;filter:brightness(1.3);}h4{filter:brightness(1.5);font-size:1.1rem;padding-bottom:0.25rem;text-transform:uppercase;}ul,ol{padding-left:1.5rem;box-sizing:border-box;line-height:1.6;& ul{margin-top:8px;}& ul,& ol{margin-bottom:0;}}ul{list-style:disc;}ol{list-style:decimal;}ul li{margin-bottom:0.5rem;&::marker{font-weight:600;color:",theme.colors.HIGHLIGHT.PINK,";}}ol li{margin-bottom:0.5rem;&::marker{font-weight:600;color:",theme.colors.HIGHLIGHT.PINK,";}}li>a{white-space:inherit;word-wrap:break-word;}li{color:",theme.colors.PRIMARY.FOREGROUND,";& code{font-weight:600;color:",theme.colors.HIGHLIGHT.PINK,";white-space:inherit;& * span{white-space:inherit;}& * span:not([class='grvsc-source']){padding-left:0!important;}}}iframe{margin-bottom:2rem;}div[class*='markdown-wrapper']{font-size:0.9rem;text-size-adjust:none;margin:1rem -1rem;overflow-x:auto;overflow-y:hidden;box-sizing:border-box;background-color:var(--scrollbar-background);padding-left:2rem;scrollbar-width:8px;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-background);&::-webkit-scrollbar{background:var(--scrollbar-background);height:8px;width:8px;}&::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:0;}@media screen and (min-width: 1350px){margin-left:-3.5rem;margin-right:-3.5rem;margin-bottom:2rem;}@media screen and (max-width: 1024px){padding-left:1rem;}}pre{border-radius:0;float:left;margin-bottom:0;margin-top:0;min-width:calc(100% + 1rem);padding:1rem 1rem 1rem 0;-webkit-font-smoothing:subpixel-antialiased;overflow:initial;white-space:pre;font-family:var(--code-font-family);word-wrap:normal;hyphens:none;line-height:1.5;tab-size:2;word-break:normal;word-spacing:normal;&>code{font-weight:600;color:",theme.colors.HIGHLIGHT.PINK,";white-space:inherit;& * span{white-space:inherit;}& * span:not([class='grvsc-source']){padding-left:0!important;}}}p>code{font-weight:600;color:",theme.colors.HIGHLIGHT.PINK,";white-space:inherit;& * span{white-space:inherit;}& * span:not([class='grvsc-source']){padding-left:0!important;}}img[class='gatsby-resp-image-image']{box-shadow:none!important;}img[class='gatsby-resp-image-image'][alt]:after{display:flex;justify-content:center;align-items:center;position:absolute;top:0;left:0;width:100%;height:100%;background:",theme.colors.PRIMARY.BACKGROUND,";font-weight:200;content:'\uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD560 \uC218 \uC5C6\uC5B4\uC694. :(';}blockquote{background:",theme.colors.PRIMARY.ACCENT_2,";margin:0 -1rem;margin-bottom:2rem;padding:1rem 1rem;border-left:6px solid ",theme.colors.HIGHLIGHT.PINK,";&>p{margin-bottom:0;}@media screen and (min-width: 1350px){margin-left:-3.5rem;margin-right:-3.5rem;}@media screen and (max-width: 1024px){padding-left:1rem;}}"+( true?"":0), true?"":0);},";"+( true?"":0));
;// ./src/components/Markdown/index.tsx
const Markdown=props=>{const{html:_html,hash}=props;const ref=(0,react.useRef)(null);const html=(0,react.useMemo)(()=>{const result=_html// pre 태그 (소스코드)에 추가하여 wrapping 하는 div를 추가한다.
// 해당 div는 스크롤 처리를 진행한다.
.replaceAll('<pre','<div class="markdown-wrapper"><pre').replaceAll('</pre>','</pre></div>');return result;},[]);(0,react.useEffect)(()=>{var _ref$current$getEleme,_ref$current;// heading 전부 체크해서 해시에 저장할 수 있는 버튼을 추가한다.
// 버튼을 클릭하면 이동되도록 구현.
Array.from((_ref$current$getEleme=(_ref$current=ref.current)===null||_ref$current===void 0?void 0:_ref$current.getElementsByTagName('*'))!==null&&_ref$current$getEleme!==void 0?_ref$current$getEleme:[]).filter(it=>{var _it$tagName$,_it$tagName;return Number((_it$tagName$=(_it$tagName=it.tagName)===null||_it$tagName===void 0?void 0:_it$tagName[1])!==null&&_it$tagName$!==void 0?_it$tagName$:'999')<6;}).forEach(it=>{if(it.getElementsByTagName('a').length>0)return;const name=it.innerHTML.replaceAll(' ','-');it.innerHTML="\n          <a href=\"#"+name+"\" aria-label=\""+name+" permalink\">\n            <svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\" \n            stroke='currentColor'\n            stroke-width='1'\n            stroke-linecap='round'\n            stroke-linejoin='round'\n            fill='none'\n            shape-rendering='geometricPrecision'>\n              <path\n                fill-rule=\"evenodd\" \n                d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\">\n              </path>\n            </svg>\n          </a>\n          "+it.innerHTML+"\n        ";it.id=name;});// 페이지가 로드되고 나서 선택된 해딩으로 이동한다.
window.onload=()=>{setTimeout(()=>{const hashData=decodeURIComponent(hash).substring(1);if(hashData){var _document$getElementB,_document$getElementB2;window.scrollTo(0,(_document$getElementB=(_document$getElementB2=document.getElementById(hashData))===null||_document$getElementB2===void 0?void 0:_document$getElementB2.getBoundingClientRect().bottom)!==null&&_document$getElementB!==void 0?_document$getElementB:0);}});};},[]);return/*#__PURE__*/(0,jsx_runtime.jsx)(_Contents,{ref:ref,dangerouslySetInnerHTML:{__html:html}});};
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 9 modules
var gatsby_browser_entry = __webpack_require__(3862);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(392);
;// ./src/components/PostHeader/PostHeader.style.tsx
function PostHeader_style_EMOTION_STRINGIFIED_CSS_ERROR_(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const _Header=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("header",{target:"e1sc6lj77"})( true?{name:"1azakc",styles:"text-align:center"}:0);const PostHeader_style_Wrapper=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",{target:"e1sc6lj76"})( true?{name:"1j1kikd",styles:"display:flex;flex-direction:column;justify-content:flex-start;align-items:center;max-width:900px;padding:2rem;margin-left:auto;margin-right:auto;@media screen and (max-width: 1024px){padding:1.5rem 1rem;}"}:0);const _BottomBox=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",{target:"e1sc6lj75"})( true?{name:"715507",styles:"display:flex;justify-content:space-between;align-items:center;width:100%;@media screen and (max-width: 1024px){flex-direction:column-reverse;align-items:flex-start;justify-content:center;}"}:0);const _TextContainer=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",{target:"e1sc6lj74"})( true?{name:"1u6n871",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start"}:0);const _IconContainer=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",{target:"e1sc6lj73"})( true?{name:"1yvy03y",styles:"display:flex;gap:0.5rem;margin-bottom:1.5rem"}:0);const _Icon=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("button",{target:"e1sc6lj72"})("display:flex;justify-content:center;align-items:center;width:30px;height:30px;outline:none;border:none;border-radius:15px;cursor:pointer;padding:0;",_ref=>{let{theme}=_ref;return/*#__PURE__*//*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("background:",theme.colors.PRIMARY.FOREGROUND,";color:",theme.colors.PRIMARY.BACKGROUND,";"+( true?"":0), true?"":0);},";"+( true?"":0));const _HeaderTitle=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",{target:"e1sc6lj71"})( true?{name:"1cdt2kf",styles:"display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%;padding:0 1.5rem;&>h1{text-align:left;}"}:0);const _ChildrenWrapper=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",{target:"e1sc6lj70"})( true?{name:"1d3w5wq",styles:"width:100%"}:0);
;// ./src/components/PostHeader/index.tsx
const PostHeader=props=>{const{title,tags,date,author,timeToRead,href,children}=props;const[year,month,day]=(0,utils/* getTime */.WB)(date);const toast=(0,dist/* useToasts */.Yf)();const dateToString=year+"\uB144 "+Number(month)+"\uC6D4 "+Number(day)+"\uC77C";return/*#__PURE__*/(0,jsx_runtime.jsx)(_Header,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(PostHeader_style_Wrapper,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(_HeaderTitle,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Text */.EY,{as:"h1",size:40,weight:800,children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Spacer */.hK,{y:1}),tags&&/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Container */.mc,{row:true,wrap:"wrap",gap:0.5,children:tags.map(it=>/*#__PURE__*/(0,jsx_runtime.jsxs)(dist/* Badge */.Ex,{size:"large",children:["#",it]},it))}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Spacer */.hK,{y:1}),/*#__PURE__*/(0,jsx_runtime.jsxs)(_BottomBox,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(_TextContainer,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(dist/* Text */.EY,{size:16,as:"span",children:["Written by ",/*#__PURE__*/(0,jsx_runtime.jsx)(gatsby_browser_entry.Link,{to:"/",children:author})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Spacer */.hK,{y:0.25}),/*#__PURE__*/(0,jsx_runtime.jsxs)(dist/* Text */.EY,{size:14,as:"span",children:[dateToString," \xB7 ",timeToRead," min read"]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(_IconContainer,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Tooltip */.m_,{text:"\uD398\uC774\uC2A4\uBD81 \uACF5\uC720",position:"top",children:/*#__PURE__*/(0,jsx_runtime.jsx)(_Icon,{onClick:facebookShare,children:/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Tooltip */.m_,{text:"\uB9C1\uD06C \uBCF5\uC0AC",position:"top",children:/*#__PURE__*/(0,jsx_runtime.jsx)(_Icon,{onClick:linkCopy,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})})})]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Spacer */.hK,{y:1}),/*#__PURE__*/(0,jsx_runtime.jsx)(_ChildrenWrapper,{children:children})]})});function facebookShare(){toast.error('페이스북 공유 기능은 개발중입니다.');}function linkCopy(){(0,dist/* copy */.C)(decodeURIComponent(href));toast.success('링크를 복사했습니다.');}};
// EXTERNAL MODULE: ./src/components/Seo/index.tsx + 1 modules
var Seo = __webpack_require__(5539);
;// ./src/components/Series/Series.style.tsx
function Series_style_EMOTION_STRINGIFIED_CSS_ERROR_(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const _List=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("ol",{target:"e1oz9bci1"})( true?{name:"1o02nna",styles:"padding-left:1.5rem;box-sizing:border-box;line-height:1.6;list-style:decimal"}:0);const _Item=/*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("li",{target:"e1oz9bci0"})(_ref=>{let{theme,timeToRead}=_ref;return/*#__PURE__*//*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("margin-bottom:0.5rem;&::marker{font-weight:600;color:",theme.colors.HIGHLIGHT.PINK,";}&::after{content:'- ",timeToRead,"\uBD84';margin-left:0.2rem;font-size:0.8rem;}&>span{cursor:pointer;border-bottom:2px solid ",theme.colors.HIGHLIGHT.PINK,";font-weight:600;text-decoration:none;color:",theme.colors.PRIMARY.FOREGROUND,";transition:all 0.1s ease-out;&:hover{background:",theme.colors.HIGHLIGHT.PINK,";border-top:2px solid ",theme.colors.HIGHLIGHT.PINK,";color:",theme.colors.PRIMARY.BACKGROUND,";}}"+( true?"":0), true?"":0);},";"+( true?"":0));
;// ./src/components/Series/index.tsx
const Series=props=>{const{name,posts}=props;return/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Collapse */.SD,{title:name,card:true,size:"medium",subtitle:"\uC2DC\uB9AC\uC988\uC758 \uAE00 ("+posts.length+"\uAC1C)",children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Container */.mc,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(_List,{children:posts.map(it=>/*#__PURE__*/(0,jsx_runtime.jsx)(_Item,{timeToRead:it.timeToRead,children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{onClick:()=>moveToLocation(it.slug),children:it.name})},it.name))})})});function moveToLocation(slug){(0,gatsby_browser_entry.navigate)(slug);}};
// EXTERNAL MODULE: ./src/hooks/useConfig.ts + 2 modules
var useConfig = __webpack_require__(9427);
;// ./src/template/post.tsx








const Post = props => {
  const {
    location,
    data
  } = props;
  const {
    profile
  } = (0,useConfig/* useConfig */.U)();
  const {
    allMarkdownRemark
  } = data;
  const {
    href,
    hash
  } = location;
  const {
    nodes,
    group: seriesGroup
  } = allMarkdownRemark;
  const {
    timeToRead,
    html
  } = data.markdownRemark;
  const {
    title,
    date,
    image,
    tags,
    series
  } = data.markdownRemark.frontmatter;
  const cachedFilterSeries = (0,react.useCallback)(getFilteredSeries, [data]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Seo/* Seo */.G, {
      name: title,
      image: image === null || image === void 0 ? void 0 : image.publicURL,
      isPost: true
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(PostHeader, {
      title: title,
      date: date,
      image: image === null || image === void 0 ? void 0 : image.publicURL,
      tags: tags,
      timeToRead: timeToRead,
      author: profile.author,
      href: href,
      children: series && seriesGroup && /*#__PURE__*/(0,jsx_runtime.jsx)(Series, {
        name: series,
        posts: cachedFilterSeries()
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Markdown, {
      html: html,
      hash: hash
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("section", {
      id: "comments"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Comment, {})]
  });
  function getFilteredSeries() {
    return nodes.filter(it => it.frontmatter.series).filter(it => it.frontmatter.series === series).map(it => ({
      name: it.frontmatter.title,
      timeToRead: it.timeToRead,
      slug: it.fields.slug
    }));
  }
};
/* harmony default export */ var post = (Post);
const pageQuery = "1061594122";

/***/ }),

/***/ 8506:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var TO_STRING_TAG_SUPPORT = __webpack_require__(381);
var isCallable = __webpack_require__(1112);
var classofRaw = __webpack_require__(2285);
var wellKnownSymbol = __webpack_require__(4438);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 1533:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(3317);
var toObject = __webpack_require__(5136);

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ 9133:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isObject = __webpack_require__(1539);
var classof = __webpack_require__(2285);
var wellKnownSymbol = __webpack_require__(4438);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
};


/***/ }),

/***/ 200:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var anObject = __webpack_require__(6790);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ 4349:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(6484);
var hasOwn = __webpack_require__(2318);
var isPrototypeOf = __webpack_require__(502);
var regExpFlags = __webpack_require__(200);

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


/***/ }),

/***/ 381:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var wellKnownSymbol = __webpack_require__(4438);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 9390:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(8506);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ 6679:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(5761);
var call = __webpack_require__(6484);
var uncurryThis = __webpack_require__(3317);
var requireObjectCoercible = __webpack_require__(8609);
var isCallable = __webpack_require__(1112);
var isNullOrUndefined = __webpack_require__(8874);
var isRegExp = __webpack_require__(9133);
var toString = __webpack_require__(9390);
var getMethod = __webpack_require__(6021);
var getRegExpFlags = __webpack_require__(4349);
var getSubstitution = __webpack_require__(1533);
var wellKnownSymbol = __webpack_require__(4438);
var IS_PURE = __webpack_require__(9890);

var REPLACE = wellKnownSymbol('replace');
var $TypeError = TypeError;
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var max = Math.max;

// `String.prototype.replaceAll` method
// https://tc39.es/ecma262/#sec-string.prototype.replaceall
$({ target: 'String', proto: true }, {
  replaceAll: function replaceAll(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, position, replacement;
    var endOfLastMatch = 0;
    var result = '';
    if (!isNullOrUndefined(searchValue)) {
      IS_REG_EXP = isRegExp(searchValue);
      if (IS_REG_EXP) {
        flags = toString(requireObjectCoercible(getRegExpFlags(searchValue)));
        if (!~indexOf(flags, 'g')) throw new $TypeError('`.replaceAll` does not allow non-global regexes');
      }
      replacer = getMethod(searchValue, REPLACE);
      if (replacer) return call(replacer, searchValue, O, replaceValue);
      if (IS_PURE && IS_REG_EXP) return replace(toString(O), searchValue, replaceValue);
    }
    string = toString(O);
    searchString = toString(searchValue);
    functionalReplace = isCallable(replaceValue);
    if (!functionalReplace) replaceValue = toString(replaceValue);
    searchLength = searchString.length;
    advanceBy = max(1, searchLength);
    position = indexOf(string, searchString);
    while (position !== -1) {
      replacement = functionalReplace
        ? toString(replaceValue(searchString, position, string))
        : getSubstitution(searchString, string, position, [], undefined, replaceValue);
      result += stringSlice(string, endOfLastMatch, position) + replacement;
      endOfLastMatch = position + searchLength;
      position = position + advanceBy > string.length ? -1 : indexOf(string, searchString, position + advanceBy);
    }
    if (endOfLastMatch < string.length) {
      result += stringSlice(string, endOfLastMatch);
    }
    return result;
  }
});


/***/ }),

/***/ 840:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove from `core-js@4`
__webpack_require__(6679);


/***/ })

}]);
//# sourceMappingURL=component---src-template-post-tsx-1cc9dcd33578f66704ca.js.map