const resultado = document.querySelector('.resultado');
const inputValor = document.querySelector('.valor');

function dolar(){
    const valor = parseFloat(inputValor.value);

    if(valor > 0){
        //Método de comunicação
        let request = new XMLHttpRequest();
        //Requisição com GET
        request.open('GET', 'https://economia.awesomeapi.com.br/last/USD-BRL', true);
        //Conexão
        request.send();
        //Receber status HTTP
        request.onload = function() {
            if (request.readyState == 4 && request.status == 200) {
                //Converter para JSON
                const infoDolar = JSON.parse(request.responseText);

                //Pegar informações do dolar na API
                const dadosDolar = infoDolar.USDBRL;

                //Pegar valor exato do dolar
                const dolarExato = dadosDolar.bid;

                const conversao = valor / dolarExato;

                const total = conversao.toFixed(2);

                resultado.style.display = 'block';
                resultado.innerHTML = `U$ ${total}`;
                resultado.style.color = 'greenyellow';
            }
        }
    }
    else{
        resultado.style.display = 'block';
        resultado.innerHTML = 'Valor Invalido';
        resultado.style.color = 'red';
    }
}

function euro(){
    const valor = parseFloat(inputValor.value);

    if(valor > 0){
        //Método de comunicação
        let request = new XMLHttpRequest();
        //Requisição com GET
        request.open('GET', 'https://economia.awesomeapi.com.br/last/EUR-BRL', true);
        //Conexão
        request.send();
        //Receber status HTTP
        request.onload = function() {
            if (request.readyState == 4 && request.status == 200) {
                //Converter para JSON
                const infoDolar = JSON.parse(request.responseText);

                //Pegar informações do dolar na API
                const dadosDolar = infoDolar.EURBRL;

                //Pegar valor exato do dolar
                const dolarExato = dadosDolar.bid;

                const conversao = valor / dolarExato;

                const total = conversao.toFixed(2);

                resultado.style.display = 'block';
                resultado.innerHTML = `€$ ${total}`;
                resultado.style.color = 'greenyellow';
            }
        }
    }
    else{
        resultado.style.display = 'block';
        resultado.innerHTML = 'Valor Invalido';
        resultado.style.color = 'red';
    }
}