import { sprintf } from "sprintf-js";
//sprinf 사용을 위한 import 문법


let epoch = new Date().getTime();

console.log(epoch);
console.log(sprintf("%X",epoch));
console.log(sprintf("%020d",epoch));

let hour = parseInt(epoch/1000/60/60%60+9);
let min = 0;
let sec = 0;
//javascript는 정수를 대입한 것 처럼 보여도 다 실수다. 그래서 parseInt 또는 Math.floor메소드로 소수 부분을 잘라내주어야 한다.

console.log(sprintf("%02d:%02d:%02d", hour, min, sec));





 /*
    <npm : node package manager>
    
    npm search sprintf 
    npm init -y   : package.json(nodejs의 설정파일)을 만듦
    npm isntall sprintf-js : sprintf 사용 라이브러리를 만듦
    "type": "module",   : package.json 파일의 "main"밑에 해당 코드를 추가해줄 것
    
    node_modules 폴더는 git 형상관리에 넣지 말것
       - git clone을 받았을 때 그럼 node_modules 폴더가 없을 테니 npm install만 하면 pakage.json의 내용을 참고하여 node_modules 폴더를 만들어줌
    
  */
