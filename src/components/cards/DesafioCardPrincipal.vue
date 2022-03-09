<template>
  <section
    class="imgPrincipal img-fluid"
    :style="{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${filme.backdrop_path})`,
    }"
  >
    <div class="divVertical d-flex">
      <div class="divHorizontal d-flex flex-column justify-content-center col-5">
        <div class="divName text-white"><b>{{ filme.name }}</b></div>
        <div class="divInfo">
            <div class="row ml-1">
               <p class="pontuacao">{{ filme.vote_average }} pontos </p>
               <p class="anoLancamento ml-2">{{ filme.first_air_date}}</p>
               <p class="descricao mt-3 ml-2">{{ filme.overview }}</p>
            </div>
            <div class="row divBtns">
                <router-link class="btn btnInfo" :to="`/series/${filme.id}`" >Mais Informações</router-link>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "@/axios";

export default {
  data() {
    return {
      filme: "",
    };
  },
  created() {
    axios
      .get(`tv/37680?language=pt-BR&api_key=c770107a6b46f6a597dc5e1a486d8784`)
      .then((response) => {
        console.log(response.data);
        this.filme = response.data;
      });
  },
};
</script>
<style scoped>
.imgPrincipal {
  height: 80vh;
}
.divVertical {
  width: inherit;
  height: 100%;
  background: linear-gradient(to top, #344960 10%, transparent 90%);
}
.divHorizontal {
  height: inherit;
  width: inherit;
  background: linear-gradient(to right, #344960 10%, transparent 90%);
  padding-left: 30px;
  padding-bottom: 150px;
  padding-top: 70px;
}
.divName{
    font-size: 45px;
}
.pontuacao{
    color: #46d369;
}
.descricao{
    font-size: 20px;
    color: #b3b3b3;
}
.btnAss, .btnInfo {
    font-size: 18px;
    opacity: 1;
    transition: all ease 0.2s;
    padding:9px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 20px;
}
.btnAss:hover, .btnInfo:hover {
    opacity: 0.7;
    font-size: 20px;
    font-weight: bold;
}
.btnAss {
    background-color: #fff;
}
.btnInfo {
    background-color: #2D3D50;
    color: #fff;
}
.divBtns {
  margin-left: 10px;
}
</style>