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

**Client**:
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white">

**Server**:
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white">
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">
<img src="https://img.shields.io/badge/AmazonS3-569A31?style=for-the-badge&logo=AmazonS3&logoColor=white">

**Test**:
<img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=Jest&logoColor=white">
<img src="https://img.shields.io/badge/React Testing Library-E33332?style=for-the-badge&logo=TestingLibrary&logoColor=white">
<img src="https://img.shields.io/badge/Supertest-569A31?style=for-the-badge&logo=&logoColor=white">

**Deployment**:
<img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white">
<img src="https://img.shields.io/badge/AWS Elastic Beanstalk-FF9900?style=for-the-badge&logo=&logoColor=white">

## **Feature**

### **내 프레젠테이션**

- 로그인 후, 사용자는 새로운 프레젠테이션을 생성할 수 있습니다.
- 내가 만든 프레젠테이션들을 볼 수 있고, 편집할 수 있습니다.
- 오른쪽 마우스 클릭으로, 내가 만든 프레젠테이션을 삭제할 수 있습니다.

### **생성 / 삭제**

- 새로운 슬라이드를 생성하고 삭제할 수 있습니다.
- 이미지를 업로드 하고 삭제 할 수 있습니다.
- 도형을 생성하고 삭제할 수 있습니다.
- 텍스트 박스를 생성하고 삭제할 수 있습니다.
- 오른쪽 마우스 클릭을 이용해 삭제할 수 있습니다.

### **편집**

- 슬라이드 위에 슬라이드를 드래그 앤 드롭하면 슬라이드의 순서가 변경됩니다.
- 이미지, 도형, 텍스트 박스의 서식을 적용할 수 있습니다. (내부 색상, 테두리 색상, 폰트, 폰트 크기, 글자 정렬)
- 각 객체의 순서를 바꿀 수 있습니다. (앞으로 보내기, 뒤로 보내기)
- 객체를 클릭 후, 애니메이션 버튼을 클릭하면 애니메이션이 적용됩니다.
- 애니메이션은 각 객체 당 최대 1개 적용 가능합니다.
- 애니메이션 순서 탭에서 오른쪽 마우스 클릭으로 적용된 애니메이션을 제거할 수 있습니다.
- 애니메이션 순서 탭에서 애니메이션이 재생될 순서를 바꿀 수 있습니다.

### **슬라이드 쇼**

- 재생버튼을 누르면 슬라이드 쇼가 재생됩니다.
- 키보드 오른쪽 방향키를 누르면 지정된 다음 슬라이드 또는 다음 애니메이션이 순서대로 재생됩니다.

<details>
<summary>Contribution</summary>

**클라이언트 (컴포넌트별)**

- 기본 설정 및 환경변수 설정 : 곽나영
- 로그인 화면 및 기능 (Login) : 문형석
- 메인페이지 화면 및 기능 (Main) : 문형석, 곽나영 공동작업
- 프레젠테이션 편집기능 (Presentation)
  - 슬라이드 장표 (SlideCanvasLayout) : 문형석
  - 개체 정의 (Object) : 김정우
  - 개체 삽입 (ObjectCreator) : 김정우, 문형석 공동작업
  - 개체 수정 (ObjectEditor)
    - 색 및 폰트 (StyleEditor - ColorEditor, TextEditor) : 김정우
    - z-index (StyleEditor - ArrangeEditor) : 곽나영
    - 개체의 좌표 및 사이즈 조정 (Object) : 곽나영
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

### **개체들은 좌표는 어떻게 설정하고, 크기 조절을 할 수 있을까?**

**좌표와 크기조절을 위한 기준 : 사각형과 8개의 꼭지점**
저희가 프로젠테이션에서 사용할 개체는 크게 텍스트박스, 이미지, 도형으로 나뉘고, 도형의 경우, 그 안에서 또 삼각형, 원, 사각형으로 나뉩니다. 하지만 도형의 경우, 각 도형마다 성질이 다르고, 무엇을 기준으로 크기를 조절하고 좌표를 설정 할 수 있을지가 저희의 고민 중 하나였습니다. **결국, 어떠한 개체여도 공통적으로 적용 될 수 있는 기준이 필요했고, 현재 많은 슬라이드 어플리케이션에서 사용되고 있는 사각형의 틀을 사각형에 적용되는 꼭지점 활용해서 크기와 좌표를 설정하기로 했습니다.**

