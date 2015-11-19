function solution(number){
  if ((number >4999)||(number<1)){ // Normal roman numerals can't handle numbers larger than 4999.
  return "Sorry, normal roman numerals can't cope with that number! Please enter a value between 1-4999.";
  } else {
  var answer= [];
  var numerals=['M','D','C','L','X','V','I'];
  //test for thousand conversions
  while (number>=1000){
    number-= 1000;
    answer.push('M');
  }
  
  answer= answer.join('');
  return answer;
  }
}

function convertA2R(key, numerals, answer, number){
  //key = normal numeral for that digit, e.g. C for 100s, Xs for 10s, Is for 1s
  var arr= number.toString().split('');
  var num= arr[0];
  num=parseInt(num);
  var a= numerals[key];
  var b=numerals[(key-1)];
  var c=numerals[(key-2)];
  switch (num){
    case 1: 
      answer.push(a);
      break;
    case 2: ;
      answer.push(a+a);
      break;
    case 3: ;
      answer.push(a+a+a);
      break;
    case 4: ;
      answer.push(a+b);
      break;
    case 5: ;
      answer.push(b);
      break;
    case 6: ;
      answer.push(b+a);
      break;
    case 7: ;
      answer.push(b+a+a);
      break;
    case 8: ;
      answer.push(b+a+a+a);
      break;
    case 9: ;
      answer.push(a+c);
      break;
  }
}
/*A few notes: I am using codewars testing framework for this kata (Roman Numerals Enconder / Roman Numerals Decoder). 
** Codewars has an arbitrary rule about no symbol repeated more than 3 times. This is incorrect- Roman numerals can normally operate
up to 4,999- MMMMCMXCIX.
My personal solution will be posted there. To track tests I will log them here.
TESTS:
1) For thousands conversion: Test.assertEquals(solution(2000), 'MM', 'Correct!'); success 
-removed arrays instead created convert function
