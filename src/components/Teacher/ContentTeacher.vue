<template>
    <div id="containerContent">
         <div id="containerContentLeftBar">
             <button-main-frame title="Dodaj nauczyciela" @click="makeEverythingFalse(), showAddTeacher = true"></button-main-frame>
             <button-main-frame title="Pokaż nauczycieli" @click="makeEverythingFalse()"></button-main-frame>
        </div>   
        <div style="float:left">
        <add-teacher v-if="showAddTeacher"></add-teacher>
        </div>
    </div>    
</template>


<script>
import buttonMainFrame from '../buttonMainFrame.vue'
import AddTeacher from './AddTeacher.vue'
export default {
  components: { buttonMainFrame, AddTeacher },

  data(){
      return{
          showAddTeacher: false
      }
  },

  methods:{
      makeEverythingFalse(){
          this.showAddTeacher = false;
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
        margin-right: 50px;
        float: left;
    }
</style>