<p align="center">
<img width="748" alt="개체의 좌표와 크기 설정" src="https://github.com/team-dtrio/peach-pitch-client/assets/72593047/785d11dc-957c-4625-9aaf-3b7d06e8609c">
</p>

**꼭지점마다 부여된 다른 연산방식**
개체를 클릭할 경우, 사각형을 둘러싸는 바운더리와 8개의 꼭지점이 나타납니다. 모든 개체의 좌표는 그 개체를 둘러싸고 있는 사각형의 왼쪽 위 꼭지점이 기준이 됩니다. 아래 예시를 보면, 현재 상태에서 사이즈를 변경을 원하면, 꼭지점0을 클릭하고 새로운 좌표인 (new x, new y)로 드래그하면 , (new x, new y)까지 영역이 늘 어나고 사이즈가 업데이트 됩니다. 다만 여기서 크기조정은 우리가 알고 잇는 상식과 다르게 이뤄졌습니다.

저희는 CSS속성을 가진 스타일드 컴포넌트를 슬라이드 장표로 표현했는데, 슬라이드 장표의 좌표는 맨 왼쪽 위 꼭지점이 0,0으로 기준점이 됩니다. 예시에서의 주황색 박스의 새로운 좌표는 (new x, new y)가 되었고, (new x, new y)까지 박스의 영역이 늘어난만큼 더해줘야된다고 생각했지만, 꼭지점0 이 0,0으로 근접 할 수록 x와 y는 작아지므로 이에 대한 처리는 기존높이와 너비에 더하기(+)가 아닌 빼기(-)로 처리해줘야 합니다.

다른 예시로 꼭지점 2를 조정 할 때, 새로운 좌표 (new a, new b)로 꼭지점을 드래그해서 사이즈 조정을 하지만, 빨간색 박스의 새 좌표는 x축은 고정인 상태에서 y축 값만 바뀌므로, 이 부분만 업데이트를 해주고, 늘어난 영역에 대해서는 꼭지점 0과 마찬가지로 y축에 대해서는 0에 가까워지므로 기존높이에서 빼기(-)를 해주고, x축은 0에서 멀어지므로 기존너비에서 더하기(+)를 해주게 됩니다.

위와 같이 8개 꼭지점 마다 좌표와 영역의 연산 방식이 상이하므로, 이에 대한 처리를 다르게 해주었으며, 삼각형, 원, 이미지에 대해서도 각 특성에 맞는 설정을 해두었습니다.

<p align="center">
<img width="1160" alt="개체의 좌표와 크기 설정" src="https://github.com/team-dtrio/peach-pitch-client/assets/72593047/5900c3af-be64-41eb-870d-0fea2ad1fc9c">
</p>

## **Challenges and Issues**

### 객체들의 좌표를 어떻게 설정할 수 있을까?

- 객체들의 좌표를 이용해서 어떻게 위치를 이동시킬 수 있을까?
- 객체들의 좌표를 이용해서 어떻게 크기를 바꿀 수 있을까?

* 객체들의 좌표를 이용해 어떻게 크기를 바꾸고, 어떻게 이동시킬 수 있을까?

## 생동감 있는 슬라이드 쇼 애니메이션을 라이브러리 없이 어떻게 구현할까?

### 애니메이션 구현 : CSS animation, keyframes 활용

- 애니메이션이란

애니메이션을 구현하기 위해서, 애니메이션이란 무엇이고 어떤 특성을 가지고 있는지 알아보았습니다.

애니메이션이란 정적인 이미지를 동적으로 만든 결과물입니다. 즉 프레젠테이션의 애니메이션은 “객체가 어떤 시간에 어떤 상태 인지를 정하는 것”입니다.

third party 라이브러리 없이, 애니메이션을 구현하기 위한 필수 속성인 객체의 “시간”과 “상태”를 동시에 표현할 수 있는 방법을 조사했습니다. **CSS 애니메이션과 @keyframes를 이용하면 프레임이 변함에 따라 CSS 속성이 어떤 값을 가질 지 정할 수 있다**는 것을 알게 되어, 이를 적용해 애니메이션을 구현했습니다.

