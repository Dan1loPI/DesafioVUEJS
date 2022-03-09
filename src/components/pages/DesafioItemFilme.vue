<template>
  <router-link 
  class="link"
  :to="`/filmes/${filme.id}`">
    <div class="divCard">
      <div class="card m-2 d-flex" style="width: 11rem">
        <img :src="urlImg(200,filme.poster_path)" alt="">
        <p class="text-center pTitle"><b>{{filme.title}}</b></p>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: {
    filme: {
      type: Object,
      required: true,
    },
  },
  methods: {
    urlImg(tamanho, path) {
      const url = `https://image.tmdb.org/t/p/w${tamanho}${path}`;
      return url;
    }
  }
};
</script>
<style scoped>
.divCard {
  display: inline-block;
}
.card{
  background-color: #344960;
  border: none;
}
.card img {
  border-radius: 10px;
  box-shadow: 3px 3px 8px black;
}
.pTitle{
  color: #fff;
}
.pTitle:hover {
  color: #d48e23;
}
.link:hover {
  opacity: 0.7;
}
</style>