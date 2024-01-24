function fibonacciGenerator2 (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
  var fArray = [];
  var fNum = 0;
  for(var i = 0; i < n; i++) {
    if(i === 0) {
      fArray.push(i);

      
      
    }else if(i === 1) {
      fArray.push(i);

      }
    else if(i > 1) {
      fNum = fArray[fArray.length - 1] + fArray[fArray.length - 2];
      fArray.push(fNum);
      
    }
  }
  return fArray;

    
    
    
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

const btn = document.querySelector("button");

btn.addEventListener("click", handleClick);

function handleClick() {
  document.querySelector("#title").innerHTML = fibonacciGenerator2(document.querySelector("input").value);
}