<template>
    <div id="containerContent">
         <div id="containerContentLeftBar">
             <button-main-frame title="Dodaj przedmiot" @click="makeAllFalse(), useAddSubject = true"></button-main-frame>
             <button-main-frame title="Pokaż przedmioty" @click="makeAllFalse(), useShowSubjects = true"></button-main-frame>
        </div>   
        <add-subject v-if="useAddSubject === true"></add-subject>
    </div>    
</template>


<script>
import buttonMainFrame from '../buttonMainFrame.vue'
import AddSubject from './AddSubject.vue'
export default {
  components: { buttonMainFrame, AddSubject },

    data(){
        return{
            useAddSubject: false,
            useShowSubjects: false
        }
    },

    methods:{
        makeAllFalse(){
            this.useAddSubject = false,
            this.useShowSubjects = false
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