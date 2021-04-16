<template>
    <div id="containerContent">
         <div id="containerContentLeftBar">
             <button-main-frame title="Dodaj ucznia" @click="makeAllFalse(), useAddStudent = true"></button-main-frame>
             <button-main-frame title="Pokaż uczniów" @click="makeAllFalse(), useShowStudents = true"></button-main-frame>
        </div>   
        <add-student v-if="useAddStudent === true"></add-student>
    </div>    
</template>


<script>
import buttonMainFrame from '../buttonMainFrame.vue'
import AddStudent from './AddStudent.vue'
export default {
  components: { buttonMainFrame, AddStudent },

    data(){
        return{
            useAddStudent: false,
            useShowStudents: false
        }
    },

    methods:{
        makeAllFalse(){
            this.useAddStudent = false,
            this.useShowStudents = false
        }
    }
}
</script>



<style>
    #containerContent{
        min-width: 100%;
        min-height: 100%;
        margin: 50px;
    }

    #containerContentLeftBar{
        min-width: 170px;
        width: 170px;
        min-height: 500px;
        background-color: rgb(224, 224, 224);
        border: gray solid 3px;
        border-radius: 25px;
        padding-left: 20px;
    }
</style>