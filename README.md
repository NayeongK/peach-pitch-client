## **PEACHPITCH**

PEACHPITCH는 온라인으로 프레젠테이션을 만들고 슬라이드쇼 모드로 발표를 할 수 있는 웹 어플리케이션 입니다.
(preview 추가 필요)
(배포 링크 추가필요)

## **Table of Contents**

- Intro
- Tech stack
- Features
- Challenges
- Project Timeline
- Our team

## **Intro**

**왜 프레젠테이션 어플리케이션인가?**

저희 팀은 저희에게 새롭고, 도전적이며, 동시에 동적이고 시각적인 효과를 보여 줄 수 있는 프로젝트를 구현하는 것이 목표였습니다.
그동안 익숙하게 사용해왔던 프레젠테이션 앱을 직접 구현해 보는 것이 저희가 원했던 프로젝트의 조건들에 부합하여 진행하게 되었습니다.

## **Tech Stack**

**Client**: React, React-Query

**Server**: Node.js, Express.js, MongoDB, Amazon S3

**Test**: jest, React Testing Library (RTL)

**Deployment**: Netlify, AWS Elastic Beanstalk

## **Feature**

### **프레젠테이션 생성 및 내 프레젠테이션 보기**

- 로그인 이후, 사용자는 새로운 프레젠테이션을 생성 가능
- 사용자는 내가 만든 프레젠테이션을 볼 수 있고, 열람하여 편집 가능
- 사용자는 내가 만든 프레젠테이션을 삭제 할 수 있음 (해당 프레젠테이션에서 오른쪽 마우스 클릭)

### **프레젠테이션 파일의 편집**

**생성**

- 새로운 슬라이드 생성 및 삭제
- 이미지 업로드 및 삭제 (업로드 된 amazon S3에 저장)
- 도형 생성 및 삭제
- 텍스트박스 생성 및 삭제

**편집**

- 이미지, 도형, 텍스트박스의 수정 (내부색, 테두리색, 폰트, 폰트사이즈, 폰트스타일, 폰트정렬)
- 개체의 z-index 수정

**저장**

- 프레젠테이션, 슬라이드, 개체에 대해서 추가, 수정, 삭제작업이 이뤄질 경우 자동저장

**애니메이션 추가 및 수정**

- 각 개체를 누르고 애니메이션 추가/삭제
- 슬라이드 내에서의 애니메이션 순서 수정

**슬라이드 쇼**

- 사용자는 전체 프레젠테이션을 슬라이드 쇼 형식으로 재생할 수 있습니다.
- 이때 각 슬라이드와 객체는 설정된 순서와 애니메이션 효과에 따라 표시됩니다.

<details>
<summary>Contribution</summary>

**클라이언트 (컴포넌트별)**

- 기본 설정 및 환경변수 설정 : 곽나영
- 로그인 화면 및 기능 (Login) : 문형석
- 메인페이지 화면 및 기능 (Main) : 문형석
- 프레젠테이션 편집기능 (Presentation)
    - 슬라이드 장표 (SlideCanvasLayout) : 문형석
    - 개체 정의 (Object) : 김정우
    - 개체 삽입 (ObjectCreator) : 김정우, 문형석 공동작업
    - 개체 수정 (ObjectEditor)
        - 색 및 폰트 (StyleEditor - ColorEditor, TextEditor) : 김정우
        - z-index (StyleEditor - ArrangeEditor) : 곽나영
    - 애니메이션 효과추가 및 수정(AnimationEditor) : 곽나영
    - 슬라이드 네비게이터(SlideNavigator) : 곽나영
    - 슬라이드 쇼 모드(ScreenShowLayout)와 애니메이션 효과 (Styles) : 문형석
    - 스타일 설정 (Styles) : 문형석
- 각 컴포넌트의 에러처리 : 곽나영

**서버**

- 로그인 및 토큰인증 : 곽나영
- 애니메이션 추가,수정,삭제 : 곽나영
- 개체, 슬라이드, 프레젠테이션 추가,수정,삭제 : 김정우
- DB Schema : 김정우, 문형석, 곽나영 공동작업

</details>

## **Challenges and Issues**

**프레젠테이션 앱이 갖고 있어야 할 DB구조는 무엇일까?**

프레젠테이션 앱을 구성하고 있는 가장 기본적인 형태는 프레젠테이션, 슬라이드, 그리고 슬라이드 속의 개체들, 개체들이 갖게 될 개별적인 애니메이션 효과들입니다. 
우선 위의 모든 요소들이 DB에 저장되어야하고, 클라이언트와 싱크가 맞아야 프레젠테이션으로서 정상적으로 작동한다고 판단했습니다.
또한 기존에 사용하였던 프레젠테이션의 구조상 '프레젠테이션 - 슬라이드 - 개체 - 애니메이션'이라는 종속적인 구조 (슬라이드를 삭제하면 그 안에 있는 모든 개체들과 애니메이션 효과들도 삭제)를 가지고 있던 점을 참고하였을 때, 저희는 Embedded Document(Denormalized data)의 형식을 가지고 가는게 맞다고 판단하였씁니다.

