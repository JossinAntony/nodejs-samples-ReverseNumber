var num = 999777899;
var rNum = 0;

 while(num != 0){
    rNum = rNum * 10;
    rNum = rNum + (parseInt(num%10));
    num = parseInt(num/10);
  }
  console.log(rNum);