<template>
<div id="LeftMenuBar"><LeftMenuBar :buttons="buttons" @buttonClick="buttonEvent = $event"></LeftMenuBar></div>
<div class="Content" v-if="buttonEvent === 1">
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

<div class="Content" v-if="buttonEvent === 2">
    <h1>Pokaż klasy</h1>
    <div v-for="classroom in classes" :key="classroom.classID">
        <div class="classesShow">
            <h3>{{classroom.className}}</h3>
            ID: {{classroom.classID}}
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
            buttons:[{buttonName: 'Dodaj klasę', buttonEvent: 1},
            {buttonName: 'Pokaż klasy', buttonEvent: 2}],
            buttonEvent: 1,
            ClassName: ''
        }
    },

    mounted(){
        this.$store.commit("setTitle", "Klasy")
    },

    computed:{
        teachers: function(){
            return this.$store.getters.getTeacher
        },

        classes: function(){
            return this.$store.getters.getClasses
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

    .classesShow{
        background-color: rgba(21, 252, 0, 0.342);
        width: 200px;
        height: 100px;
        padding: 20px;
        margin: 20px;
        float: left;
        border-radius: 20px;
        border: rgb(21, 252, 0) solid 2px;
    }

    .classesShow:hover{
        cursor: pointer;
        background-color: rgba(21, 252, 0, 0.596);
    }
</style>