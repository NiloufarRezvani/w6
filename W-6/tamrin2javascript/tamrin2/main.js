
const defultarr = []

while(true){
  const userNumbers = prompt('write your number until stop:');

  if(userNumbers.toLowerCase().trim() === 'stop'){
    break;
  }
  defultarr.push(+userNumbers)

}
console.log(defultarr)


function sortNumber(numbers) {
  if (numbers.length === 0) {
    return "empty";
  }

  let result = "";
  let start = numbers[0];
  let end = numbers[0];
  let lengthcounter = 1;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] === end + 1) {
      end = numbers[i];
      lengthcounter++;
      console.log(end)
    }
     else {
      if (lengthcounter >= 3) {
        result += `${start}-${end},`;
      } 
      else if (lengthcounter === 2) {
        result += `${start},${end},`;
      } 
      else {
        result += `${start},`;
      }

      start = numbers[i];
      end = numbers[i];
      lengthcounter = 1;
    }
  }

  if (lengthcounter >= 3) {
    result += `${start}-${end}`;
  } 
  else if (lengthcounter === 2) {
    result += `${start},${end}`;
  }
   else {
    result += `${start}`;
  }

  return result;
}

console.log(sortNumber(defultarr)); 