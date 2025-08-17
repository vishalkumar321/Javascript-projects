const BASE_URL = "https://api.frankfurter.app/latest?from=";

const dropDowns = document.querySelectorAll(".dropDown select");
const btn = document.querySelector(".btn");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


for(let select of dropDowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
          } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
          }
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}

const updateFlag=(element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

const updateExchangeRate = async() =>{
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal == '' && amtVal<=0){
        alert("please enter the valid amount!");
    }
    else{
        const URL = `${BASE_URL}${fromCurr.value}&to=${toCurr.value}`;
        let response = await fetch(URL);
        let data = await response.json();
        let rate = data.rates;
        console.log(amtVal);
        console.log(rate);
        console.log(data);
    
        let finalAmount = amtVal * rate[toCurr.value];

        console.log(finalAmount);
        msg.innerText = `${amtVal}${fromCurr.value} = ${finalAmount}${toCurr.value}`;
    }
};

    btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
    });

    window.addEventListener("load",()=>{
        updateExchangeRate();
    });

