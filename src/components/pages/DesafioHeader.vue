<template>
  <header>
    <div class="container-fluid d-flex">
      <div class="col-1"></div>
      <div class="colLogo col-md-7 d-flex align-items-center">
        <router-link to="/" class="linkLogo">
          <img class="imgLogo" src="./../../assets/logo.png" alt="" />
         Desafio<b class="nameLogo">VueJS</b>
        </router-link>
      </div>
      
      <div class="col-md-4 d-flex align-items-center">
        <ul class="nav">
            <router-link 
            to="/" 
            class=" colLinks btn mr-5 mt-2"
            exact>
            <b>Início</b>
            </router-link>
            <router-link 
            to="/filmes" 
            class="colLinks btn mr-5 mt-2"
            exact>
            <b>Filmes</b>
            </router-link>
            <router-link 
            to="/series" 
            class="colLinks btn mt-2"
            exact>
            <b>Séries</b>
            </router-link>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style>
.nameLogo {
  color: #d48e23;
}
.nameLogo:hover {
  color: #fff;
}
.linkLogo {
  color: #fff;
}
.linkLogo:hover {
  color: #d48e23;
  text-decoration: none;
}
.colLogo {
    font-size: 25px;
}
.colLinks{
    color: #fff;
    font-size: 18px;
}
.colLinks:hover{
    color: #d48e23
}
header {
  background-color: #2b3d50;
  width: 100%;
  height: 50px;
}
.imgLogo {
  width: 35px;
  height: 100%;
}
.btnLogo:hover{
    color: #fff;
    background-color: #d48e23
}

</style>