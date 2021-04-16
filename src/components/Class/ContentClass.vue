<template>
    <div id="containerContent">
         <div id="containerContentLeftBar">
             <button-main-frame title="Dodaj klasę" @click="makeAllFalse(), useAddClass = true"></button-main-frame>
             <button-main-frame title="Pokaż klasy" @click="makeAllFalse(), useShowClass = true"></button-main-frame>
        </div>   
        <add-class v-if="useAddClass === true"></add-class>
    </div>    
</template>


<script>
import buttonMainFrame from '../buttonMainFrame.vue'
import AddClass from './AddClass.vue'
export default {
  components: { buttonMainFrame, AddClass },
    
    data(){
        return{
            useAddClass: false,
            useShowClass: false
        }
    },

    methods:{
        makeAllFalse(){
            this.useAddClass = false
            this.useShowClass = false
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
        float: left;
    }
</style>