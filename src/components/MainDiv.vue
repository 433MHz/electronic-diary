<template>
    <div id="containerMainDiv">
    <MainFrame @switchContent="switchContent($event)"></MainFrame>
    <content-teacher v-if="useTeacher"></content-teacher>
    <content-student v-if="useStudent"></content-student>
    <content-class v-if="useClass"></content-class>
    </div>    
</template>


<script>
import ContentClass from './ContentClass.vue'
import ContentStudent from './ContentStudent.vue'
import ContentTeacher from './ContentTeacher.vue'
import MainFrame from './MainFrame.vue'
export default {
  components: { MainFrame, ContentTeacher, ContentStudent, ContentClass },

  data(){
    return{
      useTeacher: false,
      useStudent: false,
      useClass: false
    }
  },

  methods:{
    switchContent(target){
      if(target === 'teachers'){
        this.useTeacher = true
        this.useStudent = false
        this.useClass = false
      }

      else if(target === 'classes'){
        this.useTeacher = false
        this.useStudent = false
        this.useClass = true
      }

      else if(target === 'students'){
        this.useTeacher = false
        this.useStudent = true
        this.useClass = false
      }
    }
  }
}
</script>



<style>
  #containerMainDiv{
    width: 100%;
    height: 1000px
  }
</style>