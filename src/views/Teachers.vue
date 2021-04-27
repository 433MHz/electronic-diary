<template>
<div id="LeftMenuBar"><LeftMenuBar :buttons="buttons" @buttonClick="buttonEvent = $event"></LeftMenuBar></div>
<div id="Content"> 
    <h1>Dodaj nauczyciela</h1>
        <input type="text" placeholder="Imie"><br>
        <input type="text" placeholder="Nazwisko"><br>
        <button>Dodaj</button>
</div>
</template>

<script>
import LeftMenuBar from '../components/LeftMenuBar.vue'
export default {
    components:{LeftMenuBar},

    data(){
        return{
            buttons:[{buttonName: 'Dodaj nauczyciela', buttonEvent: 1},
            {buttonName: 'Pokaż nauczycieli', buttonEvent: 2}],
            buttonEvent: ''
        }
    },

    mounted(){
        this.$store.commit("setTitle", "Nauczyciele")
    }

}
</script>

<style scoped>
    
</style>