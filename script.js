const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('value-real');
const selectedcurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverted = 0;

function handleSubmit(e){
    e.preventDefault();

    if (!inputValue.value || inputValue.value < 0){
        alert('Informe um valor correto');
        return;
    }else if (!selectedcurrency.value){
        alert('Escolha uma moeda');
        return;
    }

    converter();
};

function converter() {
    if(selectedcurrency.value === 'eur') {
        valueConverted = inputValue.value * 5.51;
        result.innerHTML = valueFormatter('pt-BR', 'EUR');
        animateResult();
        
    } else if (selectedcurrency.value === 'dol'){
        valueConverted = inputValue.value * 5.24;
        result.innerHTML = valueFormatter('en-US', 'USD');
        animateResult();
    }

    inputValue.value = ''; 
    selectedcurrency.value = '';   
};

function valueFormatter(locale, currency ) {
    const value = valueConverted.toLocaleString(`${locale}`,{style:'currency', currency: `${currency}`});
    return `<span>🤑<span> ${value} <span>🤑<span>`;
};

function animateResult(){
    return result.animate([
        {transform: 'translateY(-150px)'},
        {transform: 'translateY(0px)'},
    ], {duration: 500 });

}