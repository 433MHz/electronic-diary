<template>
    <div id="AddStudentContainer">
        <h1>Dodaj ucznia</h1>
        <input type="text" placeholder="imie"><br>
        <input type="text" placeholder="nazwisko"><br>
        <input type="number" placeholder="numer telefonu" id="phoneNumberInput"><input type="checkbox" placeholder="asd"><br>
        <div id="containerForClassMemembershipSelector">
        <label for="selectClassMemembership">Wybierz klasę: </label>
        <select name="" id="selectClassMemembership">
            <option value="1C">1C</option>
            <option value="1B">1B</option>
            <option value="2A">2A</option>
        </select>
        </div><br>
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
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button 
    {
    -webkit-appearance: none;
    margin: 0;
    }

    input[type="number"] 
    {
    -moz-appearance: textfield;
    }

    #containerForClassMemembershipSelector{
        margin-top: 10px;
    }

    #selectClassMemembership{
        min-width: 100px;
        min-height: 25px;
    }
</style>