// [#1 자바스크립트 따라쓰기]
(function (){
    
    // 필요한 변수 설정
    // getElementById 의 table과 timer는 js 밖에서 설정된 id

    const table = document.getElementById('table');
    const timer = document.getElementById('timer');
    let started = false;
    let end = false;
    let timeInterval;

    // timeInterval은 왜 값이 선언되지 않았을까?
    
    // var
    // 재선언 가능
    // 재할당 가능

    // let
    // 재선언 불가
    // 재할당 가능
    // 블록 스코프

    // const
    // 재선언 불가
    // 재할당 불가
    // 블록 스코프
    // 처음 선언시 반드시 값이 있어야 함 (값이 없으면 선언 불가)

    let totalCnt = 0;
    let mines = [];
    let minesTd = [];

    // td = table data
    // tr = table row
    // th = table head

    const init = async function(mineNums = 10, tableSize = 10) {
        await setMines(mineNums);
        totalCnt = Math.floor(tableSize * tableSize - mineNums);
        console.log(mines);
        makeTable(tableSize);
    // Math.floor(): 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수 반환
    // 비동기 방식이니, 뒤의 코드가 먼저 실행되겠지
    // 당장 setMines부터가 바로 뒤에 선언됨
    // 왜 totalcnt가 100에서 mine 수를 뺀걸까
    };

    const setMines = function (num) {
        return new Promise((resolve => {
            let cnt = 0;
            while (cnt < num) {
                let curNum = Math.floor(Math.random() * num * num);
                if (mines.indexOf(surNum)) !== -1) continue;
                mines.push(curNum);
                cnt++;
            }
            resolve();
        }));
    };

    const makeTable = function (tableSize) {
        for(let i = 0; i < tableSize; i++) {
            const curNum = i * tableSize + j;
            const td = document.createElement('td');
            const styles = {
                border: '1px solid black',
                color: 'white',
                width: '20px',
                height: '20px'
            };
            for (let e in styles) td.style[e] = styles[e]; 
            if (mines.indexOf(curNum) !== -1) minesTd.push(td); 
            // 아직 값은 없는데 스타일이 들어간 td를 넣는 것인가?
            // 왜 command + / 가 안될까요.. 주석처리 하고싶따...
            td.addEventListner('click', () => {
                if(end) return;
                if(!started){
                    started = true;
                    startTimer();
                }
                if (mines.indexOf(curNum) !-- -1) deadTrigger(td);
                else setCount(td, curNum, tableSize);
            }, {once: true});
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
};
// TODO: 여기부터~ , 대분자로 붙여서 써야함

const deadTrigger = function() {
    end = true;
    for (let e of minesTd) e.style.background = 'red';
    clearInterval(timeInterval);
    alert('Dead!);
};

// 팔방으로 지뢰가 몇개 있는지 세기
// 팔방이 왜 dr, dc로 표현되는지? > 로우와 컬럼
const setCount = function (element, curNum, tableSize){
    const dr = [0, 1, 0, -1, -1, 1, 1, -1];
    const dc = [1, 0, -1, 0, 1, 1, -1, -1];
    const r = Math.floor(curNum/tableSize);
    const c = curNum % tableSize;
    let cnt = 0;
    for(let i = 0, i) {
        let nr = r + dr[i];
        let nc = c + dc[i];
        let nextNumber = curNum + 
    }

}
)



ES8, ES2017부터 지원되는 async/await는
"비동기 프로그래밍에 매우 유용한 기능으로서, 코드의 간결함을 가져다 준다."
함수 선언부인 function 이나 arrow function 바로 앞에 async를 추가하여
async function 혹은 async()처럼 교체한 후
프로미스 혹은 콜백함수 앞에 await를 붙여주면
콜백이나 프로미스 형식으로 쓸 필요없이, 일반적으로 작성할 수 있게 된다.
그러면 해당 함수는 자신의 프로미스가 resolve될때까지 기다린 후 다음 로직으로 넘어간다.
단, 에러처리가 필요하다.

"비동기 프로그래밍"
(https://shlee1353.github.io/2019/11/08/js-promise-async/)
* 비동기란?
(https://youtu.be/P5J2AXuFFRU)
자바스크립트에서 정의한 코드가 완료되었들 때 실행할 콜백을 등록해두고
넘어가 바로 다음 코드를 실행하는 것을 말한다.
예로, 제이쿼리의 ajax를 생각하면 된다.
자바스크립트 내부 메소드인 setTimeout 메소드 또한 비동기 방식으로 작동한다.

어떤 작업이 완성되었을때 실행될 함수를 '콜백'이라고 한다.

비동기의 단점 중 하나는 바로 흔히들 말하는 콜백지옥이다.
콜백함수를 남용해서 생긴 결과로 가동성이 떨어지며 코드 유지보수가 어려워 진다.
이러한 콜백지옥을 해결하기 위해 등장한 것이 ES6의 프로미스(Promise)이다.

* 프로미스
프로미스는 하나의 객체로 미래의 특정 값을 생성하며 3가지의 상태값을 가지고 있다.
- Pending(대기): 비동기 처리 로직이 아직 완료되지 않은 상태
- Fullfilled(이행): 비동기 처리가 완료되어 프로미스가 결과값을 반환해준 상태
- Rejected(실패): 비동기 처리가 실패하거나 오류가 발생한 상태


[스스로 하는 어린이]
프로미스, 콜백함수?
비주얼 스튜디오 코드 색상 구분 왜 안되는지
to-do 기능은 어떻게 쓰는 거였지..

----------------------------------------

[#2 전체 구조부터 쓰고 채워넣기]
// 겉 껍데기(html) 부분
<!doctype html>
<html lang = "ko">
<head>
    <meta charset = "utf-8">
    <title> Simple-Minesweeper </title>
    <meta name = "description" content = "This is simple minesweeper game.">
    <link rel = "shortcut icon" type = "image/png" href = favicon.ico"/> // 여기 마지막에 슬래시는 왜 들어갔을까요?
    </head>
<body>
    <div in = "container">
        <div id = "nav">
            <div id = "timer"> 0 </div>
            <button onclick = "location.reload()"> RESTART </button>
        </div>
        <table id = "table"></table>
    </div>
    <script src = "js/main.js"></script> // 왜 table 부분에 안넣고 여기 둘까?
</body>
</html>

// 자바스크립트(상호작용) 부분
(function () {
    // 변수 선언
    const table = document.getElementById('table');
    const timer = document.getElementById('timer');
    
    // 테이블을 만들고 지뢰를 심는 큰 그림 함수
    const init = async function (mineNums = 10, tableSize = 10) {}
    
    // 지뢰 위치 설정
    const setMines = function (num) {}

    // 테이블 만들기
    const makeTable = function (tableSize) {}

    // 실패의 경우
    const deadTrigger = function () {}

    // 팔방에 지뢰가 몇개 있는지 카운트
    const setCount = function (element, curNum, tableSize) {}

    // 타이머 설정
    const startTimer = function () {}

    // (모든 정의가 끝났으니,) 큰 그림 함수 실행
    return init();

} () // 왜 여기 괄호가 한 세트 더 있는걸까요?
)

// js 각 함수 내부 (init은 맨 마지막에)
1) setMines
const setMines = function(num) {} // 이것도 비동기...? 아직 이해하지 못했으니 패스

2) makeTable
// tableSize = 10
makeTable = function (tableSize) {
    for (let i = 0; i < tableSize; i++) {
        const tr = document.createElement ('tr');
        for (let j = 0; j < tableSize; j++) {
            const curNum = i * tableSize + j;
            const td = document.createElement ('td');
            const styles = {
                border: '1px solid black',
                color: 'white',
                width: '20px',
                height: '20px'
            };
            for (let e in styles) td.style[e] = styles[e]; // for문의 내용이 길지 않으면 {중괄호}를 쓰지 않고 진행하나요?
            if (mines.indexOf(curNum) !== -1) minesTd.push(td);
            // 의미: 지금의 curNum가 mines 안에 있다면, 스타일을 입힌 td를 리스트 안에 넣기
            // mines는 리스트 형식의 변수인 것 같은데 언제 채워졌지?
            // indexOf란? 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고, 존재하지 않으면 -1을 반환합니다.
            td.addEventListener('click', () => { // addEventListener란? 지정한 이벤트가 대상에 전달될 때 마다 호출할 함수를 설정합니다.

            })

        }

    }
}