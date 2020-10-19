const myfs = require('fs');

var num = 999777899;
var rNum = 0;

var number = num;

 while(num != 0){
    rNum = rNum * 10;
    rNum = rNum + (parseInt(num%10));
    num = parseInt(num/10);
  }

  myfs.appendFile('ReversedNo.txt', ('Reverse of ' + number + ' is ' + rNum + '\n'),(e)=>{
    if(e)throw e;
  });
  console.log(rNum);