
//OBS: provavelmente o resultado do teste do click não sera realmente preciso.


/*

Resumo dos meus 5 estados

1-Estado azul(Estado no qual a tela começara so sera exibido uma vez com o usuario abrir o site)

2-Estado vermelho(Estado no qual se começa a jogar pois nele a tela ficara vermelha até que ou sofra alteração pelo proprio codigo
ou sofra alteração pelo click antessipado do usuario)   
    
3-Estado laranja(Estado no qual e chamado quando o usuario clica antessipadamente)   

4-Estado verde(Estado no qual e chamado pelo proprio codigo quando se passa um certo tempo no estado vermelho)

5-Estado amarelo(Estado no qual e chamado quando efetua um click no estado verde assim mostrando ao usuario o resultado do teste)
 
*/

//Constantes de pegar documentos do HTML
const areaC  = document.querySelector(".localClick");
const textR1 = document.getElementById("resposta1");
const textR2 = document.getElementById("resposta2");

var t = 0;//Valor inicial do meu cronometro

var cor = "blue";//Valor inicial da minha cor

//Cria minhas variaveis dos cronometros
var tempoG ;
var tempoR ;


areaC.addEventListener("click", ()=>//Função que se ativa quando eu clico na minha imagem central
{

//Ifs para saber oque ira acontecer quando eu clicar na imagem
if(cor == "blue")//Se eu clicar e minha cor for azul inicia o meu teste |Chama vermelho
{
    estadoVermelho();//Chama a função alterarVermelho
    cor = "red";//Altera minha cor para "red"
    
}
else if(cor == "red")//Se eu clicar e minha cor for vermelha reseta o meu teste |Chama Laranja
{
    estadoLaranja();//Chama a função alterarOrange
    cor = "orange";//Altera minha cor para "orange"

}
else if(cor == "orange")//Se eu clicar e a cor for laranja  inicia o teste novamente |Chama vermelho
{
    estadoVermelho();//Chama a função alterarVermelho
    cor = "red";//Altera minha cor para "red"
}
else if(cor == "green")//Se eu clicar e minha cor for verde mostra o resultado do meu teste |Chama amarelo
{
    estadoAmarelo();//Chama a função estadoAmarelo
    cor = "yellow"//Altera minha cor para "yellow"

}
else if(cor == "yellow")//Se eu clicar e minha cor for amarela ira resetar o meu teste |Chama vermelho
{
    estadoVermelho()//Chama a função estadoVermelho
    cor = "red";//Altera minha cor para "red"
};
//f dos Ifs

});
//f da função de click

//Funções Mestras 
function estadoVermelho()//Função que ira iniciar o estado vermelho
{
    
    alterarRed()//Chama a função de alterar a tela
    timerR()//Chama a função para inicializar o cronometro red
    
};
function estadoLaranja()//Função que mostrara um erro pois o jogador clicou antes do que deveria
{
    
    alterarOrange()//Chama a função de alterar a tela
    pTimerR()//Para o cronometro red

};
function estadoVerde()//Função que inicia o estado de teste cujo o qual vai testar quanto tempo o jogador ira demorar para clicar
{
    
    alterarGreen();//Chama a função de alterar a tela 
    timerG();//Chama a função para inicializar o cronometro green
    
};
function estadoAmarelo()//Função que mostrara o resultado de quanto tempo levou para poder clicar
{
 
    alterarYellow();//Chama a função para alterar a tela
    pTimerG();//Para o cronometro green

};
//f das funções Mestras


//Funções de Timers
function timerR()//Função que inicia o timer red
{

    const aleatorio = (Math.floor( 3 + Math.random()*3));//Aqui eu gero um numero aleario entre 0 - 3 e somo mais 3 ao valor aleatorio

    tempoR = setTimeout( ()=>{estadoVerde()}, aleatorio*1000);//Aqui eu faço um time que pega o valor de aleatorio *1000 para gerar este valor em segundos
   
};
function pTimerR()//Função que para o timer red
{

    clearTimeout(tempoR);//Para a contagem para poder mudar para o estadoVerde

}
function timerG()//Função que inicia o timer green
{

    tempoG = setInterval(()=>{t+=3}, 1);//Define que tempoG inicie uma contagem
    
};
function pTimerG()//Função que para o timer green
{
    clearTimeout(tempoG);//Para de somar valor no meu cronometro
    
};
//f das funções de timers


//Funções para alterar a tela 
function alterarRed()//Função que altera a tela para seu estado de preparação ou estado vermelho
{
    
    areaC.style.backgroundColor = "red";

    textR1.innerHTML = "Clique Quando Ficar Verde";
    textR2.innerHTML = "";

};
function alterarOrange()//Função que altera a tela para o estado quando o jogador clica antessipadamente
{

    areaC.style.backgroundColor = "orange";

    textR1.innerHTML = "Espere a tela ficar verde"
    textR2.innerHTML = "";

};
function alterarGreen()//Função que altera a tela para seu estado de teste ou estado verde
{

    areaC.style.backgroundColor = "green";

    textR1.innerHTML = "Clique Agora";
    textR2.innerHTML = "";

    cor = "green";

};
function alterarYellow()//Função que altera a tela para seu estado de resultado ou estado amarelo
{

    areaC.style.backgroundColor = "yellow";

    textR1.innerHTML = t +"ms";
    textR2.innerHTML = "Clique para jogar novamente";
    t = 0;
    
};
//f das funções de alterar a tela



