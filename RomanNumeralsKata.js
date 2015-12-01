// Decision function on which to call
function decision(input){
  if (input == parseInt(input)){
    return cA2R(input);
  } else if (input.search(/[^cdilmx]/gi) == -1){
    return cR2A(input);
  } else {
    return " I'm sorry, that's not a valid input. Please enter a value in either Roman or Arabic numerals."
  }

}


function cA2R(number){
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
  if (number>=100){
  convertA2R(2,numerals, answer,number);
    var round= 100*(Math.floor(number/100));
    number -= round; 
    }
  
  if (number>=10){
    convertA2R(4,numerals, answer, number);
    var round= 10*(Math.floor(number/10));
    number -= round; 
    }
  if (number>=1){
  convertA2R(6,numerals, answer, number);
  var round= (Math.floor(number));
  number -= round;
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
2) for remaining conversions: 
Testing for 100s: Test.assertEquals(solution(2200), 'MMCC', 'Correct!');
Testing for 10s: Test.assertEquals(solution(2220), 'MMCCXX', 'Correct!');
Testing for singles: Test.assertEquals(solution(2222), 'MMCCXXII', 'Correct!');
Testing for 9s: Test.assertEquals(solution(2009), 'MMIX', 'Correct!');
Testing for 40: Test.assertEquals(solution(2040), 'MMXL', 'Correct!');
Testing for 400:Test.assertEquals(solution(2400), 'MMCD', 'Correct!');
Testing for 900: Test.assertEquals(solution(2900), 'MMCM', 'Correct!');
Testing for below 1: Test.assertEquals(solution(0),"Sorry, normal roman numerals can't cope with that number! Please enter a value between 1-4999." , 'Correct!');
Testing for above 4999: Test.assertEquals(solution(5000),"Sorry, normal roman numerals can't cope with that number! Please enter a value between 1-4999." , 'Correct!');

All encoder tests successful. */


//ADDING DECODER function

function cR2A(roman){
  var letters= {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 }
  var arr= roman.split('');
  var answer=0;
  for (var i=0; i <arr.length; i++){
  var double= arr[i]+ arr[i+1];
    if (checkDouble(double)){
      answer=convertR2A(double, answer, letters);
      i++;
    } else {
    answer=convertR2A(arr[i], answer, letters);
    }
  }
  return answer;
}

//checkDouble checks if input is valid compound Roman numeral
function checkDouble(double){ 
if (double == "CM" || double == "CD" || double == "XC" || double == "XL" || double == "IX" || double == "IV"){
   console.log("hi!");
   return true;
  } else {
  return false;
  }
}
//convertR2A adds value of input to answer
function convertR2A(num, answer, letters) {
  answer+=letters[num];
  return answer;
}

/* TESTS for decoder:
1) Testing for doubles: Test.assertEquals(solution("IV"), 4, 'Correct!');
2) Testing for singles: Test.assertEquals(solution("C"), 100, 'Correct!');
3) Testing for complex: Test.assertEquals(solution('MCMXCII'), 1992, 'Correct!');
All tests successful.