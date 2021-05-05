var jogador, vencedor = null;
var Opontos = 0;
var Xpontos = 0;
var jogadas = 0;
var pontosDeX = document.getElementById('Xpontos');
var pontosDeO = document.getElementById('Opontos');
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var quadrados = document.getElementsByClassName('quadrado');
var aviso = document.getElementById('aviso');

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
        jogadas++;
        checaVelha();
    }
    else
    {
        aviso.innerHTML = 'Jogada inválida! Escolha outra posição';
        retomaTitulo();
    }
}

function mudarJogador(valor)
{
    jogador = valor;
    jogadorSelecionado.innerHTML = `Jogador ${jogador}`;
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
    if(quadrado.innerHTML === 'X')
    {
        Xpontos++;
        pontosDeX.innerHTML = `${Xpontos} Pontos`;
    }
    else if(quadrado.innerHTML === 'O')
    {
        Opontos++;
        pontosDeO.innerHTML = `${Opontos} Pontos`;
    }
    vencedor = quadrado.innerHTML;
    jogadorSelecionado.innerHTML = `Vencedor ${vencedor}`;

    aviso.innerHTML = 'O jogo  acabou! Clique em reiniciar!';
    retomaTitulo();
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

function checaVelha()
{
    if(jogadas == 9 && vencedor == null)
    {
        aviso.innerHTML = 'Ih! Deu velha! Recomece o jogo';
        retomaTitulo();
    }
}

function retomaTitulo()
{
    setTimeout(() => {
        aviso.innerHTML = 'Jogo da velha';
    }, 1500);
}

function reiniciar()
{
    if(vencedor == null && jogadas < 9)
    {
        aviso.innerHTML = 'O jogo não pode ser reiniciado antes de acabar!';
        retomaTitulo();
        return;
    }

    vencedor = null;
    jogadorSelecionado.innerHTML = `Jogador ${jogador}`;
    jogadas = 0;
    for(var i = 1; i <= 9; i++)
    {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}