### 애니메이션에 생동감을 더하는 Cubic-bezier 곡선

keyframes를 활용했지만, 역동감과 생동감이 부족하다는 생각이 들었습니다. CSS 애니메이션의 경로와 속도를 조절하기 위해 CSS에 내재된 Cubic-bezier 함수를 활용했습니다. Cubic-bezier 함수는 4개의 매개변수 (x1, y1, x2, y2)를 사용해서 속도 곡선을 정의합니다. 즉, 시간과 애니메이션 진행 상태와의 관계를 정의합니다. 이를 통해 애니메이션의 속도를 상세하게 조정할 수 있었습니다.

<img width="600" alt="cubic-bezier" src="https://github.com/team-dtrio/peach-pitch-client/assets/72593047/c25fdb71-57e1-4061-85a3-47a734707aed">

아래는 선형적인 애니메이션과 cubic-bazier를 이용한 애니메이션의 예시입니다.

| ![cubic-bazier](https://github.com/team-dtrio/peach-pitch-client/assets/80331804/18e7ace3-f961-4d78-9cec-970851efe66a) | ![anmation with cubic-bazier](https://github.com/team-dtrio/peach-pitch-client/assets/80331804/ad71c067-99d0-4326-b0ef-7f1de7860c9e) |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |

기존 애니메이션의 구현은 ‘기본 선형 애니메이션’의 예시와 같이 비교적 단순한 움직임을 보였습니다.

cubic-bazier 함수를 이용해서 상세한 애니메이션의 적용이 가능하다고 생각했습니다.

cubic-bazier 함수를 이용해 프로젝트의 block-wipe 애니메이션을 구현한 예시입니다. 시작과 끝의 속도가 중간 지점의 속도보다 느리게 이동하며, 보다 생동감있고 역동적이게 애니메이션을 표현할 수 있었습니다.

### 어떻게 자동저장을 할 수 있을까? (리액트쿼리 도입배경)

### 슬라이드와 미리보기를 어떻게 동기화할 수 있을까?

### 어떻게 선택된 객체를 컴포넌트 간에 공유할 수 있을까?

## **Challenges and Issues**

###**프레젠테이션 앱이 갖고 있어야 할 DB구조는 무엇일까?**

프레젠테이션 앱을 구성하고 있는 가장 기본적인 형태는 프레젠테이션, 슬라이드, 그리고 슬라이드 속의 개체들, 개체들이 갖게 될 개별적인 애니메이션 효과들입니다.
우선 위의 모든 요소들이 DB에 저장되어야하고, 기존에 이용되고 있는 프레젠테이션 어플리케이션와 같이 계층적 구조를 가져야 한다고 판단했습니다. 즉, '프레젠테이션 - 슬라이드 - 개체 - 애니메이션'에서 '프레젠테이션'은 가장 상위 항목에 해당하며, 각 프레젠테이션은 여러 슬라이드를 포함하고, 각 슬라이드는 여러 개체를 포함하고, 그리고 각 개체는 여러 애니메이션을 포함할 수 있습니다.
이를 표현하기 위해서는 Embedded Document(비정규화된 데이터)의 형식을 가지고 가는게 맞다고 판단하였습니다.
![스크린샷 2023-08-02 오후 1 14 58](https://github.com/team-dtrio/peach-pitch-client/assets/72593047/0a4252b0-bf7c-44d3-81d7-0c2731a5e6e9)

**Embedded Document**

장점

- 한 번의 쿼리로 모든 정보를 불러올 수 있음
- 데이터 계층별로 종속적인 관계를 가지고 있으므로, 다른 데이터에 의존하지 않음

단점

- MongoDB에서 1개의 document 마다 16MB의 용량제한이 있음
- 모든 내용을 다 업데이트하기 때문에 퍼포먼스 이슈도 발생 할 수 있을거라고 예상

MongoDB의 document당 16MB 용량제한과 관련해서는, 이미지는 amazon S3에 별도로 저장하고 있다는 점에서 크게 문제가 없을 것으로 판단하였으나, 내부적으로 한 프레젠테이션에 이용 될 수 있는 용량을 미리 계산을 해봤습니다.

텍스트박스 객체:

- 텍스트 문자열 (평균 100자): ~200byte (UTF-8 인코딩에서 문자당 2byte)
- FontSize, textAlign, fontFamily, fontStyle, innerColor, borderColor: 각각 ~7 byte (Number 및 짧은 String 타입) - 총 42 byte

도형 객체 (원, 직사각형, 삼각형):

- fillColor, borderColor: 각각 ~7 byte - 총 14 byte
- 원의 경우, 반지름을 위한 추가 필드: ~7 byte
- 직사각형의 경우, 높이와 너비를 위한 두 개의 추가 필드: ~14 byte
- 삼각형의 경우, 3개의 꼭짓점 좌표: ~42 byte

이미지 객체:

- imageUrl: 평균 URL 길이가 100자라고 가정 - ~200 byte
- borderColor: ~7 byte

그러므로, 각 슬라이드당 10개의 텍스트박스와 1개의 이미지 개체가 있고, 모든 개체들에는 애니메이션 효과가 없다고 가정할 때

- 텍스트박스: 10 \* (200 + 42) = 2420 byte
- 이미지: 1 \* (200 + 7) = 207 byte

한 슬라이드당 2627 byte 정도를 이용하게 됩니다. 퍼포먼스적인 이슈를 제외하고 물리적인 저장용량만 봤을 때, 이 프로젝트에서 Embedded Document의 단점인 MongoDB의 16MB 용량제한은 문제가 되지 않을 것이라고 생각했습니다.

### **개체들의 상태와 DB를 동시에 관리하기 위해서는 어떻게 해야할까?**

**React query 의 활용**
이 프로젝트의 핵심적인 기능 중 하나는 서버 데이터와 클라이언트 상태와 실시간 동기화가 필요하다는 점이였습니다. 프레젠테이션, 슬라이드, 개체, 애니메이션이 추가/수정/삭제 될 때 마다, DB도 업데이트 되어야 하고 자동저장 되는 구조여야만 온라인 프레젠테이션 어플리케이션으로서의 역할을 할 수 있다고 판단했습니다.

- 위 목적을 달성하기 위해서는 무엇을 써야하는가?? Redux + fetch의 혼합 > Redux-thunk or Redux-saga > React query로 확정

**Context API의 활용**
위와 같이 react query를 이용하여 각 개체들의 상태와 서버데이터를 동기화 할 수 있었으나, 클라이언트측에서 별도로 상태를 관리해야 할 부분이 생겨서 Context API를 이용하였습니다.

1. 슬라이드 장표에서 여러 개의 개체가 존재 할 경우, 하나만 클릭 될 수 있도록 전역상태관리 필요했고

2. 이 프로젝트에서는 RESTful 한 API를 설계를 위해 /users/${userId}/presentations/${presentationId}/...의 방식으로 URL이 구성되어 있는 상태였고, 서버요청을 보내기 위해서는 모든 컴포넌트에서 userId가 필요한 상황이 였습니다.

이를 해결하기 위해 Context API를 이용하여, 위 두 가지의 문제점을 해결하였습니다 (2번은 리팩토링에서 구현)

### **개체들은 좌표는 어떻게 설정하고, 크기 조절을 할 수 있을까?**

**좌표와 크기조절을 위한 기준 : 사각형과 8개의 꼭지점**
저희가 프로젠테이션에서 사용할 개체는 크게 텍스트박스, 이미지, 도형으로 나뉘고, 도형의 경우, 그 안에서 또 삼각형, 원, 사각형으로 나뉩니다. 하지만 도형의 경우, 각 도형마다 성질이 다르고, 무엇을 기준으로 크기를 조절하고 좌표를 설정 할 수 있을지가 저희의 고민 중 하나였습니다. **결국, 어떠한 개체여도 공통적으로 적용 될 수 있는 기준이 필요했고, 현재 많은 슬라이드 어플리케이션에서 사용되고 있는 사각형의 틀을 사각형에 적용되는 꼭지점 활용해서 크기와 좌표를 설정하기로 했습니다.**

<p align="center">
<img width="748" alt="개체의 좌표와 크기 설정" src="https://github.com/team-dtrio/peach-pitch-client/assets/72593047/785d11dc-957c-4625-9aaf-3b7d06e8609c">
</p>

**꼭지점마다 부여된 다른 연산방식**
개체를 클릭할 경우, 사각형을 둘러싸는 바운더리와 8개의 꼭지점이 나타납니다. 모든 개체의 좌표는 그 개체를 둘러싸고 있는 사각형의 왼쪽 위 꼭지점이 기준이 됩니다. 아래 예시를 보면, 현재 상태에서 사이즈를 변경을 원하면, 꼭지점0을 클릭하고 새로운 좌표인 (new x, new y)로 드래그하면 , (new x, new y)까지 영역이 늘 어나고 사이즈가 업데이트 됩니다. 다만 여기서 크기조정은 우리가 알고 잇는 상식과 다르게 이뤄졌습니다.

저희는 CSS속성을 가진 스타일드 컴포넌트를 슬라이드 장표로 표현했는데, 슬라이드 장표의 좌표는 맨 왼쪽 위 꼭지점이 0,0으로 기준점이 됩니다. 예시에서의 주황색 박스의 새로운 좌표는 (new x, new y)가 되었고, (new x, new y)까지 박스의 영역이 늘어난만큼 더해줘야된다고 생각했지만, 꼭지점0 이 0,0으로 근접 할 수록 x와 y는 작아지므로 이에 대한 처리는 기존높이와 너비에 더하기(+)가 아닌 빼기(-)로 처리해줘야 합니다.

다른 예시로 꼭지점 2를 조정 할 때, 새로운 좌표 (new a, new b)로 꼭지점을 드래그해서 사이즈 조정을 하지만, 빨간색 박스의 새 좌표는 x축은 고정인 상태에서 y축 값만 바뀌므로, 이 부분만 업데이트를 해주고, 늘어난 영역에 대해서는 꼭지점 0과 마찬가지로 y축에 대해서는 0에 가까워지므로 기존높이에서 빼기(-)를 해주고, x축은 0에서 멀어지므로 기존너비에서 더하기(+)를 해주게 됩니다.

위와 같이 8개 꼭지점 마다 좌표와 영역의 연산 방식이 상이하므로, 이에 대한 처리를 다르게 해주었으며, 삼각형, 원, 이미지에 대해서도 각 특성에 맞는 설정을 해두었습니다.

<p align="center">
<img width="1160" alt="개체의 좌표와 크기 설정" src="https://github.com/team-dtrio/peach-pitch-client/assets/72593047/5900c3af-be64-41eb-870d-0fea2ad1fc9c">
</p>

### **라이브러리 없이 생동감 있는 슬라이드쇼 애니메이션을 구현 할 수 있는 방법은 무엇인가?**

**애니메이션의 구현 - CSS animation / keyframes의 활용**

애니메이션 작업에 앞서, 애니메이션이란 무엇이고 어떤 특성을 가지고 있는지 알아봤습니다. 애니메이션이란 단순하게 말해서, 정적인 이미지를 조작하여 동적인 이미지로 만든 결과물입니다. **즉, 프레젠테이션에서는 개체가 특정시간에 어떤 상태인지 정하면 애니메이션이 될 수 있다는 의미입니다.**

라이브러리 없이, 애니메이션을 구현하기 위한 필수적인 속성인 개체의 '상태' 와 '시간'을 동시에 표현 할 수 있는 방법은 무엇인가에 대해서 조사하던 와중 **CSS 애니메이션과 @keyframes을 통해 프레임이 변함에 따라 CSS속성이 어떤 값을 가지는지 정할 수 있다** 라는 것을 알게 되었고, 이를 적용하였습니다.

**애니메이션에 생동감을 더하는 Cubic-bezier 곡선**

keyframes를 활용했으나 역동감이나 생동감이 부족하다고 판단되어 CSS 애니메이션의 경로와 속도를 조절하기 위해 CSS에 내재되어 있는 Cubic-bezier함수를 활용했습니다.
Cubic-bezier함수는 곡선을 통해 시간과 애니메이션 진행 상태 간의 관계를 정의하고, 저희는 베지어 함수의 네 매개변수 (x1, y1, x2, y2)를 사용하여 더 생동감 있는 애니메이션을 구현했습니다.

<p align="center">
<img width="600" alt="cubic-bezier" src="https://github.com/team-dtrio/peach-pitch-client/assets/72593047/c25fdb71-57e1-4061-85a3-47a734707aed">
</p>

### **contenteditable을 이용하면서 나타난 오류**

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
