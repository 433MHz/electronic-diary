<template>
    <div id="AddStudentContainer">
        <h1>Dodaj przedmiot</h1>
        <input type="text" placeholder="nazwa przedmiotu"><br>
        <div id="containerForSubjectMasterTeacherSelector">
            <label for="subjectMasterTeacherSelector">Nauczyciel prowadzący: </label>
            <select id="subjectMasterTeacherSelector">
                <option value="">Adam</option>
            </select><br>

            <label for="checkboxForMoreThanOneTeacher">Więcej niż jeden nauczyciel? </label> 
            <input type="checkbox" name="" id="checkboxForMoreThanOneTeacher">
            
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
    #AddStudentContainer input{
        margin-top: 10px;
    }

    #containerForSubjectMasterTeacherSelector{
        margin-top: 10px;
    }
</style>