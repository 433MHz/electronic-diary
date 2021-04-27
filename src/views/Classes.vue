<template>
<div id="LeftMenuBar"><LeftMenuBar :buttons="buttons" @buttonClick="buttonEvent = $event"></LeftMenuBar></div>
<div id="Content"><h1>content {{buttonEvent}}</h1></div>
</template>

<script>
import LeftMenuBar from '../components/LeftMenuBar.vue'
export default {
    components:{LeftMenuBar},

    data(){
        return{
            buttons:[{buttonName: 'Dodaj klasę', buttonEvent: 1},
            {buttonName: 'Pokaż klasy', buttonEvent: 2}],
            buttonEvent: ''
        }
    },

    mounted(){
        this.$store.commit("setTitle", "Klasy")
    }

}
</script>

<style scoped>
    #LeftMenuBar{
        float: left;
    }

    #Content{
        float: left;
        margin-left: 50px;
    }
</style>