<template>
<div id="LeftMenuBar"><LeftMenuBar :buttons="buttons" @buttonClick="buttonEvent = $event"></LeftMenuBar></div>
<div id="Content">
    <h1>Dodaj przedmiot</h1>
        <input type="text" placeholder="nazwa przedmiotu"><br>
        <div id="containerForSubjectMasterTeacherSelector">

            <div>
                <label for="subjectMasterTeacherSelector">Nauczyciel prowadzący: </label>
                <select id="subjectMasterTeacherSelector">
                    <option value="">Adam</option>
                </select><br>
            </div>
            
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
            buttons:[{buttonName: 'Dodaj przedmiot', buttonEvent: 1},
            {buttonName: 'Pokaż przedmioty', buttonEvent: 2}],
            buttonEvent: ''
        }
    },

    mounted(){
        this.$store.commit("setTitle", "Przedmioty")
    },

    methods:{

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
</style>