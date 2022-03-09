<template>
  <section>
    <div class="linhaLista col-12">
      <h3>Séries Original da NETFLIX</h3>
      <div class="movEsquerda" @click="moverParaDireita">
        <img src="../../assets/img/setaRight.svg" width="32" height="32" />
      </div>
      <div class="movDireita" @click="moverParaEsquerda">
        <img src="../../assets/img/setaLeft.svg" width="32" height="32" />
      </div>
      <div class="listaArea">
        <div
          class="lista d-flex"
          :style="{
            marginLeft: this.scroll + 'px',
            width: this.filmes.length * 150 + 'px',
          }"
        >
          <DesafioCardItem
            v-for="filme in filmes"
            :key="filme.id"
            :filme="filme"
            @selecionarFilme="filmeSelecionado = $event"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "@/axios";
import DesafioCardItem from "./DesafioCardItem.vue";

export default {
  name: "Lista",
  components: {
    DesafioCardItem,
  },
  data() {
    return {
      filmes: [],
      scroll: 0,
      filmeSelecionado: undefined,
    };
  },
  created() {
    axios
      .get(
        `tv/popular?api_key=c770107a6b46f6a597dc5e1a486d8784&language=pt-BR&page=1&sort_by=popularity.desc`
      )
      .then((response) => {
        this.filmes = response.data.results;
      });
  },
  methods: {
    urlImg(path) {
      const url = `https://image.tmdb.org/t/p/w200${path}`;
      return url;
    },
    moverParaEsquerda() {
      let x = this.scroll + Math.round(window.innerWidth / 2);
      if (x > 0) {
        x = 0;
      }
      this.scroll = x;
    },
    moverParaDireita() {
      let x = this.scroll - Math.round(window.innerWidth / 2);
      let listW = this.filmes.length * 150;
      if (window.innerWidth - listW > x) {
        x = window.innerWidth - listW - 60;
      }
      this.scroll = x;
    },
  },
};
</script>
<style scoped>
.linhaLista {
  margin-top: -50px;
}
.linhaLista h3 {
  color: white;
}
.lista {
  transition: all ease 0.5s;
}
.listaArea {
  overflow: hidden;
  padding-left: 30px;
}
.movDireita,
.movEsquerda {
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.5s;
}
.movDireita {
  left: 0;
}
.movEsquerda {
  right: 0;
}
.linhaLista:hover .movEsquerda,
.linhaLista:hover .movDireita {
  opacity: 1;
}
</style>