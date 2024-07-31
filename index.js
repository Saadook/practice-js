function IndexOfTargetValue(arr,target){
for i in Range(len(arr.))
if arr[i]==target
return i
return -1
}



function IndexTargetValue(arr,target){
    for (let i=0;i<arr.length;i++){
        if (arr[i]==target){
            return i
        }
        return -1
    } 
}



function palindrome(str){
  var j= str.length -1
  for (let i=0;i<str.length/2;i++){
    if (str[i]!= str[j]){
        return false
    }
    j--;
  }  
  return true;
}



function CountVowles(str){
    var vowels="aeiouAEIOU"
    var count = 0
    for (char in str){
        if (char in vowels){
         count+= 1    
        }
    }
    return count
}



console.log(Math.max(7,9,55));




function FactorialNumber(numb){
 if (numb==0||numb==1){
    return 1
 }   else(factorial =1)
    for (i in Range(1,numb + 1)){
        factorial *= i
 }
 return factorial
}



 function jzhgbkzjv(){
    let letters=["a","b","c"]
    let numbers=[1,2,3]
    let letnumb=letters.concat(numbers)
    console.log(letnumb);
 }



 function IsPrime(n){
    if(n<=1)
        return false
    for(i=2;i<n;i++)
        if(n % i==0)
            return false 
        return true
 }



 function count(str) {
    var counter= 0
    for(var char of str){
        if(char==="a" ||char ==="e" ||char==="i"||char==="o"||char==="u"){
            counter++ 
        }
    }
    return counter
    
 }