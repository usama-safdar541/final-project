<template >
    <div class="container bg-dark text-white col-md-4">
        <h1>Trade or view your portfolio</h1>
<h6>You may save & load your data</h6>
<h6>Click on "End Day" to begin a new day</h6>
<hr>
<p>Your Funds : {{ funds }}</p>
</div>
</template>

<script>
export default{
computed:{
    funds(){
        return this.$store.getters.funds
    }
}

}

</script>