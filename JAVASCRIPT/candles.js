/**
 * candles
 * 
 * @param {number[]} arr The candles heights.
 * @returns {number} The number of candles that are tallest.
 */
function candles(arr) {
    let max=Math.max(arr);
    let cmayorvalor=0;
    for(let i=0; i<arr.length; i++){
        if (arr[i]==max){
            cmayorvalor++;
        }
    }
    

    return cmayorvalor;

  }
  
  console.log(candles([4, 4, 1, 3])); // 2 
  console.log(candles([1, 1, 1, 1, 1])); // 5 
  console.log(candles([5, 3, 1, 3, 5, 3, 1, 3, 5])); // 3
  console.log(candles([10000, 10001, 10002, 10002, 10000])); // 2
  console.log(candles([999, 1000, 99, 912, 100])); // 1
