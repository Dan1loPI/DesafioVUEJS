<template>
  <div
    class="cPrincipal"
    :style="{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${serie.backdrop_path})`,
    }"
  >
    <div class="divVertical d-flex justify-content-center">
      <div class="divDescricao container col-10">
        <div class="row mt-4">
          <div class="col-3 divImg justify-content-center d-flex">
            <img
              class="img-fluid"
              :src="urlImg(300, serie.poster_path)"
              alt=""
              width="200"
            />
          </div>
          <div class="col-8 ml-4">
            <div class="row">
              <h1 class="text-white">
                <b>{{ serie.name }}</b>
              </h1>
            </div>
            <div class="row">
              <p class="text-success mr-2">{{ serie.vote_average }}</p>
              <div v-for="genre in serie.genres" :key="genre.id">
                <p class="text-white">{{ genre.name }}&nbsp;</p>
              </div>
            </div>
            <div class="row">
              <p>
                <i class="text-secondary">"{{ serie.tagline }}"</i>
              </p>
            </div>
            <div class="row">
              <p class="text-light">{{ serie.overview }}</p>
            </div>
            <div class="row text-light">
              {{ serie.number_of_seasons }} temporadas.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class=" row">
      title
    </div>

    <div class="cardListAutor container col-11 d-flex">      
      <div v-for="personagens in elenco" :key="personagens.id">
        <div class="cardAutor p-1">
          <img
            class=""
            width="100"
            :src="urlImg(200, personagens.profile_path)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "@/axios";

export default {
  data() {
    return {
      id: this.$route.params.id,
      serie: "",
      elenco: [],
    };
  },
  beforeRouteUpdate(to, next) {
    this.id = to.params.id;
    next();
  },
  created() {
    axios
      .get(
        `/tv/${this.id}?api_key=c770107a6b46f6a597dc5e1a486d8784&language=pt-BR`
      )
      .then((response) => {
        console.log(response.data);
        this.serie = response.data;
      }),
      axios
        .get(
          `/tv/${this.id}/aggregate_credits?api_key=c770107a6b46f6a597dc5e1a486d8784&language=pt-BR`
        )
        .then((response) => {
          console.log(response.data.cast);
          this.elenco = response.data.cast;
        });
  },
  methods: {
    urlImg(tamanho, path) {
      const url = `https://image.tmdb.org/t/p/w${tamanho}${path}`;
      return url;
    },
  },
};
</script>
<style scoped>
.cPrincipal {
  height: 90vh;
}
.divVertical {
  width: inherit;
  height: 100%;
  background: linear-gradient(to top, #344960 10%, transparent 90%);
  background-color: rgba(0, 0, 0, 0.5);
}
.divDescricao {
  margin-top: 70px;
  margin-bottom: 200px;
}
.divImg img {
  border-radius: 10px;
}
.cardAutor img {
  border-radius: 10px;
}
.cardListAutor {
  margin-top: -150px;
  overflow: hidden;
}
</style>
