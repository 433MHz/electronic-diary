<template>
    <div id="containerMainDiv">
    <MainFrame @switchContent="switchContent($event)"></MainFrame>
    <content-teacher v-if="target === 1"></content-teacher>
        <content-class v-if="target === 2"></content-class>
    <content-student v-if="target === 3"></content-student>
    <content-subject v-if="target === 4"></content-subject>
    {{something}}
    </div>    
</template>


<script>
import ContentClass from './Class/ContentClass.vue'
import ContentStudent from './Student/ContentStudent.vue'
import ContentTeacher from './Teacher/ContentTeacher.vue'
import MainFrame from './MainFrame.vue'
import ContentSubject from './Subjects/ContentSubject.vue'
export default {
  components: { MainFrame, ContentTeacher, ContentStudent, ContentClass, ContentSubject },

  data(){
    return{
      target: 1,
      something: ''
    }
  },

  methods:{
    switchContent(target){
      if(target === 1){
        this.target = target
      }

      else if(target === 2){
        this.target = target

      }

      else if(target === 3){
        this.target = target
      }

      else if(target === 4){
        this.target = target
      }
    }
  },

  mounted(){
    this.something = this.$store.state.flavor
  }
}
</script>



<style>
  #containerMainDiv{
    width: 100%;
    height: 1000px
  }

  select{
    min-width: 100px;
    min-height: 25px;
  }
</style>