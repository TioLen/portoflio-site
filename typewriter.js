
function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve,ms));
}

const listaPalavras = ['Desenvolvedor Web', 'Artista 3D', 'Desenvolvedor de Games', 'Professor'];
const el = document.getElementById("typewriter");

let intervalo = 100; //intervalo em milisegundos
let curFraseIndex = 0; //variável que serve como cursor e atualiza seu valor conforme as palavras. 


const writeLoop = async () => {
    while(true){
        let palavra = listaPalavras[curFraseIndex];

        // loop que a cada iteração escreve a palavra incrementando.
        // Exemplo:
        // m; ma; mar; mari; mario;
        for (let i = 0; i < palavra.length; i++) {
            el.innerText = palavra.substring(0, i+1);
            await sleep(intervalo); // pausa a execução (bota pra dormir) por [sleepTime] milisegundos.
                                    // await é uma função assíncrona utilizada com o async.
        }
        await sleep(intervalo*15); // await pausa a funcao assincrona

        // a mesma lógica de escrita, do outro loop, porém ao contrário.
        // começa com a palavra inteira e vai diminuindo até que ela seja completamente apagada.
        for (let i = palavra.length; i > 0; i--) {
            el.innerText = palavra.substring(0, i - 1);
            await sleep(intervalo);
        }

        await sleep(intervalo * 2);

        if (curFraseIndex === listaPalavras.length - 1) {
            curFraseIndex = 0;
        } else {
            curFraseIndex++;
        }
    }
}; // chama a função que criamos
writeLoop();