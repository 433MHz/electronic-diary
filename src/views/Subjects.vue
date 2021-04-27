<template>
<div id="LeftMenuBar"><LeftMenuBar :buttons="buttons" @buttonClick="buttonEvent = $event"></LeftMenuBar></div>
<div class="Content" v-if="buttonEvent === 1">
    <h1>Dodaj przedmiot</h1>
        <input type="text" placeholder="nazwa przedmiotu"><br>
        <div id="containerForSubjectMasterTeacherSelector">

            <div>
                <label for="subjectMasterTeacherSelector">Nauczyciel prowadzący: </label><br>
                <select id="subjectMasterTeacherSelector">
                    <option v-for="teacher in teachers" :key="teacher.teacherID" :value="teacher.teacherID">
                        {{teacher.teacherID}}. {{teacher.firstName}} {{teacher.lastName}}</option>
                </select><br>
            </div>
            
        </div><br>
        
        <button>Dodaj</button>
</div>

<div class="Content" v-if="buttonEvent === 2"> 
    <h1>Pokaż przedmioty</h1>
    <div v-for="subject in subjects" :key="subject.subjectID">
        <div class="subjectShow">
            <h3>{{subject.subjectName}}</h3>
            ID: {{subject.subjectID}}
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
            buttons:[{buttonName: 'Dodaj przedmiot', buttonEvent: 1},
            {buttonName: 'Pokaż przedmioty', buttonEvent: 2}],
            buttonEvent: 1
        }
    },

    mounted(){
        this.$store.commit("setTitle", "Przedmioty")
    },

    computed:{
        teachers: function(){
            return this.$store.getters.getTeacher
        },

        subjects: function(){
            return this.$store.getters.getSubjects
        }
    }

}
</script>

<style scoped>

    #AddStudentContainer input{
        margin-top: 10px;
    }

    #containerForSubjectMasterTeacherSelector{
        margin-top: 10px;
    }

    #checkboxForMoreThanOneTeacher{
        width: 20px;
        height: 20px;
    }

     .subjectShow{
        background-color: rgb(100, 149, 237, 0.342);
        width: 200px;
        height: 100px;
        padding: 20px;
        margin: 20px;
        float: left;
        border-radius: 20px;
        border: rgb(100, 149, 237) solid 2px;
    }

    .subjectShow:hover{
        cursor: pointer;
        background-color: rgba(100, 149, 237, 0.596);
    }
</style>