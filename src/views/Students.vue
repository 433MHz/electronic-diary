<template>
<div id="LeftMenuBar"><LeftMenuBar :buttons="buttons" @buttonClick="buttonEvent = $event"></LeftMenuBar></div>
<div class="Content" v-if="buttonEvent === 1">
    <h1>Dodaj ucznia</h1>
        <input type="text" placeholder="imie"><br>
        <input type="text" placeholder="nazwisko"><br>
        <input type="number" placeholder="numer telefonu" id="phoneNumberInput"><br>

        <div id="containerForClassMemembershipSelector">
        <label for="selectClassMemembership">Wybierz klasę: </label>
        <select name="" id="selectClassMemembership">
            <option :value="classroom.classID" v-for="classroom in classes" :key="classroom.classID">
                {{classroom.classID}} {{classroom.className}}</option>
        </select>
        </div><br>
        <button>Dodaj</button>
</div>

<div class="Content" v-if="buttonEvent === 2">
    <h1>Pokaż uczniów</h1>
    <div v-for="student in students" :key="student.studentID">
        <div class="studentShow">
            <h3>{{student.firstName}}  {{student.lastName}}</h3>
            ID: {{student.studentID}}
        </div>
    </div>
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
            buttonEvent: 1
        }
    },

    mounted(){
        this.$store.commit("setTitle", "Uczniowie")
    },

    computed:{
        classes: function(){
            return this.$store.getters.getClasses
        },

        students: function(){
            return this.$store.getters.getStudents
        }
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

    .studentShow{
        background-color: rgba(38, 0, 255, 0.342);
        width: 200px;
        height: 100px;
        padding: 20px;
        margin: 20px;
        float: left;
        border-radius: 20px;
        border: rgb(38, 0, 255) solid 2px;
    }

    .studentShow:hover{
        cursor: pointer;
        background-color: rgba(38, 0, 255, 0.596);
    }
</style>