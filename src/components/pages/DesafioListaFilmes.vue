<template>
  <div class="row">
    <div class="col-3 p-2">
      <div class="divSearch ml-4 mt-2">
        <div class="d-flex justify-content-center">
          <h5 class="mt-2">Pesquisar</h5>
        </div>
        <div class="col-12">
        <form>
          <div class="input-group input-group-sm">
            <input type="text" class="form-control form-control-sm mb-4" placeholder="Filmes..." v-model="search" />
            <div class="input-group-prepend">
              <button @click.prevent.stop="procurar()"  class="btnLogo btn btn-secondary mb-4" type="button" >
                Buscar
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
      <div class="filtroCard ml-4 mt-2">
        <div class="filtros d-flex justify-content-center">
          <h5 class="mt-2">Filtro</h5>
        </div>
        <div class="form-group divItems">
          <div class="row ml-2">Ordenação:</div>
          <select class="custom-select col-9 ml-2 mb-2" v-model="popularidade">
            <option selected="selected" value="&sort_by=popularity.desc">
              Popularidade (maior)
            </option>
            <option value="&sort_by=popularity.asc">
              Popularidade (menor)
            </option>
          </select>
          <div class="row mb-1 ml-2">Data de lançamento</div>
          <div class="row">
            <label class="mr-2 mb-3">de</label>
            <input type="date" class="form-control col-8" v-model="dataGte" />
          </div>
          <div class="row mt-3">
            <label class="mr-1">até</label>
            <input type="date" class="form-control col-8" v-model="dataLte" />
          </div>
          <div class="row ml-2">Generos:</div>
          <select class="custom-select col-9 ml-2 mb-2" v-model="genre">
            <option value="28">Ação</option>
            <option value="16">Animação</option>
            <option value="12">Aventura</option>
            <option value="35">Comédia</option>
            <option value="80">Crime</option>
            <option value="10751">Familia</option>
            <option value="18">Drama</option>
            <option value="99">Documentário</option>
            <option value="9648">Mistério</option>
            <option value="10749">Romance</option>
            <option value="27">Terror</option>
          </select>
          <div class="row d-flex justify-content-center">
            <button
              class="btnBuscar btn btn-secondary mr-5 mt-2 mb-2"
              @click.prevent.stop="filtrar()"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-9 pl-4">
      <DesafioItemFilme
        v-for="filme in filmes"
        :key="filme.id"
        :filme="filme"
      />
      <div class="carregarMais d-flex justify-content-center">
        <button
          @click.prevent.stop="carregarMais(urlCarregarMais)"
          class="btn btn-secondary"
        >
          Carregar Mais
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "@/axios";
import DesafioItemFilme from "./DesafioItemFilme.vue";

export default {
  components: {
    DesafioItemFilme,
  },
  data() {
    return {
      filmes: [],
      page: 2,
      maisFilmes: "",
      popularidade: "",
      genre: undefined,
      dataLte: "",
      dataGte: "",
      urlCarregarMais: "",
      search: ''
    };
  },
  created() {
    axios
      .get(
        `discover/movie?api_key=c770107a6b46f6a597dc5e1a486d8784&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      )
      .then((response) => {
        this.filmes = response.data.results;
      });
    this.urlCarregarMais = `discover/movie?api_key=c770107a6b46f6a597dc5e1a486d8784&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=`;
  },
  methods: {
    carregarMais(url) {
      axios
        .get(url + this.page)
        .then((response) => {
          this.maisFilmes = response.data.results;
          for (let i = 0; i < this.maisFilmes.length; i++) {
            this.filmes.push(this.maisFilmes[i]);
          }
        })
        .finally(() => {
          this.page = this.page + 1;
        });
    },
    filtrar() {
      this.urlCarregarMais = `discover/movie?api_key=c770107a6b46f6a597dc5e1a486d8784&language=pt-BR&with_genres=${this.genre}&primary_release_date.gte=${this.dataGte}&primary_release_date.lte=${this.dataLte}&include_adult=false&page=1${this.popularidade}`;

      axios.get(this.urlCarregarMais).then((response) => {
        this.filmes = response.data.results;
      });
    },
    procurar() {
      axios.get(`search/movie?api_key=c770107a6b46f6a597dc5e1a486d8784&language=pt-BR&query=${this.search}&page=1&include_adult=false`)
      .then((response) => {
        console.log(response.data)
        this.filmes = response.data.results;
      })
    }
  },
};
</script>
<style scoped>
.filtroCard, .divSearch {
  box-shadow: 1px 2px 10px black;
  border-radius: 10px;
  width: 300px;
}
.divItems {
  margin-left: 40px;
}
.btnLogo{
  border-bottom-right-radius: 10px !important;
  border-top-right-radius: 10px !important;
}
.btnBuscar:hover {
  background-color: #d48e23;
}
</style>