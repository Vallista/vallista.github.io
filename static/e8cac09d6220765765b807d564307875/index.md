---
title: 2019년 7월 회고
tags:
  - 회고
date: 2019-08-01 17:20:29
draft: false
info: false
---


상반기의 마지막 6월을 넘어 하반가 초입인 7월에 다다르면서 올해 초에 하려고 마음먹었던 일을 제대로 완수하지 못했다. 어떤게 부족했고, 어떤일을 잘 했는지 7월 회고를 통해 풀어보려고 한다.

## 7월에 달성한 목표

- **이직하기**
- 기본기 공부
- CI 자동화

7월에는 계획했던 일 중 굵직한 **이직하기**를 완수했다. 원래 계획이라면 상반기에 완수해야 했지만 이직이 말처럼 쉽지않았다. 퇴사는 토끼뜀보다 빠르게 할 수 있으나, 내가 가고 싶은 회사에 가는일은 거북이 걸음보다 느리고 힘들었다.
총 6개의 회사에 면접을 보고 어떤 인재를 원하는지 뼈져리게 느꼇다. 면접에서 요구하는 수준이 만만치 않다. 다양한 방면으로 얕고 넓게 개발을 했던 지난 몇 년간 내 스펙은 다양하게 할 줄 알았지만, 깊이는 없어 면접에서 계속 떨어졌다는 사실을 인지하게 되었다.
그래서, 7월에는 기본기에 대해 조금 더 공부할 필요성을 느끼게 되었다. 또한 반복되는 작업을 매일 매일 하는게 불편해서 CI를 통한 자동화 공부도 하면 좋을꺼라 생각해서 7월에 위 목표를 두었고, 만족할 만큼 목표에 도달했다.

CI는 Jenkins와 Travis CI를 통해 어떤 점에서 무엇이 더 편하고 어떤 상황에 강력한지 비교를 할 수 있게 되었다. 쉽게 정리하자면, Jenkins는 설치형으로써 서버가 있다면 Docker를 통해 컨테이너를 만들어서 추가비용 없이 유지할 수 있다는 장점이 있으나 1부터 100까지 전부 커스터마이징 해야한다는 단점이 있다. 이는 다양한 방면으로의 개발이 필요한 곳에서는 효과적으로 쓰일 수 있지만 테스팅, 배포등의 고정된 정적 시나리오를 갖고있는 프로젝트에서는 불편할 수 있다. 거기에 Jenkins가 UI나 Docker에서 갖고있는 image가 최신이 아니어서 별도로 삽질을 해야한다는 단점도 작용한다. Travis CI는 테스팅과 배포와 같은 정적 시나리오에서 매우 강력한 힘을 보여준다. 인터페이스도 깔끔하며 어떤 작업이 일어나는지 실행 단위마다 터미널이 제공되어 확인 할 수 있다. 하지만 Travis CI는 간편한 대신, Github이나 Gitlab의 Private 프로젝트에 대해서 빌드당 과금을 부여하는 정책을 갖고있다. 그래서 소규모나 돈이 많이 않은 스타트업에서는 무리일 수 있겠다는 생각이 들었다. (가격대가 6만원이상부터 시작).

기본기는 기술의 명칭을 나만의 정의를 갖는 작업이 필요하다 생각했다. 예를들어 Generator와 같은 많이 쓰이는 기술 용어에 대해서 '어떻게 쓰는지는 안다' 하지만 '왜 나왔고 정의가 무엇인지'는 모르는 경우가 많다. 하지만 이런 면이 매우 중요하다 생각했던게, 어떤 기술을 왜 나왔는지 이해도 없이 사용하게 되면 제대로 쓰일 수 없기 때문이며, 협업할 때 명확한 단어 선택이 중요하기 때문이다.

## 7월에 달성하지 못한 목표

- 6시 기상
- 세미 프로젝트에 신경쓰지 못함
- 사람을 만나는데 리소스낭비가 너무 큼

7월에는 이직에 성공하여 한껏 헤이해졌다. 긴장이 다 풀렸기 때문인지 에너지도 충분하지 못했다. 그래서 십며칠 정도를 6시 기상을 하지 못했는데 8월부터 다시 재시작할 생각이다. 6시 기상은 평생의 과제로 안고 살아갈 생각이며 이는 내 라이프사이클로 고정이 될 것이다.

세미 프로젝트에 신경쓰지 못한 이유는 위의 이유와 비슷한데 한껏 헤이해진 면도 있고, 팀원들이 바쁘기 때문에 동기부여가 일어나지 않았던 점이 있다. 하지만 이런 이유도 내가 부덕하기 때문이며 좀 더 바쁘게 살아야겠다는 생각을 안게 되었다.

사람을 만나는데 리소스 소비가 크다는 걸 자각했다. 보통 한달에 사람만나는 약속으로 주말은 풀 약속이 되어있고 평일도 평균 3일씩 약속을 잡아두는 것 같다. 이는 내가 사람을 만다는 일을 좋아하기도 하지만 너무 생각없이 약속을 잡는 경향이 있다는 생각이 들었다. 또한 비용 지출도 왠만하면 내가 사는 편이어서 금액 지출도 컷다. 그래서 기본적으로 적금하던 통장이 위험해진 경우도 많았다. 약속을 많이 잡게 되니까 프로그래밍을 많이 하지 못하게 되어 늦은 밤에 코딩을 하게 되었고 그래서 6시에 일어나는게 매일매일 힘들었다. (하루에 4~6시간 정도밖에 자지 못했다.) 현재 25살에서는 건강하니까 할 수 있는데, 30살이 넘으면 엄청 힘들어진다는 주변의 이야기를 미뤄 보았을 때 미래의 일을 위해서 시간을 킵해 운동에 전력을 다해야겠다 라는 생각이 들었다. 그런 의미에서 약속을 줄이고 자기자신을 관리할 수 있는 시간을 둬야겠다.

## 8월 목표

8월은 7월보다 기운을 차려서 달리려고 준비중이다. 9월부터 이직을 하게 되는데 이직을 하면서 엄청나게 달려야하기 때문이다. 그래서 8월은 휴식기 및 자신을 돌아보는 달로 지정하고 조금 쉬엄쉬엄 가려 준비중이다.

- 글또 포스팅 두 번 하기
- 휴식
- 목표를 다시 잡기