<template>
  <div class="info">
    <h1 class="mt-2">Informações</h1>
    <b-row>
      <b-col>
        <b-card
          bg-variant="dark"
          text-variant="white"
          title="Instruções"
          style="max-width: 80%;"
          class="card shadow mt-2"
        >
          <b-card-text>
            <b-card-sub-title>Enviar Escrito</b-card-sub-title>
            <ul>
              <li>
                Na tela principal (Home), clique na caneta em
                <img src="../assets/enviar.png" alt="Foto Enviar" />.
              </li>
              <li>
                Na tela seguinte, preencha os dados. Atenção para o campo
                "E-mail": ele é <strong>obrigatório</strong> porque somente por
                ele poderemos contactar o autor caso sua obra seja escolhida
                para ser publicada por alguma editora.
              </li>
              <li>
                Se o Escrito já estiver pronto, basta colá-lo no editor de texto
                <img src="../assets/editor.png" alt="Foto do Editor de Texto" />
                e clicar em
                <img src="../assets/btn-enviar.png" alt="Botão Enviar" />.
              </li>
              <li>
                Se for criar o Escrito na hora de enviar, basta fazê-lo no
                editor de texto e clicar no botão "Enviar Escrito".
                <strong>Atenção:</strong> uma vez enviado, não se pode mais
                editar seu Escrito, por isso só o envie se ele já estiver
                terminado.
              </li>
              <li>
                Se estiver criando seu Escrito no editor de texto nesse site,
                tenha em mente que o seu progresso não será salvo de nenhuma
                maneira por esse site. Então, há o risco de perder tudo que você
                já criou.
              </li>
              <li>Se quiser excluir seu Escrito, basta entrar em contato pelo <a :href="zap">Whatsapp</a>, pelo <a :href="telegram">Telegram</a> ou <a :href="email">E-mail</a>. Seu Escrito será excluído o mais rápido possível do banco de dados.</li>
              <li>Esse site é totalmente <strong>gratuito</strong>. Se alguém cobrar qualquer coisa para enviar seu Escrito, não pague!</li>
            </ul>

            <b-card-sub-title>Disclaimer</b-card-sub-title>
            As personagens e o universo ficcional de todas as obras nesse site
            são propriedade exclusiva de seus criadores e, por isso, de sua
            inteira responsabilidade. Este site é apenas um veículo para que se
            possa divulgar os Escritos dos escritores (principalmente de
            estudantes) para um público mais amplo, sem fins lucrativos.
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
    name: "Info",
    data() {
        return {
            zap: "https://api.whatsapp.com/send?phone=5579988284730&text=Opa! Gostaria de excluir meu Escrito.",
            telegram: "https://telegram.me/jcgsr",
            email: "mailto:cabralguerra@gmail.com"
          }
      }
  };
</script>

<style scoped>
.card {
  margin: 0 auto;
}
a {
    text-decoration: none;
    color: yellow;
  }
ul {
  text-align: left;
}
li {
  line-height: 1.5;
}
img {
  width: 100px;
  height: 40px;
}
</style>
