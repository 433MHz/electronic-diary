<template>
    <div id="AddStudentContainer">
        <h1>Dodaj ucznia</h1>
        <input type="text" placeholder="imie"><br>
        <input type="text" placeholder="nazwisko"><br>
        <button-main-frame title="Dodaj" @click="PerformButton()"></button-main-frame>
    </div>    
</template>


<script>
import buttonMainFrame from '../buttonMainFrame.vue'
export default {
  components: { buttonMainFrame },
    
}
</script>


<style>
    #AddStudentContainer input{
        margin-top: 10px;
    }
</style>