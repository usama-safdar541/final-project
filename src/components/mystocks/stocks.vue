<template>
    <div class="">
       <app-stock v-for="stock in stocks" :stock = "stock"></app-stock>
    </div>
</template>

<script>
import Stock from './stock.vue'
export default{
 
    components:{
        appStock : Stock
    },
    computed:{
        stocks(){
            return this.$store.getters.stocks;
        }
    }
}
</script> 