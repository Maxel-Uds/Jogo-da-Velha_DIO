var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id)
{
    if(vencedor !== null)
    {
        return;
    }

    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML === '-')
    {
        quadrado.innerHTML = jogador;
        quadrado.style.color = '#000';

        if(jogador === 'X')
        {
            jogador = 'O';
        }
        else
        {
            jogador = 'X';
        }

        mudarJogador(jogador);
        checaVencedor()
    }
    else
    {
        alert('Jogada inválida!\nEscolha outra posição');
    }
}

function mudarJogador(valor)
{
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor()
{
    var cubos = [, quadrado1 = document.getElementById('1'),
    quadrado2 = document.getElementById('2'),
    quadrado3 = document.getElementById('3'),
    quadrado4 = document.getElementById('4'),
    quadrado5 = document.getElementById('5'),
    quadrado6 = document.getElementById('6'),
    quadrado7 = document.getElementById('7'),
    quadrado8 = document.getElementById('8'),
    quadrado9 = document.getElementById('9')]

    for(var i = 1; i <= 7; i += 3)
    {
        if(checaSequencia(cubos[i], cubos[i + 1], cubos[i + 2]))
        {
            mudaCorQuadrado(cubos[i], cubos[i + 1], cubos[i + 2]);
            mudarVencedor(cubos[i]);
        }
    }

    for(var i = 1; i <= 3; i++)
    {
        if(checaSequencia(cubos[i], cubos[i + 3], cubos[i + 6]))
        {
            mudaCorQuadrado(cubos[i], cubos[i + 3], cubos[i + 6]);
            mudarVencedor(cubos[i]);
        }
    }

    if(checaSequencia(quadrado1, quadrado5, quadrado9))
    {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
    }
    else if(checaSequencia(quadrado3, quadrado5, quadrado7))
    {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }
}

function mudarVencedor(quadrado)
{
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
    setTimeout(() => {
        alert(`O jogo  acabou!\nO jogador ${vencedor}\nClique em reiniciar para começar um novo jogo!`);
    }, 500);
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3)
{
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3)
{
    var eigual = false;
    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML)
    {
        eigual = true;
    }

    return eigual;
}

function reiniciar()
{
    if(vencedor == null)
    {
        alert('O jogo não pode ser reiniciado antes de acabar!');
        return;
    }

    vencedor = null;
    vencedorSelecionado.innerHTML = '';
    for(var i = 1; i <= 9; i++)
    {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}