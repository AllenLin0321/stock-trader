<template>
    <b-container>
        <Header></Header>
        <b-col md="12">
            <router-view></router-view>
        </b-col>
    </b-container>

</template>

<script>
    import Header from '@/components/Header'
    export default {
        components: {
            Header
        },
        created() {
            this.$store.dispatch('initStocks');
        }
    }
</script>


<style lang="scss">
    body {
        padding: 30px;
    }
</style>
