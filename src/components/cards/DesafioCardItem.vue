<template>
  <div>
    <router-link
    :to="`/series/${filme.id}`"
    >
      <div class="item" @click="selecionar">
        <img :src="urlImg(filme.poster_path)" alt="" />
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    filme: {
      type: Object,
      required: true,
      urlImg: ''
    },
  },
  methods: {
    urlImg(path) {
      if(path){
        this.urlImg = `https://image.tmdb.org/t/p/w200${path}`;
      }else {
        this.urlImg =  "http://localhost:8080/img/foto-default.366dadb1.png";
      }
      console.log(this.urlImg)
      return this.urlImg;
    },
    selecionar() {
      this.$emit("selecionarFilme", this.filme);
    },
  },
};
</script>
<style>
.item {
  display: inline-block;
  width: 157px;
  cursor: pointer;
}
.item img {
  width: 95%;
  transform: scale(1);
  transition: all ease 0.3s;
}
.item img:hover {
  transform: scale(1.1);
}
</style>