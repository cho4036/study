# Javascript 핵심 개념

1. 객체
    * 자바스크립트의 거의 모든 것은 <b>객체</b>이다
        * 기본 타입 
            -  boolean
            - number
            - string
            - undefined
            - null
        * 참조 타입
            - 객체
    * undefined, null 타입을 제외한 기본 타입은 객체처럼 다룰 수 있다
    * 일급 객체(First class object)
        * 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체

2. 함수
* JS에서는 함수도 객체로 취급한다
* 함수는 일급 객체로 다뤄진다

3. 프로토타입
* 모든 객체는 숨겨진 링크(link)인 프로토타입(prototype)을 가짐
* 이 링크는 해당 객체를 생성한 생성자의 프로토타입 객체를 가리킴
* 이 링크를 ECMAScript에서는 [[Prototye]]이라 표현함

4. 실행 컨텍스트와 클로저


# Javascript 특징
1. 느슨한 타입 체크 언어
2. ; <-- Semicolon에 대한 사용에 대해 다양한 의견이 존재. 컴파일시 ;를 사용하지 않아도 에러를 뿜지 않음