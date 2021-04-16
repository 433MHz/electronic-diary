<template>
    <div id="AddTeacherContainer">
        <input type="text" id="firstName" placeholder="Imie"><br>
        <input type="text" id="secondName" placeholder="Nazwisko"><br>
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
    #AddTeacherContainer input{
        margin-top: 10px;
    }
</style>