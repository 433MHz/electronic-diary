<template>
    <div id="AddStudentContainer">
        <h1>Dodaj przedmiot</h1>
        <input type="text" placeholder="nazwa przedmiotu"><br>
        <input type="text" placeholder="nauczyciel prowadzący"><br>
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