(self.webpackChunk_vallista_land_blog=self.webpackChunk_vallista_land_blog||[]).push([[161,753],{1589:function(e,t,i){var r=i(9859),n=i(1601),o=i(6733),a=i(7079),l=i(95)("toStringTag"),s=r.Object,c="Arguments"==a(function(){return arguments}());e.exports=n?a:function(e){var t,i,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(i=function(e,t){try{return e[t]}catch(i){}}(t=s(e),l))?i:c?a(t):"Object"==(r=a(t))&&o(t.callee)?"Arguments":r}},17:function(e,t,i){var r=i(5968),n=i(2991),o=Math.floor,a=r("".charAt),l=r("".replace),s=r("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,i,r,d,p){var m=i+e.length,h=r.length,g=u;return void 0!==d&&(d=n(d),g=c),l(p,g,(function(n,l){var c;switch(a(l,0)){case"$":return"$";case"&":return e;case"`":return s(t,0,i);case"'":return s(t,m);case"<":c=d[s(l,1,-1)];break;default:var u=+l;if(0===u)return n;if(u>h){var p=o(u/10);return 0===p?n:p<=h?void 0===r[p-1]?a(l,1):r[p-1]+a(l,1):n}c=r[u-1]}return void 0===c?"":c}))}},8311:function(e,t,i){var r=i(5052),n=i(7079),o=i(95)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==n(e))}},895:function(e,t,i){"use strict";var r=i(1176);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},1601:function(e,t,i){var r={};r[i(95)("toStringTag")]="z",e.exports="[object z]"===String(r)},3326:function(e,t,i){var r=i(9859),n=i(1589),o=r.String;e.exports=function(e){if("Symbol"===n(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},1639:function(e,t,i){"use strict";var r=i(3103),n=i(9859),o=i(266),a=i(5968),l=i(8885),s=i(6733),c=i(8311),u=i(3326),d=i(5300),p=i(895),m=i(17),h=i(95),g=i(4231),f=h("replace"),b=RegExp.prototype,v=n.TypeError,x=a(p),w=a("".indexOf),S=a("".replace),R=a("".slice),y=Math.max,k=function(e,t,i){return i>e.length?-1:""===t?i:w(e,t,i)};r({target:"String",proto:!0},{replaceAll:function(e,t){var i,r,n,a,p,h,D,T,j,C=l(this),A=0,I=0,P="";if(null!=e){if((i=c(e))&&(r=u(l("flags"in b?e.flags:x(e))),!~w(r,"g")))throw v("`.replaceAll` does not allow non-global regexes");if(n=d(e,f))return o(n,e,C,t);if(g&&i)return S(u(C),e,t)}for(a=u(C),p=u(e),(h=s(t))||(t=u(t)),D=p.length,T=y(1,D),A=k(a,p,0);-1!==A;)j=h?u(t(p,A,a)):m(p,a,A,[],void 0,t),P+=R(a,I,A)+j,I=A+D,A=k(a,p,A+T);return I<a.length&&(P+=R(a,I)),P}})},5704:function(e,t,i){i(1639)},2177:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var r=JSON.parse('{"author":"Vallista","title":"Blog","titleTemplate":"%s · Vallista","placeholder":"/profile.png","siteUrl":"https://vallista.kr","description":"Vallista의 블로그","twitterUserName":"","github":"vallista","secondary":"https://vallista.tistory.com"}'),n=JSON.parse('{"config":{"name":"마광휘","role":"Software Engineer","bio":["웹 프론트엔드에 관심이 많은 <string>소프트웨어 엔지니어</string>","우아한형제들 커머스웹프론트파트 개발 리딩","커머스 <string>웹 프론트 전반 아키텍쳐 설계 및 서비스 개발</string>","팀, 아울러 실 단위의 운영/개발하는 팀원을 위한 다양한 툴 개발"],"github":"https://github.com/vallista","email":"mgh950714@gmail.com"},"careers":{"title":"경력","list":[{"name":"우아한형제들","position":"Software Engineer / Manager","department":"웹 프론트엔드","startDate":"2019.09","endDate":null,"descriptions":["테크리드 및 매니징 업무 진행","B마트/배민스토어/배민쇼핑라이브 커머스 웹 프론트 전반 설계/구축 및 운영","SUS, 서비스 피쳐 개발 업무 싱크업 및 정리"],"projects":[{"name":"매니저","descriptions":["커머스 웹 전반 고도화 및 사용성 강화를 위한 웹 프론트 과제 바텀업","팀원 일정 관리 및 조율","유관부서 커뮤니케이션 및 일정 조율, 담당자 선정"],"startDate":"2020.12","endDate":null,"which":["주도적인 디자인팀 커뮤니케이션을 통한 웹 컴포넌트 고도화, 서비스 역제안","여러 TF 진행, 웹 프론트 구성원 일정 관리 및 조율"]},{"name":"테크 리더","descriptions":["여러 서비스를 공통적으로 관리할 수 있는 아키텍처 수립 및 개발","TF등 일정 내 효율적으로 협업할 수 있는 아키텍처 구축","장애 컨트롤 및 고도화에 열려있는 프로덕트 구축"],"startDate":"2019.09","endDate":null,"which":["웹 프론트 아키텍쳐 설계","전사 단위 기술 제안, 객체지향/타입스크립트/등 기본기 역량 강화","회고 문화를 통한 이슈 트래킹 및 정보 공유, 코드 리뷰 등 개발 문화 조성","다양한 인원에 대한 (1명부터 10명이상까지) 개발 인원 배정 및 프로덕트 개발 완료 경험"]},{"name":"프로덕트 설계","startDate":"2019.09","endDate":null,"descriptions":["구축한 아키텍처 범위 내 프로덕트 설계"],"which":["공통 컴포넌트, 비즈니스, 데이터를 쉽게 관리하기 위한 계층 설계","서비스와 어드민을 대응할 수 있는 디자인 시스템 레이어 설계","비즈니스 로직을 쉽게 테스트하고 격리할 수 있는 클래스 기반 모델 레이어 설계","Loadable Component와 Node.js를 사용하여 SSR 환경 구축","Vue -> React 전환 경험, 전환하는 이유 등 시장의 형태에 따른 프로덕트 구축 가능","CRA -> SSR (Loadable Component -> Next.js) 점진적 고도화 진행, 기술적으로 왜 필요한지 이해","프레임워크에 상관없이 쉽게 사용할 수 있는 TypeScript 기반 로그 시스템 제작, 비즈니스 로직에서의 로그의 분리와 코드 응집도 개선","비즈니스, 인원에 따른 적합한 기술 선정 및 설계"]},{"name":"서비스 운영","startDate":"2019.09","endDate":null,"descriptions":["B마트/배민스토어/배민쇼핑라이브 모바일 프론트 서비스 운영","전사 통합 셀러오피스, 어드민 프론트 서비스 운영"],"which":["SSR 기반 웹 어플리케이션 운영","Sentry 적용을 통한 장애 감지","구글 애널리틱스를 통한 이벤트 페이지 지표 측정","기존 마케터가 마크업을 하던 방식에서 매달 수십개 이상의 이벤트 발행하는 자동화 툴 개발/운영","개발에 필요한 유틸리티를 쉽게 제작해주는 툴 개발/운영","기존 산재하던 레거시 소스 통합, 성능 최적화"]},{"name":"비즈니스 개발","startDate":"2019.09","endDate":null,"descriptions":["주문, 결제, 커머스 전반 비즈니스 플로우에 대한 이해","물류 시스템에 대한 웹 프론트 이해","퀵 커머스 서비스에 대한 웹 프론트 이해","배달/배송 비즈니스에 대한 이해"],"which":["장바구니, 주문서, 결제 등 결제 플로우 페이지 개발","상품 상세, 정보제공고시 등 상품 페이지 개발","이메일 고지 / 영수증 화면 개발","센터에서 활용되는 PDA 웹앱 개발","POS기 기반의 웹 어플리케이션을 통한 영수증 출력 프로그램 개발"]},{"name":"인프라","startDate":"2019.09","endDate":null,"descriptions":["웹 서비스를 지탱하는 인프라 설정/사용","팀 내 데브옵스 구축"],"which":["AWS Elastic Beanstalk + Code deploy를 사용한 Blue-green 무중단 배포","S3 - Cloud Front를 이용한 정적 리소스 비용 절감 및 CDN 사용","웹 정적 사이트 배포 및 SSR 인프라 개발","데브옵스 구축을 통한 코드리뷰 자동화 및 자동 리포트 등 개발"]}]},{"name":"와인포인트","department":"개발팀","position":"Software Engineer","startDate":"2018.02","endDate":"2019.08","fold":true,"descriptions":["와인포인트는 \'와인을 넘어, 주류 시장 중간 과정에 들어가는 마진을 최소화하여 정직한 가격으로 소비자들에게 공급한다\'는 포부를 갖고 탄생한 서비스입니다.","현재 주류는 전통주를 제외하고 대면해서 신분증을 제시하지 않으면 구매가 불가능합니다. 그래서 와인포인트는 앱 내에서 주문하면 받고 싶은 위치의 가장 가까운 이마트24 편의점에서 대면하여 결제하고 픽업할 수 있습니다."],"projects":[{"name":"와인포인트 웹 프론트엔드 개발","descriptions":["와인포인트 웹 버전 프론트엔드를 개발하였습니다. (비오픈)"],"startDate":"2019.03","endDate":"2019.08","which":["와인포인트 와인 상세페이지 웹 컨버팅","와인포인트 앱 비밀번호 변경 페이지 개발"],"techStacks":["React.js","TypeScript","Redux"]},{"name":"와인포인트 데이터 어드민 개발","descriptions":["와인을 등록할 수 있는 어드민 페이지를 개발하였습니다."],"startDate":"2018.02","endDate":"2019.08","which":["대쉬보드 데이터 시각화 작업","JWT를 이용한 인증","와인 등록 기능 개발"],"techStacks":["Vue","JavaScript","PostgreSQL","Express.js","knex.js"]},{"name":"와인포인트 주문 어드민 개발","descriptions":["오프라인 매장 및 물류창고에서 사용하는 어드민을 개발하였습니다."],"startDate":"2018.03","endDate":"2019.08","which":["재고 관리 기능 개발","와인 재고 증감 기능 개발","주문 이행 기능 개발","영수증 발행 기능 개발","바코드 인식 기능 추가","배달현황 기능 추가"],"techStacks":["Vue","JavaScript","PostgreSQL","Express.js","knex.js"]},{"name":"와인포인트 랜딩 페이지 개발","descriptions":["와인포인트 초창기 랜딩 페이지를 개발하였습니다."],"startDate":"2018.07","endDate":"2018.07","which":["디자인 작업","마크업 작업"],"techStacks":["Vue"]}]},{"name":"Republic Dot.","department":"개발팀","position":"Software Engineer","startDate":"2017.07","endDate":"2017.12","fold":true,"descriptions":["Republic Dot은 세상의 모든 리뷰 \'리뷰왕 김리뷰\'를 운영하던 김리뷰가 리뷰 커뮤니티를 목표로 만든 스타트업 입니다.","유저는 자신의 리뷰로 아이템을 살 수 있고 Republic Dot에서는 B2B 시장에서 아이템을 홍보해주고 수익을 창출할 수 있는 리뷰 순환 구조를 만들고자 탄생한 커뮤니티 서비스입니다."],"projects":[{"name":"Review Republic","descriptions":["Review Republic은 최대 동시 접속자수가 4000명까지 있었던 리뷰 커뮤니티 서비스입니다."],"startDate":"2017.07","endDate":"2017.12","which":["React 기반 커뮤니티 사이트 유지보수 및 개발"],"techStacks":["React.js","JavaScript","Meteor.js"]}]},{"name":"(주)HOMI","department":"개발팀","position":"Game Client Programmer","startDate":"2014.02","endDate":"2017.06","fold":true,"descriptions":["Unity 3D, Cocos2d-x를 이용해 크로스 플랫폼 모바일 게임 개발을 진행했습니다.","2년 10개월간 병역 특례를 받아 병역의 의무를 수행하였습니다."],"projects":[{"name":"태권 VR","descriptions":["Vive VR과 Perception Neuron을 사용한 바디 스캔, VR 환경에서 장비를 입고 태권도 자세를 취할 수 있도록 개발","Unity3D 환경에서 VR 얼라이어싱 현상 개선"],"startDate":"2016.11","endDate":"2017.06","which":["Vive VR + Unity3D를 이용한 3D 게임 개발"],"techStacks":["Vive VR","Unity 3D","Serial Port 통신","Perception Neuron"]},{"name":"Pandaria Dash","descriptions":["러닝 장르 게임으로써 장애물을 피하고 코인을 모으는 게임"],"startDate":"2015.11","endDate":"2016.12","which":["Vive VR + Unity3D를 이용한 3D 게임 개발","폰의 사양에 따라서 텍스쳐 크기를 작게 컨버트해서 메모리 최적화","Terrain이 퍼포먼스 최적화를 위한 Model fbx파일을 Unity로 옮겨와서 bake 진행"],"techStacks":["Unity3D"]},{"name":"Tile Road","descriptions":["꼬리와 머리를 클리어 존에 배치시키는 퍼즐게임","iOS, AOS 동시 런칭"],"startDate":"2016.02","endDate":"2016.07","which":["맵툴, 인게임 요소를 제작","AdColony, Vungle, Google Play Games, Unity Ads, Google Ads, EveryDay 등의 수많은 dependency 포함하여 충돌나는 문제 해결"],"techStacks":["Unity3D"]},{"name":"TabBrick","descriptions":["장애물을 피하면서 가장 위로 올라가는 점수를 내는 게임"],"startDate":"2015.03","endDate":"2016.02","which":["맵툴, 인게임 요소를 제작"],"techStacks":["Unity3D"]},{"name":"4D Gunslinger","descriptions":["승마 헬스 기계를 탑승하여 말의 속도와, 총을 들고 진행하는 4D 게임"],"startDate":"2014.06","endDate":"2015.03","which":["아두이노를 통해 승마 기계와의 시리얼 포트 통신을 해서 신호를 조작","레이싱 맵 제작할 수 있는 에디터 개발"],"techStacks":["Unity3D"]},{"name":"4D BIGWAR","descriptions":["4D 체감형 머신을 탑승하고 그 위에서 조작을 통해서 발칸을 발사하여 게임을 진행"],"startDate":"2014.02","endDate":"2015.03","which":["3D 광원 효과 및 지형 모델 최적화","Unity3D 에디터 작업"],"techStacks":["Unity3D"]}]}]},"skills":{"title":"기술","list":[{"title":"HTML/CSS","descriptions":[{"title":"Semantic Markup을 중요하게 여기며, HTML를 작성할 때 의미를 부여합니다.","subTitle":["HTML이 길어질 수록 Semantic Markup이 중요해집니다. 그러므로, 초기에 작성할 때 부터 고려를 많이하는 편입니다."]},{"title":"CSS를 짤 때 최대한 간단하고, 개발자 친화적으로 짤 수 있게 노력합니다.","subTitle":["복잡한 문법을 style에서 담으려고 하지 않습니다. style은 이해하기 쉬울수록 최고라고 생각하기 때문입니다. CSS를 개발할 때 tag들을 각 요소별로 구분하여 쉽게 알아볼 수 있도록 코딩합니다."]},{"title":"SASS(SCSS)와 같은 CSS Preprocessor를 사용할 수 있습니다.","subTitle":["CSS Module과 SCSS 조합을 선호합니다.","Emotion 및 Styled Component를 활용한 프로젝트를 설계 할 수 있고, 구현이 가능합니다."]},{"title":"여러 브라우저를 지원할 수 있습니다.","subTitle":["Chrome, Safari, Firefox등 여러 브라우저들을 지원하는 앱을 만들 수 있습니다."]},{"title":"favicon, Open Graph protocol, SEO 등의 적용 경험이 있습니다.","subTitle":["네이버, 구글등 Robot.txt를 통해 검색되도록 지원해본 경험이 있습니다."]}]},{"title":"TypeScript","descriptions":[{"title":"TypeScript를 이용한 React 코딩에 익숙합니다.","subTitle":["다양한 프로젝트 경험으로 코드 리딩 및 작성이 가능합니다."]},{"title":"문법을 잘 활용하며, 적절한 타입을 사용합니다.","subTitle":["객체지향 프로그래밍에 익숙하기 때문에 상속 등을 통한 클래스 타입에도 강점을 지닙니다."]},{"title":"Generic에 익숙합니다.","subTitle":["Generic과 더불어 다양한 문법들 ex) Overloading, Tuple 등을 이용한 코딩을 할 수 있습니다."]}]},{"title":"JavaScript","descriptions":[{"title":"ES2015 이후의 JavaScript 문법에 익숙합니다.","subTitle":["JavaScript ES2015 이상의 문법을 수월하게 작성하거나 읽을 수 있습니다."]},{"title":"Vanilla JavaScript를 통해 DOM을 다루는데 익숙합니다.","subTitle":[]},{"title":"Reduce, Map과 같은 고차함수를 적극적으로 사용합니다.","subTitle":[]},{"title":"비동기 작업을 하는데 익숙합니다. (promise, async await)","subTitle":[]}]},{"title":"SPA Framework","descriptions":[{"title":"크거나 작은 규모의 웹 프로그램을 설계할 수 있습니다.","subTitle":["모바일 웹앱, PC, 어드민 등 다양한 프로젝트를 리딩하고 개발한 경험이 있습니다."]},{"title":"React hooks를 사용하여 적절하게 데이터를 분배합니다.","subTitle":["Custom hooks을 줄곧 잘 쓰며, Context API를 사용하여 맥락에 맞는 컴포넌트 상태 격리를 통한 구현이 가능합니다.","이러한 시스템을 이용하여 디자인 시스템을 구현한 경험이 있습니다."]},{"title":"효율적인 데이터 구조를 작성하여 유지보수 용이하게 Folder Structure를 구성합니다.","subTitle":[]},{"title":"Redux, Vuex와 같은 상태 관리 패턴에 대해서 사용해봤으며, 복잡한 코딩을 피합니다. 상태 관리 패턴이 소스가 길어질 수록 레거시가 많이 쌓이기 때문입니다.","subTitle":[]},{"title":"Container 와 Presentational의 차이점을 인지하고 구조를 서버에서 데이터 받는 부분과 데이터를 뿌려주는 부분을 명확하게 작성합니다","subTitle":[]},{"title":"Atomic Design으로 컴포넌트 분할을 하거나 프로젝트에 맞게 구조를 작성합니다.","subTitle":[]},{"title":"React, Vue 컴포넌트 라이프 사이클을 이해하여 적절하게 활용합니다.","subTitle":[]}]},{"title":"Server","descriptions":[{"title":"Express.js를 활용하여 RESTful API를 작성할 수 있습니다.","subTitle":[]},{"title":"라우팅 규칙을 적절하게 사용하여 경로를 작성합니다.","subTitle":[]},{"title":"PostgreSQL 9, 10 버전을 사용할 수 있으며 쿼리 작성이 가능합니다.","subTitle":["transaction 처리, window function 등을 사용하여 PostgreSQL만의 표현을 사용할 수 있습니다."]},{"title":"JWT 인증을 사용하여 브라우저 쿠키에 저장하고 세션 처리를 할 수 있습니다.","subTitle":[]}]},{"title":"DevOps","descriptions":[{"title":"자동화 프로세스를 만들어서 팀 내 생산성을 높힙니다.","subTitle":["코드리뷰 자동화 프로세스"]},{"title":"AWS EC2, ECS, S3 등의 인프라 요소를 사용해본 경험이 있습니다.","subTitle":[]},{"title":"Jenkins, Docker를 사용하여 개발 환경을 구축할 수 있습니다.","subTitle":[]},{"title":"Travis CI, AWS Code Deploy, DinD, docker compose, AWS S3 사용하여 무중단배포를 구축할 수 있습니다.","subTitle":[]},{"title":"Nginx 설정을 다룰 수 있으며, PM2, Nginx를 통해 로그 분석이 가능합니다.","subTitle":[]},{"title":"Crontab, Slack bot 등의 경험이 있습니다.","subTitle":[]}]},{"title":"그 외","descriptions":[{"title":"Git을 능숙하게 다룰 수 있습니다.","subTitle":["git flow, github flow, gitlab flow를 회사에서 적용해본 경험이 있습니다."]}]}]},"hobby":{"description":"취미","list":[{"title":"블로깅","url":"https://vallista.kr","descriptions":["개발을 좋아해서 틈틈히 공부를 하고 글을 작성하여 블로그에 투고합니다.","6년간 꾸준히 글을 써오면서 성실한 면이 부각되었다고 생각합니다.","위의 제목을 누르면 제 블로그를 가실 수 있어요!","https://vallista.tistory.com/ 에서 과거의 글을 보실 수 있어요!"]},{"title":"운동","url":null,"descriptions":["운동을 통해 스트레스를 해소하고 건강을 챙깁니다.","끊임없는 야근의 원동력이 되는 중요한 덕목입니다."]},{"title":"맛집탐방","url":null,"descriptions":["카카오맵에 400개 이상의 맛집이 잠들어있는 일명 \'마슐랭\'","맛있는 음식점을 세계 여행다니면서 기록하고 있습니다."]},{"title":"웹 만들기","url":null,"descriptions":["만들고 싶은 웹을 만듭니다. 좋아하는 연예인의 팬 페이지, 블로그 템플릿 같은 디자인적 요소가 많은 걸 좋아해요."]}]},"speaker":{"description":"발표","list":[{"title":"우아콘 - 웹앱 서비스 히스토리를 관리하기 위한 여정","url":"https://www.youtube.com/watch?v=q_NBDCtZaQU"},{"title":"Vuetiful.korea - Vue.js를 이용한 백오피스 구현기 발표","url":"https://vuejs-kr.github.io/meetup/#/"},{"title":"NaverD2 - Vue.js를 이용한 백오피스 제작 경험 공유","url":"https://www.youtube.com/watch?v=_WACO1jIIhE"}]},"activities":{"description":"활동","list":[{"title":"2021.03 ~ 2021.06 우아한 테크코스 프론트엔드 리뷰어 활동","url":"https://github.com/woowacourse"},{"title":"2020.06 ~ 2020.12 패스트 캠퍼스 모의 면접관 활동","url":null},{"title":"2020.12 우아톤 제 2회 2위","url":null},{"title":"2019.12 우아톤 제 1회 3위","url":null},{"title":"2019.05.18 스포카 무쓸모톤 1위","url":"https://festa.io/events/281"},{"title":"2018.02 ~ STACCATO 멘토","url":null},{"title":"2016.06 ~ STAC 멘토","url":null},{"title":"2016.06 ~ 2016.08 국제글로벌통상고등학교 강사","url":null},{"title":"2014.02 ~ 2017.06 한국게임과학고등학교 강사","url":null}]},"lectures":{"description":"강연","list":[{"title":"2021.6.1 [우아한인터뷰] 프론트엔드 개발자 \'마광휘님\'","url":"https://www.youtube.com/watch?v=MUF-13_6UjQ"},{"title":"2018.07 한국게임과학고등학교, “게임 개발자에서 서비스 개발자로” 주제로 강연","url":null},{"title":"2018.04 한세사이버보안고등학교, “게임 개발자에서 서비스 개발자로” 주제로 강연","url":null},{"title":"2015.08 장성중학교, “게임 프로그래머 직업에 대해” 주제로 강연","url":null}]},"awards":{"description":"수상","list":[{"title":"2020 우아한형제들 올해의 우수사원","url":null},{"title":"2016.08 제 15회 KWC, 지도교사상 (우송대학교 총장상) - 우송대학교","url":null},{"title":"2013.11 Smarteen App Challenge, 우수상 (대표이사상) - 캡스톤 파트너즈","url":null},{"title":"2013.10 비즈쿨 창업 경진대회, 은상 - 창업진흥원","url":null},{"title":"2013.08 제 12회 KWC, 대상 (대전광역시 교육감상) - 우송대학교","url":null},{"title":"2013.08 제 11회 게임캠프 게임제작 부분, 대상 (전라북도지사상) - 전라북도","url":null},{"title":"2013.07 제 9회 주니어 창업 경진대회, 우수상 - 한밭대학교","url":null},{"title":"2013.05 제 15회 고교생 만화 애니메이션 공모전 게임 부문, 은상 (상명대학교 총장상) - 상명대학교","url":null},{"title":"2013.04 2013 기능경기대회 전라북도, 금상 (기능경기 위원장상) - 전라북도 기능경기 위원회","url":null},{"title":"2013.02 KBS 스카우트 인터파크편, 최종 우승 (1등) - KBS","url":null},{"title":"2012.11 금강 청소년 영상 예술제 게임 부문, 금상 (한국컨텐츠진흥원장상) - 한국컨텐츠진흥원","url":null},{"title":"2012.06 제 18회 서울정보과학경시대회 장려상 - 서울정보과학경시대회","url":null}]}}');function o(){return{profile:r,resume:n}}},1435:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return I}});var r=i(2784),n=i(3919),o=i(8778),a=i(3367),l=i(2322),s=function(){var e=(0,r.useRef)(null),t=(0,r.useState)({status:"pending"}),i=t[0],n=t[1];return(0,a.b6)((function(){var t,i,r;if(!((null!==(t=null===(i=e.current)||void 0===i?void 0:i.children)&&void 0!==t?t:[]).length>0)){var o=document.createElement("script");o.onload=function(){n({status:"success"})},o.onerror=function(){n({status:"failure"})},o.async=!0,o.src="https://utteranc.es/client.js",o.setAttribute("repo","Vallista/vallista.github.io"),o.setAttribute("issue-term","title"),o.setAttribute("theme","github-light"),o.setAttribute("crossorigin","anonymous"),null===(r=e.current)||void 0===r||r.appendChild(o)}})),(0,l.jsxs)(c,{children:["success"!==i.status&&(0,l.jsx)(a.$j,{size:50}),(0,l.jsx)("div",{ref:e})]})},c=(0,n.Z)("div",{target:"e1rut9220"})("max-width:900px;width:100%;margin:4rem auto;box-sizing:border-box;padding:2rem 2rem;border-top:1px solid ",(function(e){return e.theme.colors.PRIMARY.ACCENT_2}),";&>p{margin-bottom:1.5rem;font-size:1.8rem;",(function(e){var t=e.theme;return(0,o.iv)("color:",t.colors.PRIMARY.FOREGROUND,";","")}),";}&>a{border:none!important;outline:none!important;transition:none!important;background:none!important;&:hover{background:none!important;border-color:none!important;}}"),u=(i(5704),i(4541));var d=function(e){var t=(0,u.useLocation)(),i=(0,r.useRef)(null),n=(0,r.useMemo)((function(){return e.html.replaceAll("<pre",'<div class="markdown-wrapper"><pre').replaceAll("</pre>","</pre></div>")}),[]);return(0,r.useEffect)((function(){var e,r;Array.from(null!==(e=null===(r=i.current)||void 0===r?void 0:r.getElementsByTagName("*"))&&void 0!==e?e:[]).filter((function(e){var t,i;return Number(null!==(t=null===(i=e.tagName)||void 0===i?void 0:i[1])&&void 0!==t?t:"999")<6})).forEach((function(e){if(!(e.getElementsByTagName("a").length>0)){var t=e.innerHTML.replaceAll(" ","-");e.innerHTML='\n          <a href="#'+t+'" aria-label="'+t+' permalink">\n            <svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16" \n            stroke=\'currentColor\'\n            stroke-width=\'1\'\n            stroke-linecap=\'round\'\n            stroke-linejoin=\'round\'\n            fill=\'none\'\n            shape-rendering=\'geometricPrecision\'>\n              <path\n                fill-rule="evenodd" \n                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">\n              </path>\n            </svg>\n          </a>\n          '+e.innerHTML+"\n        ",e.id=t}})),window.onload=function(){setTimeout((function(){var e,i,r=decodeURIComponent(t.hash).substring(1);r&&window.scrollTo(0,null!==(e=null===(i=document.getElementById(r))||void 0===i?void 0:i.getBoundingClientRect().bottom)&&void 0!==e?e:0)}))}}),[]),(0,l.jsx)("div",{children:(0,l.jsx)(m,{ref:i,dangerouslySetInnerHTML:{__html:n}})})},p=(0,n.Z)("section",{target:"ez4kqd1"})({name:"ufexmo",styles:"width:100%;max-width:900px;padding:2rem;margin-left:auto;margin-right:auto;@media screen and (max-width: 1024px){padding:1rem;}"}),m=(0,n.Z)(p,{target:"ez4kqd0"})("width:calc(100vw - 400px);@media screen and (max-width: 1308px){width:calc(100vw - 408px);}@media screen and (max-width: 1024px){width:calc(100vw - 8px);}",(function(e){var t=e.theme;return(0,o.iv)("p>img{width:100%;}p{color:",t.colors.PRIMARY.ACCENT_8,";font-weight:400;line-height:1.6;letter-spacing:-0.02rem;}p,table,ul,blockquote,ol{font-size:1rem;margin:0 0 2rem;}center{color:",t.colors.PRIMARY.ACCENT_5,";font-size:0.8rem;font-weight:400;line-height:1.5;letter-spacing:-0.02rem;margin:0 0 2rem;}p+center,iframe+center{margin-top:-1rem;}h1,h2,h3,h4,h5{position:relative;color:",t.colors.PRIMARY.FOREGROUND,";line-height:1.2;scroll-margin-top:60px;letter-spacing:-0.02rem;font-weight:600;background:none;&>a{color:",t.colors.PRIMARY.FOREGROUND,";opacity:0;border:none;position:absolute;top:50%;left:0;transform:translate(-100%, -50%);padding-right:4px;}&:hover>a{color:",t.colors.PRIMARY.FOREGROUND,";background:none;border:none;opacity:1;}}h2:not(:first-of-type),h3:not(:first-of-type),h4:not(:first-of-type){margin-top:3rem;}h1,h2,h3,h4,h5{margin:0 0 1.25rem;}h1,h2{font-size:1.8rem;filter:brightness(1);}h3{font-size:1.4rem;filter:brightness(1.3);}h4{filter:brightness(1.5);font-size:1.1rem;padding-bottom:0.25rem;text-transform:uppercase;}ul,ol{padding-left:1.5rem;box-sizing:border-box;line-height:1.6;& ul{margin-top:8px;}& ul,& ol{margin-bottom:0;}}ul{list-style:disc;}ol{list-style:decimal;}ul li{margin-bottom:0.5rem;&::marker{font-weight:600;color:",t.colors.HIGHLIGHT.PINK,";}}ol li{margin-bottom:0.5rem;&::marker{font-weight:600;color:",t.colors.HIGHLIGHT.PINK,";}}li>a{white-space:inherit;word-wrap:break-word;}li{color:",t.colors.PRIMARY.FOREGROUND,";& code{font-weight:600;color:",t.colors.HIGHLIGHT.PINK,";white-space:inherit;& * span{white-space:inherit;}& * span:not([class='grvsc-source']){padding-left:0!important;}}}iframe{margin-bottom:2rem;}div[class*='markdown-wrapper']{font-size:0.9rem;text-size-adjust:none;margin:1rem -1rem;overflow-x:auto;overflow-y:hidden;box-sizing:border-box;background-color:var(--scrollbar-background);padding-left:2rem;scrollbar-width:8px;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-background);&::-webkit-scrollbar{background:var(--scrollbar-background);height:8px;width:8px;}&::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:0;}@media screen and (min-width: 1350px){margin-left:-3.5rem;margin-right:-3.5rem;margin-bottom:2rem;}@media screen and (max-width: 1024px){padding-left:1rem;}}pre{border-radius:0;float:left;margin-bottom:0;margin-top:0;min-width:calc(100% + 1rem);padding:1rem 1rem 1rem 0;-webkit-font-smoothing:subpixel-antialiased;overflow:initial;white-space:pre;font-family:var(--code-font-family);word-wrap:normal;hyphens:none;line-height:1.5;tab-size:2;word-break:normal;word-spacing:normal;&>code{font-weight:600;color:",t.colors.HIGHLIGHT.PINK,";white-space:inherit;& * span{white-space:inherit;}& * span:not([class='grvsc-source']){padding-left:0!important;}}}p>code{font-weight:600;color:",t.colors.HIGHLIGHT.PINK,";white-space:inherit;& * span{white-space:inherit;}& * span:not([class='grvsc-source']){padding-left:0!important;}}img[class='gatsby-resp-image-image']{box-shadow:none!important;}img[class='gatsby-resp-image-image'][alt]:after{display:flex;justify-content:center;align-items:center;position:absolute;top:0;left:0;width:100%;height:100%;background:",t.colors.PRIMARY.BACKGROUND,";font-weight:200;content:'이미지를 표시할 수 없어요. :(';}blockquote{background:",t.colors.PRIMARY.ACCENT_2,";margin:0 -1rem;margin-bottom:2rem;padding:1rem 1rem;border-left:6px solid ",t.colors.HIGHLIGHT.PINK,";&>p{margin-bottom:0;}@media screen and (min-width: 1350px){margin-left:-3.5rem;margin-right:-3.5rem;}@media screen and (max-width: 1024px){padding-left:1rem;}}","")}),";"),h=i(8447),g=i(5290);var f=function(e){var t=e.title,i=e.tags,r=e.date,n=e.author,o=e.timeToRead,s=e.children,c=(0,g.hK)(r),d=c[0],p=c[1],m=c[2],f=(0,u.useLocation)(),D=(0,a.e1)(),T=d+"년 "+Number(p)+"월 "+Number(m)+"일";return(0,l.jsx)(b,{children:(0,l.jsxs)(v,{children:[(0,l.jsxs)(y,{children:[(0,l.jsx)(a.xv,{as:"h1",size:40,weight:800,children:t}),(0,l.jsx)(a.LZ,{y:1}),i&&(0,l.jsx)(a.W2,{row:!0,wrap:"wrap",gap:.5,children:i.map((function(e){return(0,l.jsxs)(a.Ct,{size:"large",children:["#",e]},e)}))}),(0,l.jsx)(a.LZ,{y:1}),(0,l.jsxs)(x,{children:[(0,l.jsxs)(w,{children:[(0,l.jsxs)(a.xv,{size:16,as:"span",children:["Written by ",(0,l.jsx)(h.Link,{to:"/",children:n})]}),(0,l.jsx)(a.LZ,{y:.25}),(0,l.jsxs)(a.xv,{size:14,as:"span",children:[T," · ",o," min read"]})]}),(0,l.jsxs)(S,{children:[(0,l.jsx)(a.u,{text:"페이스북 공유",position:"top",children:(0,l.jsx)(R,{onClick:function(){D.error("페이스북 공유 기능은 개발중입니다.")},children:(0,l.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:(0,l.jsx)("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})})}),(0,l.jsx)(a.u,{text:"링크 복사",position:"top",children:(0,l.jsx)(R,{onClick:function(){(0,a.JG)(f.href),D.success("링크를 복사했습니다.")},children:(0,l.jsxs)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,l.jsx)("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),(0,l.jsx)("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})})})]})]})]}),(0,l.jsx)(a.LZ,{y:1}),(0,l.jsx)(k,{children:s})]})})},b=(0,n.Z)("header",{target:"e1u77vp87"})({name:"1azakc",styles:"text-align:center"}),v=(0,n.Z)("div",{target:"e1u77vp86"})({name:"1j1kikd",styles:"display:flex;flex-direction:column;justify-content:flex-start;align-items:center;max-width:900px;padding:2rem;margin-left:auto;margin-right:auto;@media screen and (max-width: 1024px){padding:1.5rem 1rem;}"}),x=(0,n.Z)("div",{target:"e1u77vp85"})({name:"715507",styles:"display:flex;justify-content:space-between;align-items:center;width:100%;@media screen and (max-width: 1024px){flex-direction:column-reverse;align-items:flex-start;justify-content:center;}"}),w=(0,n.Z)("div",{target:"e1u77vp84"})({name:"1u6n871",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start"}),S=(0,n.Z)("div",{target:"e1u77vp83"})({name:"1yvy03y",styles:"display:flex;gap:0.5rem;margin-bottom:1.5rem"}),R=(0,n.Z)("button",{target:"e1u77vp82"})("display:flex;justify-content:center;align-items:center;width:30px;height:30px;outline:none;border:none;border-radius:15px;cursor:pointer;padding:0;",(function(e){var t=e.theme;return(0,o.iv)("background:",t.colors.PRIMARY.FOREGROUND,";color:",t.colors.PRIMARY.BACKGROUND,";","")}),";"),y=(0,n.Z)("div",{target:"e1u77vp81"})({name:"1cdt2kf",styles:"display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%;padding:0 1.5rem;&>h1{text-align:left;}"}),k=(0,n.Z)("div",{target:"e1u77vp80"})({name:"1d3w5wq",styles:"width:100%"}),D=i(4213);var T=function(e){var t=e.name,i=e.posts;return(0,l.jsx)(a.UO,{title:t,card:!0,size:"medium",subtitle:"시리즈의 글 ("+i.length+"개)",children:(0,l.jsx)(a.W2,{children:(0,l.jsx)(j,{children:i.map((function(e){return(0,l.jsx)(C,{timeToRead:e.timeToRead,children:(0,l.jsx)("span",{onClick:function(){return t=e.slug,void(0,h.navigate)(t);var t},children:e.name})},e.name)}))})})})},j=(0,n.Z)("ol",{target:"e1099qf81"})({name:"1o02nna",styles:"padding-left:1.5rem;box-sizing:border-box;line-height:1.6;list-style:decimal"}),C=(0,n.Z)("li",{target:"e1099qf80"})((function(e){var t=e.theme,i=e.timeToRead;return(0,o.iv)("margin-bottom:0.5rem;&::marker{font-weight:600;color:",t.colors.HIGHLIGHT.PINK,";}&::after{content:'- ",i,"분';margin-left:0.2rem;font-size:0.8rem;}&>span{cursor:pointer;border-bottom:2px solid ",t.colors.HIGHLIGHT.PINK,";font-weight:600;text-decoration:none;color:",t.colors.PRIMARY.FOREGROUND,";transition:all 0.1s ease-out;&:hover{background:",t.colors.HIGHLIGHT.PINK,";border-top:2px solid ",t.colors.HIGHLIGHT.PINK,";color:",t.colors.PRIMARY.BACKGROUND,";}}","")}),";"),A=i(2177),I=function(e){var t=(0,A.Z)().profile,i=e.data.allMarkdownRemark,n=i.nodes,o=i.group,a=e.data.markdownRemark,c=a.timeToRead,u=a.html,p=e.data.markdownRemark.frontmatter,m=p.title,h=p.date,g=p.image,b=p.tags,v=p.series,x=(0,r.useCallback)((function(){return n.filter((function(e){return e.frontmatter.series})).filter((function(e){return e.frontmatter.series===v})).map((function(e){return{name:e.frontmatter.title,timeToRead:e.timeToRead,slug:e.fields.slug}}))}),[e.data]);return(0,l.jsxs)("div",{children:[(0,l.jsx)(D.p,{name:m,image:null==g?void 0:g.publicURL,isPost:!0}),(0,l.jsx)(f,{title:m,date:h,image:null==g?void 0:g.publicURL,tags:b,timeToRead:c,author:t.author,children:v&&o&&(0,l.jsx)(T,{name:v,posts:x()})}),(0,l.jsx)(d,{html:u}),(0,l.jsx)("section",{id:"comments"}),(0,l.jsx)(s,{})]})}}}]);
//# sourceMappingURL=component---src-template-post-tsx-05aab9e2b22ade655a04.js.map