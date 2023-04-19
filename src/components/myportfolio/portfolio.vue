<template>
    <div>
<appStock v-for="stock in stocks" :stock="stock"></appStock>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
import stock from './stock.vue'
export default {
    computed:{
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    },
    components:{
        appStock:stock 
    }
}
</script>