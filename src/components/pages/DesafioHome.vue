<template>
    <div>
        <DesafioCardPrincipal/>
        <DesafioCardLista class="pt-4 mb-4" /><br>
    </div>
</template>

<script>

import DesafioCardPrincipal from '../cards/DesafioCardPrincipal.vue'
import DesafioCardLista from '../cards/DesafioCardLista.vue'
export default {
    components: {
        DesafioCardPrincipal,
        DesafioCardLista
    }
}
</script>

<style>

</style>