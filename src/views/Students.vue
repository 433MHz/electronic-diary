<template>
<div id="LeftMenuBar"><LeftMenuBar :buttons="buttons" @buttonClick="buttonEvent = $event"></LeftMenuBar></div>
<div id="Content">
    <h1>Dodaj ucznia</h1>
        <input type="text" placeholder="imie" v-model="studentFirstname"><br>
        <input type="text" placeholder="nazwisko" v-model="studentLastname"><br>
        <input type="number" placeholder="numer telefonu" id="phoneNumberInput" v-model="studentPhonenumber"><br>
        <div id="containerForClassMemembershipSelector">
        <label for="selectClassMemembership">Wybierz klasę: </label>
        <select name="" id="selectClassMemembership" v-model="classMemembership">
            <option value="1C">1C</option>
            <option value="1B">1B</option>
            <option value="2A">2A</option>
        </select>
        </div><br>
        <button-main-frame title="Dodaj" @click="readInputs"></button-main-frame>
</div>
</template>

<script>
import LeftMenuBar from '../components/LeftMenuBar.vue'
export default {
    components:{LeftMenuBar},

    data(){
        return{
            buttons:[{buttonName: 'Dodaj ucznia', buttonEvent: 1},
            {buttonName: 'Pokaż uczniów', buttonEvent: 2}],
            buttonEvent: ''
        }
    },

    mounted(){
        this.$store.commit("setTitle", "Uczniowie")
    }

}
</script>

<style scoped>
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