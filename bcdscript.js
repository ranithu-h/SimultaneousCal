let inputValues = []; // Array to store input values

function handleKeyDown(event) {
  if (event.key === 'Enter') {
    createForms();
  }
}


function createForms() {
  const numForms = parseInt(document.getElementById('numForms').value);
  const formsContainer = document.getElementById('formsContainer');
  formsContainer.innerHTML = '';

  inputValues = []; // Reset the array when creating new forms

  let total = 0;

  for (let i = 0; i < numForms; i++) {
    const formDiv = document.createElement('div');
    formDiv.className = 'form-container';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter a number';
    input.style.width = '100px';
    const formsWrapper = document.createElement('div');
    input.addEventListener('input', function() {
      total = recalculateTotal();
    });

    formDiv.appendChild(input);
    formsContainer.appendChild(formDiv);
  }

  function recalculateTotal() {
    const inputElements = document.querySelectorAll('.form-container input');
    
    inputElements.forEach(function(inputElement, index) {
      if (inputElement.value !== '') {
        inputValues[index] = parseInt(inputElement.value); // Store input value in array
      }
    });

    // Defining function to convert denary number to binary
    function denToBi(dnum) {
      let count = 0;
      while (Math.pow(2, count) <= dnum) {
          count++;
      }
      count--;

      let index = 0;
      let n = 1;
      while (index === 0) {
          if (dnum < Math.pow(16, n)) {
              index = n * 4;
          } else {
              n++;
          }
      }

      const bnum = Array(index).fill(0);
      
      while (dnum !== 0) {
          if (Math.pow(2, count) <= dnum) {
              dnum -= Math.pow(2, count);
              bnum[bnum.length - 1 - count] = 1;
              count--;
          } else {
              count--;
          }
      }

      const binary = bnum.join('');
      return binary;
    }

    // Defining function to add the binary numbers
    function binAdd(binary) {
      let max_length = binary[0].length;

      for (const b of binary) {
          max_length = Math.max(max_length, b.length);
      }

      let display = "";
      let temp = 0;
      
      for (let i = 0; i < max_length; i++) {
          let tot = temp;
          for (const b of binary) {
              if (i < b.length) {
                  tot += parseInt(b[b.length - 1 - i]);
              }
          }
          display = (tot % 2) + display;
          temp = Math.floor(tot / 2);
      }
      
      if (temp === 1) {
          display = temp + display;
      }
      
      return display;
    }

    // Defining function to convert binary to denary
    function biToDen(bnum) {
      let dnum = 0;
      for (let count = 0; count < bnum.length; count++) {
          if (bnum[count] === "1") {
              dnum += Math.pow(2, bnum.length - count - 1);
          }
      }
      return dnum;
    }

    // MAIN FUNCTION

    let flag = false;
    const binSix = "0110";
    const denary = [];
    let tot = 0;
    let finalResult = "";
    const binary = [];
    const answer = [];
    let ennum = 0;
    const slices = [];
    let sliced = "";

    // Getting Input from user and directly converting to binary

    
    for (let count = 0; count < inputValues.length; count++) {
      let arg = "";
      let enter = inputValues[count];
      if (enter > 9) {
          for (let i = 0; i < enter.toString().length; i++) {
              arg += denToBi(parseInt(enter.toString()[i]));
          }
          binary.push(arg);
      } else {
          arg = denToBi(enter);
          binary.push(arg);
      }
      tot += enter;
    }

    // Adding Binary
    const enterMax = binAdd(binary);
    answer.push(enterMax);
    let temp = answer[0];

    // Slicing to see if needing 0110 added or not
    const numSlices = temp.length;

    while (ennum !== numSlices) {
      const enterSlice = temp.substring(ennum, ennum + 4);
      slices.push(enterSlice);
      ennum += 4;
    }

    // Converting each number back
    for (let count = 0; count < slices.length; count++) {
      sliced += biToDen(slices[count]);
    }

    if (tot.toString() !== sliced || (tot > 9 && tot < 16)) {
      flag = true;
      answer.push(binSix);
      finalResult = binAdd(answer);
    }

    if ((finalResult.length % 4) !== 0){
      finalResult = '0'.repeat(4 - (finalResult.length % 4)) + finalResult;
    }

    if (flag){
      document.querySelector('h4').innerHTML = temp;
      document.querySelector('p1').innerHTML = binSix;
      document.querySelector('h2').innerHTML = finalResult;
    }
    else
    {
      document.querySelector('h4').innerHTML = '';
      document.querySelector('p1').innerHTML = '';
      document.querySelector('h2').innerHTML = temp;
    }

    return sum;
  }
}