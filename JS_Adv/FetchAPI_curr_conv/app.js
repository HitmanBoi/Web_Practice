let BASE_URL ='https://api.frankfurter.dev/v1/latest?';
const fromm = document.querySelector('.from');
const dropdown = document.querySelectorAll('.currenceis select');
const btn = document.querySelector('form button')
const fromCurr = document.querySelector('.from select');
const toCurr = document.querySelector('.to select');
const msg = document.querySelector('.msg');

console.log(fromm);


// console.log(URL)

//for (code in countries) {console.log(countries[code])};

for (let select of dropdown){
  for (code in countries){
    newOption = document.createElement('option');
    newOption.innerText = code;
    newOption.value = code;
    select.append(newOption);
    if (select.name === 'from' && code === 'USD'){
      newOption.selected = 'selected'
    }else if (select.name === 'to' && code === 'INR'){
      newOption.selected = 'selected'
    }

  }

  select.addEventListener('change',(evt) =>{
    updateFlag(evt.target);
  })
}

btn.addEventListener('click' , async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector('.amount input');
  amtVal = amount.value;
  if(amtVal <= 0 || amtVal === ''){
    amtVal = 1;
    amount.value = 1;
  }
  //console.log(amtVal, fromCurr.value , toCurr.value);
  from = fromCurr.value;
  to = toCurr.value;
  URL = `${BASE_URL}base=${from}&symbols=${to}`;
  let response = await fetch(URL);
  k = await response.json();
  msg.innerText = `${amtVal} ${from} = ${amtVal*k.rates[to]} ${to}`;
})



const updateFlag = (element) => {
  currCode = element.value;
  contCode = countries[element.value];
  newSrc = `https://flagsapi.com/${contCode}/shiny/64.png`;
  let img = element.parentElement.querySelector('img');
  img.src = newSrc;
}



// const getRate = async() => {
//     let promm = await fetch(URL);
//     k = await promm.json();
//     console.log(k.rates)
// }

// getRate()





// function convert(from, to, amount) {
//    fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`)
//      .then((resp) => resp.json())
//      .then((data) => {
//        const convertedAmount = (amount * data.rates[to]).toFixed(2);
//        console.log(`${amount} ${from} = ${convertedAmount} ${to}`);
//      });
//    }

// convert("USD", "INR", 80);