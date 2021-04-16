<template>
    <div id="AddClassContainer">
        <h1>Dodaj klasę</h1>
        <input type="text" placeholder="imie"><br>
        <input type="text" placeholder="nazwisko"><br>
        <button-main-frame title="Dodaj" @click="PerformButton()"></button-main-frame>
    </div>    
</template>


<script>
import buttonMainFrame from '../buttonMainFrame.vue'
export default {
  components: { buttonMainFrame },
    methods:{
        PerformButton(){
            alert("do something")
        }
    }
}
</script>


<style>
    #AddClassContainer input{
        margin-top: 10px;
    }
</style>