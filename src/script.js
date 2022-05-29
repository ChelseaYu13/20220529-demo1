let number = 0;
let numberValue = document.getElementById("number");
let valueLabel = document.getElementById("value-message");
let addBtn = document.getElementById("add-btn");
let minusBtn = document.getElementById("minus-btn");

addBtn.onclick = ()  => {
  console.log('add click');
  if(number < 10) {
    number = number + 1;
    numberValue.innerHTML = number;
    valueLabel.innerHTML = '現在數值是' + number;
    valueLabel.style.color = 'white';
  } else {
    valueLabel.innerHTML = '已達最大上限值 10';
    valueLabel.style.color = 'red';
  }
}

minusBtn.onclick = () => {
  console.log('minus click');
  if(number > 0) {
    number = number - 1;
    numberValue.innerHTML = number;
    valueLabel.innerHTML = '現在數值是' + number;
    valueLabel.style.color = 'white';
  } else {
    valueLabel.innerHTML = '已達最小限制值 0';
    valueLabel.style.color = 'red';
  }
}