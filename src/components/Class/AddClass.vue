<template>
    <div id="AddClassContainer">
        <h1>Dodaj klasę</h1>
        <input type="text" placeholder="nazwa klasy"><br>
        <div id="containerForSelect">
            <label for="selectClassMaster">Wybierz wychowawcę klasy: </label><br>
            <select name="selectClassMaster" id="selectClassMaster">
                <option value="Adam">Adam2</option>
                <option value="Andrzej">Andrzej2</option>
            </select>
        </div><br>
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

    #selectClassMaster{
        min-width: 100px;
        min-height: 25px;
    }

    #containerForSelect{
        margin-top: 10px;
    }
</style>