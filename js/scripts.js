let inputBox = document.getElementById("valueInsert");
let resultBox = document.getElementById("valueResult");
const coinList = {
    "Dólar": {
        value: 5.63,
        type: 'USD'
    },
    "Real": {
        value: 1.0,
        type: 'BRL'
    },
    "Euro":{
        value: 6.50,
        type: 'EUR'
    },
    "Libra":{
        value:7.71,
        type: 'GBP'
    },
    "Dólar australiano":{
        value:4.24,
        type: 'AUD'
    },
};

const invalidChars = [
    "e",
    "E",
    "+",
    "-",
];

inputBox.addEventListener("keydown", function(event){
    if(invalidChars.includes(event.key)){
        event.preventDefault();
    }
});

const genereteOptions = (idSelect) =>{
    const selectOption = document.getElementById(idSelect);
    for(coin in coinList){
        option = document.createElement("option");
        option.value = coinList[coin].type;
        option.text = coin;
        selectOption.add(option,selectOption.options[coin.lenght]);
    }
}

function getApi(){
    fetch(`https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL`, {
        method: 'GET'
    })
        .then(result => result.json())
        .then(function(listaMoedas){
            for (let moeda of listaMoedas){
                console.log(moeda);
            }
        })
        .catch(error => console.log('error', error));
}

function changeCoins (){
    const firstSelect = document.getElementById('firstGold').value;
    const secondSelect = document.getElementById('secondGold').value;
    document.getElementById('secondGold').value = firstSelect;
	document.getElementById('firstGold').value  = secondSelect;
    clickConverter('firstGold', 'secondGold');
    getApi();
}

function calculaConversao(firstGold, secondGold, value){
    const valueCoin = (coinList[firstGold].value / coinList[secondGold].value);
    resultBox.value = (value * valueCoin);
}

function clickConverter(firstGold, secondGold){
    const firstSelect = document.getElementById(firstGold);
    const secondSelect = document.getElementById(secondGold);
    const firstOption = firstSelect.children[firstSelect.selectedIndex];
    const secondOption = secondSelect.children[secondSelect.selectedIndex];
    if (inputBox.value != ''){
        calculaConversao(firstOption.textContent, secondOption.textContent, parseFloat(inputBox.value));
    }
}

genereteOptions('firstGold');
genereteOptions('secondGold');