**Embedded Document**
장점
- 한 번의 쿼리로 모든 정보를 불러올 수 있음
- 모든 데이터는 종속적인 관계를 가지고 있으므로, 다른 데이터에 의존하지 않음
단점
- MongoDB에서 1개의 document 마다 16MB의 용량제한이 있음.
- 모든 내용을 다 업데이트하기 때문에 퍼포먼스 이슈도 발생 할 수 있을거라고 예상.

**Referenced Documents**
장점
- 용량제한의 문제가 없음
- 한 요소에 대해서만 업데이트 가능
단점
- 연관된 데이터를 불러오기 위해서는 여러 번의 쿼리요청이 필요
- 참조하고 있는 데이터가 사라질 경우, 오류 가능성

MongoDB의 document당 16MB 용량제한과 관련해서는, 이미지는 amazon S3에 별도로 저장하고 있다는 점에서 크게 문제가 없을 것으로 판단하였으나, 내부적으로 한 프레젠테이션에 이용 될 수 있는 용량을 미리 계산을 해봤습니다.

텍스트박스 객체:
- 텍스트 문자열 (평균 100자): ~200바이트 (UTF-8 인코딩에서 문자당 2바이트)
- FontSize, textAlign, fontFamily, fontStyle, innerColor, borderColor: 각각 ~7 바이트 (Number 및 짧은 String 타입의 근사치) - 총 42 바이트

도형 객체 (원, 직사각형, 삼각형):
- fillColor, borderColor: 각각 ~7 바이트 - 총 14 바이트
- 원의 경우, 반지름을 위한 추가 필드: ~7 바이트
- 직사각형의 경우, 높이와 너비를 위한 두 개의 추가 필드: ~14 바이트
- 삼각형의 경우, 3개의 꼭짓점 좌표를 저장하자면: ~42 바이트

이미지 객체:
- imageUrl: 평균 URL 길이가 100자라고 가정 - ~200 바이트
- borderColor: ~7 바이트

그러므로, 각 슬라이드당 10개의 텍스트박스와 1개의 이미지 개체가 있고, 모든 개체들에는 애니메이션 효과가 없다고 가정할 때
- 텍스트박스: 10 * (200 + 42) = 2420 byte
- 이미지: 1 * (200 + 7) = 207 byte

한 슬라이드당 2627 byte 정도를 이용하게 됩니다. 
퍼포먼스적인 이슈를 제외하고 물리적인 저장용량만 봤을 때, 이 프로젝트에서 Embedded Document의 단점인 MongoDB의 16MB 용량제한은 문제가 되지 않을 것이라고 생각했습니다.


**개체들의 상태와 DB를 동시에 관리하기 위해서는 어떻게 해야할까?**

1. React query 의 활용
   
3. Context API의 활용
4. 슬라이드 장표에서 여러 개의 개체가 존재 할 경우, 하나만 클릭 될 수 있도록 상태관리 필요
5. 이 프로젝트에서는 RESTful 한 API를 설계를 위해 /users/${userId}/presentations/${presentationId}/...의 방식으로 URL이 구성되어 있는 상태. >서버요청을 보내기 위해서는 모든 컴포넌트에서 userId가 필요한 상황 > ContextAPI를 활용해서 할 예정이였음

Redux와 zustand같은 전역상태관리 라이브러리와 Context API

**개체들은 좌표는 어떻게 설정하고, 크기 조절을 할 수 있을까?**
개체의 크기조절과 좌표의 설정 내용 추가 예정

**라이브러리 없이 생동감 있는 슬라이드쇼 애니메이션을 구현 할 수 있는 방법은 무엇인가?**
애니메이션의 구현 (CSS animation / keyframes의 활용)

**contenteditable을 이용하면서 나타난 오류**
추가필요

## **Project Timeline**

<details>
<summary>프로젝트 기간 : 2023.07.10 ~ 2023.08.04 (총 25일, 기획 및 설계 10일, 개발 및 마무리 15일)</summary>

**기획 및 설계 (10일)**

- 아이디어 수집
- Figma를 사용한 Mockup 제작
- 기술 스택 선정
- Git 작업 플로우 및 코드 컨벤션, 커밋 룰 등 팀 협업 규칙 정립
- MongoDB Schema 설계

**기능 개발 및 테스트코드 작성 (15일)**

- 클라이언트 기능 구현
- 백엔드 서버 구현
- 테스트 코드
- 팀 프로젝트 발표 준비 및 발표
- 리드미 작성
- 배포
</details>

## **Our Team**

- 문형석 : [hyn9xc@gmail.com](mailto:hyn9xc@gmail.com)
- 곽나영 : [ny931118@gmail.com](mailto:ny931118@gmail.com)
- 김정우 : [kjw5757@gmail.com](mailto:kjw5757@gmail.com)