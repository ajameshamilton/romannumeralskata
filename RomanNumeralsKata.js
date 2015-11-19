function solution(number){
  if ((number >4999)||(number<1)){ // Normal roman numerals can't handle numbers larger than 4999.
  return "Sorry, normal roman numerals can't cope with that number! Please enter a value between 1-4999.";
  } else {
  var answer= [];
  var hundreds= ["C","CC","CCC","CD","D","DC","DCC","DCC","CM"];
  var tens= ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
  var singles=['I','II','III','IV','V','VI','VII','VIII','IX' ];
  //test for thousand conversions
  while (number>=1000){
    number-= 1000;
    answer.push('M');
  }
  
  
  answer= answer.join('');
  return answer;
  }
}


/*A few notes: I am using codewars testing framework for this kata (Roman Numerals Enconder / Roman Numerals Decoder). 
** Codewars has an arbitrary rule about no symbol repeated more than 3 times. This is incorrect- Roman numerals can normally operate
up to 4,999- MMMMCMXCIX.
My personal solution will be posted there. To track tests I will log them here.
TESTS:
1) For thousands conversion: Test.assertEquals(solution(2000), 'MM', 'Correct!'); success 
2) 
