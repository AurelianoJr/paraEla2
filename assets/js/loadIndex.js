var container = document.getElementById("container");
var body = document.querySelector("body");

var interval = setInterval(() => {

    if (animation.isPaused) {
        clearInterval(interval);
        container.innerHTML = ` 
            <div id="citacao" class="citacao">
                <span class="citacao__aspas citacao__aspas--esquerda"></span>
                <p class="citacao__texto">
                    Quero que você saiba que sempre será parte de mim. No tempo que passamos juntos, você conquistou um
                    lugar especial no meu coração, que eu vou levar comigo para sempre e ninguém pode substituir. (...)
                    e não importa o que o futuro traga, você sempre será, e sei que minha vida é melhor por causa disso.
                </p>
                <span class="citacao__aspas citacao__aspas--esquerda"></span>
                <h2 class="citacao__autor">- Nicholas Sparks</h2>
            </div>`
        body.innerHTML += `<section class="area2">
            <h2 class="area2__titulo">Toda historia tem um inicio, e a nossa começou aqui...</h2>

            <div class="mensagem mensagem--direita">
                <span class="mensagem__name mensagem__name--direita"></span>
                <p class="mensagem__texto">Não sei se amei mais a música ou o box... Perfeito demais, sem condições</p>
                <span class="mensagem__data">24/09/2020</span>
            </div>

            <div class="mensagem mensagem--esquerda mensagem--margin-grande">
                <span class="mensagem__name mensagem__name--esquerda"></span>
                <p class="mensagem__texto">kkkkk eu tbm amo os dois</p>
                <p>mt perfeito o box e a música</p>
                <span class="mensagem__data">24/09/2020</span>
            </div>

            <div class="mensagem mensagem--direita mensagem--margin-grande">
                <span class="mensagem__name mensagem__name--direita"></span>
                <p class="mensagem__texto">Não vou mentir, fiquei com inveja kkkkk</p>
                <span class="mensagem__data">24/09/2020</span>
            </div>

            <div class="mensagem mensagem--direita mensagem--padding-pequeno">
                <span class="mensagem__name"></span>
                <p>Tu é fã de literatura ou só gosta dos livros de Shakespeare?</p>
                <span class="mensagem__data">24/09/2020</span>
            </div>

            <div class="mensagem mensagem--direita mensagem--padding-pequeno">
                <span class="mensagem__name"></span>
                <p>Vou indo dormir, vida de idoso não é fácil kkkkkk</p>
                <span class="mensagem__data">24/09/2020</span>
            </div>

            <div class="mensagem mensagem--direita mensagem--padding-pequeno">
                <span class="mensagem__name"></span>
                <p>Dorme bem e tenha bons sonhos</p>
                <p>Se cuida, tá ?</p>
                <p>Boa noite</p>
                <span class="mensagem__data">24/09/2020</span>
            </div>

            <div class="mensagem mensagem--esquerda mensagem--margin-grande">
                <span class="mensagem__name mensagem__name--esquerda"></span>
                <p class="mensagem__texto">kkkkkk eu tbm ficaria</p>
                <span class="mensagem__data">24/09/2020</span>
            </div>

            <div class="mensagem mensagem--esquerda mensagem--padding-pequeno">
                <span class="mensagem__name"></span>
                <p class="mensagem__texto">de literatura e vc?</p>
                <p>gosta?</p>
                <span class="mensagem__data">24/09/2020</span>
            </div>

            <div class="mensagem mensagem--esquerda mensagem--padding-pequeno">
                <span class="mensagem__name"></span>
                <p class="mensagem__texto">tbm vou</p>
                <p>já era p ter ido</p>
                <span class="mensagem__data">24/09/2020</span>
            </div>

            <div class="mensagem mensagem--esquerda mensagem--padding-pequeno">
                <span class="mensagem__name"></span>
                <p class="mensagem__texto">kkkkk vc tbm se cuide</p>
                <p>falando cm se já conhecesse</p>
                <p>boa</p>
                <span class="mensagem__data">24/09/2020</span>
            </div>

            <div class="mensagem mensagem--direita mensagem--margin-grande">
                <span class="mensagem__name mensagem__name--direita"></span>
                <p class="mensagem__texto">
                    Bom, não vou dizer que sou amante de literatura porque vou passar vergonha por conhecer poucos
                    livros "conhecidos" kkkkkk
                </p>
                <span class="mensagem__data">24/09/2020</span>
            </div>

            <div class="mensagem mensagem--direita mensagem--padding-pequeno">
                <span class="mensagem__name"></span>
                <p>Mas gosto muito de ler</p>
                <p>Principalmente livros interessante e com boa história</p>
                <span class="mensagem__data">24/09/2020</span>
            </div>

            <div class="mensagem mensagem--direita mensagem--padding-pequeno">
                <span class="mensagem__name"></span>
                <p>Acabei não vendo tua mensagem, desculpa não ter respondido</p>
                <span class="mensagem__data">24/09/2020</span>
            </div>
            <div class="mensagem mensagem--direita mensagem--padding-pequeno">
                <span class="mensagem__name"></span>
                <p>
                    Sobre falar como se já conhecesse... <br /><br />
                    Você não lembra que dividimos o berço na maternidade ?
                    <br /><br />Poxa, não achei que você iria esquecer de mim assim tão fácil 💔 <br /><br />
                    Kkkkkkkk
                </p>
                <span class="mensagem__data">24/09/2020</span>
            </div>

            <div class="mensagem mensagem--esquerda mensagem--margin-grande">
                <span class="mensagem__name mensagem__name--esquerda"></span>
                <p class="mensagem__texto">
                    aaah, vc não precisa estar dentro dos padrões <br /><br />
                    tranquilo<br /><br />
                    acontece
                </p>
                <span class="mensagem__data">24/09/2020</span>
            </div>

            <div class="mensagem mensagem--esquerda mensagem--padding-pequeno">
                <span class="mensagem__name"></span>
                <p class="mensagem__texto">
                    kkkkkk no início do texto eu pensei q realmente nos conhecíamos <br><br>
                    vc nasceu em que q data?
                </p>
                <span class="mensagem__data">24/09/2020</span>
            </div>
            <div class="mensagem mensagem--esquerda mensagem--padding-pequeno">
                <span class="mensagem__name"></span>
                <p class="mensagem__texto">
                    nossa <br><br>
                    não tem nenhuma informação sobre vc <br><br>
                    kkkkkkkkk dividimos o berço? foi de conchinha?
                </p>
                <span class="mensagem__data">24/09/2020</span>
            </div>

            <div class="final">
                <h2 class="final__titulo">E continuamos conversando...</h2>
                <p class="final__paragrafo">
                    E, a medida que fomos conversando, comecei a perceber que havia conhecido uma pessoa especial.<br><br>
                    Foi nos pequenos detalhes que conectei; no seu jeito de ver o mundo, na forma como encher a beleza da simplicidade... 
                    Na sua entrega a vida e a certeza de que os nossos medos não devem nos impedir de chegar onde queremos. <br><br>
                    Seria impossível explicar as coisas que sinto por você...
                </p>
                <a class="final__link" href="./palavras.html">Está afim de tentar?</a>
            </div>
        </section>
        `;
        document.getElementById("citacao").style.animation = "animacao-citacao 1s ease-in-out forwards";
    }
}, 900);