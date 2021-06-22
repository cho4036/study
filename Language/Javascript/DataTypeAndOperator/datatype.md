### 해당 문서는 한빛미디어의 Inside Javascript 도서를 기반으로 정리한 내용이며 배포 목적이 아님. 

# Javascript datatype
* 기본 타입
    - number
    - string
    - boolean
    - undefined
    - null
* 참조 타입
    - Object
        + Array
        + Function

## 변수 선언
* var라는 키워드로만 변수를 선언
    ```javascript
    var intNum = 10;
    var floatNum = 0.1;
    var singleQuoteStr = 'single'
    var doubleQuoteStr = "double"
    var boolVar = true
    var emptyVar;
    var nullVar = null;

    console.log(
        typeof intNum,
        typeof floatNum,
        typeof singleQuoteStr,
        typeof doubleQuoteStr,
        typeof boolVar,
        typeof nullVar,
        typeof emptyVar    
    );
    ```

    ```bash
    output: number number string string boolean object undefinded
    ```

## Number
* Javascript는 모든 숫자를 64bit 부동 소수점 형태로 저장. 따라서 나눗셈 연산할 때 주의
    ```javascript
    var num = 5 / 2;
    console.log(num); // (output) 2.5
    console.log(Math.floor(num)); // (output) 2
    ```
## String
* 문자열은 문자 배열처럼 인덱스를 이용해 접근할 수 있다. 하지만 한번 생성된 문자열은 읽미난 가능하지 수정은 불가능
    ```javascript
    var str = 'test';
    console.log(str[0], str[1], str[2], str[3]); // (output) test
    str[0] = 'T';
    console.log(str); // (output) test
    ```

## null & undefined
* 두 타입 모두 '값이 비어있음'을 나타내며 기본적으로 값이 할당되지 않은 변수는 undefined 타입
* null 타입의 변수는 명시적으로 값이 비어있음을 나타내는데 사용. 실제 타입은 object이다
* undefined는 타입이자, 값을 나타내며 위의 emptyVar 변수에는 아무런 값이 할당되지 않았으므로 undefined가 출력됨
    ```javascript
    var nullVar = null;
    console.log(typeof nullVar === null); // (output) false
    console.log(nullVar === null); // (output) true
    // ==(coercive equality), ===(strict equality)
    ```

## 참조타입(Object Type)
* Javascript에서의 객체는 'key:value'형태의 프로퍼티들을 저장하는 컨테이너로서 Hash 자료구조와 상당히 유사
* 기본 타입은 하나의 값만 가지는데 비해, 참조 타입인 객체는 여러 개의 프로퍼티들을 포함
* 다른 언어와 마찬가지로 참조 타입은 모든 연산이 실제 값이 아닌 참조값으로 처리됨
* 객체 생성
    - Javascript는 클래스라는 개념이 없고, 객체 리터럴이나 생성자 함수 등 3가지의 생성 방식이 존재
        + Object() 생성자 함수
        ```javascript
        var foo = new Object();
        foo.name = 'foo';
        foo.age = 30;
        foo.gender = 'male';
        console.log(typeof foo);    // (output) object
        console.log(foo);   // (output) { name: 'foo', age: 30, gender: 'male' }
        ```
        + 객체 리터럴 방식 이용
        ```javascript
        var foo = {
            name : 'foo',
            age : 30,
            gender : 'male'
        };
        console.log(typeof foo);    // (output) object
        console.log(foo);   // (output) { name: 'foo', age: 30, gender: 'male' }
        ```
        + 생성자 함수 이용
        함수를 배운 이후 살펴보자

* 객체 프로퍼티 Read/Write/Update
    - 생성된 객체의 프로퍼티를 읽거나 동적으로 생성하거나 변경하기 위해 아래 두가지 방법을 사용
        + 대괄호([])
        + 마침표(.)
    ```javascript
    var foo = {
        name : 'foo';
        major : 'computer science'
        major2 : 'computer science'
    };

    // Read
    console.log(foo.name);  // (output) foo
    console.log(foo['name']);   // (output) foo
    console.log(foo.nickname);  // (output) undefined

    // Write
    foo.age = 30;
    foo[age2] = 40;
    console.log(foo.age);   // (output) 30
    console.log(foo.age2);  // (output) 40

    // Update
    foo.major = 'electrinoics'
    foo[major2] = 'electrinoics'

    foo['full-name'] = 'foo bar';
    console.log(foo['full-name']);  // (output) foo bar
    console.log(foo.full-name);     // (output) NaN,  . 표현식의 경우 - 를 연산자로 봄. NaN(Not a Number);
    console.log(name);      // (output) undefined
    ```

* 반복문으로 객체 프로퍼티 출력
    - for in 문 사용
    ```javascript
    var foo = {
        name : 'foo',
        age : 30,
        major : 'computer science'
    };
    var prop;
    for (prop in foo) {
        console.log(prop, foo[prop])    
    }
    ```
    ```bash
    name foo
    age 30
    major computer science
    ```
* 객체 프로퍼티 삭제
    - delete 연산자를 통해 객체의 프로퍼티를 삭제할 수 있다. 하지만 객체 자체를 삭제하진 못한다.
    ```javascript
    var foo = {
        name: 'foo',
        nickname: 'babo'
    };
    console.log(foo.nickname);  // (output) babo
    delete foo.nickname;
    console.log(foo.nickname);  // (output) undefined
    ```
* Call by Reference
    - 기본 타입의 경우 Call by Value, 참조 타입의 경우 Call by Reference 방식으로 동작
    ```javascript
    var a = 100;
    var objA = { value: 100 };
    function changeArg(num, obj) {
        num = 200;
        obj.value = 200;

        console.log(num);
        console.log(obj);
    }

    changeArg(a, objA);
    console.log(a);
    console.log(objA);
    ```
    ```bash
    200
    { value: 200 }
    100
    { value: 200 }
    ```

* Prototype
    - Javascript의 모든 객체는 자신의 부모 역할을 하는 객체와 연결되어 있음
    - 마치 객체지향의 상속 개념과 같이 부모 객체의 프로퍼티를 자신의 것처럼 사용할 수 있음
    - 이러한 부모 객체를 프로토타입 객체(짧게는 프로토타입)라 부름
    ```javascript
    var foo = {
        name : 'foo',
        age: 300
    };

    console.log(foo.toString());
    console.dir(foo);
    ```

## 연산자
* ==(Coervice equality) and ===(strict equality) Operator
    - == 동등 연산자의 경우 타입이 다를 경우 타입 변환을 거친 다음 비교
    - === 일치 연산자의 경우 타입이 다를 경우 타입을 변경하지 않고 비교
    ```javascript
    console.log(1 == '1');  // (output) true
    console.log(1 === '1'); // (output) false
    ```
