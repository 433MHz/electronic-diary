<template>
<div id="LeftMenuBar"><LeftMenuBar :buttons="buttons" @buttonClick="buttonEvent = $event"></LeftMenuBar></div>
<div class="Content">
    <h1>Dodaj klasę</h1>
        <input type="text" placeholder="nazwa klasy" v-model="ClassName"><br>
        <div id="containerForSelect">
            <label for="selectClassMaster">Wybierz wychowawcę klasy: </label><br>
            <select name="selectClassMaster" id="selectClassMaster">
                <option :value="teacher.teacherID" v-for="teacher in teachers" :key="teacher.teacherID">{{teacher.teacherID}} {{teacher.firstName}} {{teacher.lastName}}</option>
            </select>
        </div><br>
        <button>Dodaj</button>
</div>
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
    },

    computed:{
        teachers: function(){
            return this.$store.getters.getTeacher
        }
    }

}
</script>

<style scoped>
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