import Vue from 'vue'
import VueRouter from 'vue-router'

import Filmes from './components/pages/DesafioFilmes.vue'
import DesafioFilmeDetalhes from './components/pages/DesafioFilmeDetalhes.vue'
import Series from './components/pages/DesafioSeries.vue'
import SerieDetalhes from './components/pages/DesafioSerieDetalhes.vue'
import Erro404 from './components/pages/Desafio404.vue'
import Home from './components/pages/DesafioHome.vue'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/filmes', component: Filmes},
    { path: '/filmes/:id', component: DesafioFilmeDetalhes },
    { path: '/series', component: Series}, //desafio.com/series
    { path: '/series/:id', component: SerieDetalhes}, // desafio.com/series/4
    { path: '/', component: Home}, //desafio.com
    { path: '*' , component: Erro404}
  ]
});