<template>
    <b-container>
        <Header></Header>
        <b-col md="12">
            <transition name="slide" mode="out-in">
                <router-view></router-view>
            </transition>
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

    .slide {
        &-enter-active {
            animation: slide-in 200ms ease-out forwards;
        }

        &-leave-active {
            animation: slide-out 200ms ease-out forwards;
        }
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
