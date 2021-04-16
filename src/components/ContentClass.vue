<template>
    <div id="containerContent">
         <div id="containerContentLeftBar">
             <button-main-frame title="Dodaj klasę"></button-main-frame>
             <button-main-frame title="Pokaż klasy"></button-main-frame>
        </div>   
    </div>    
</template>


<script>
import buttonMainFrame from './buttonMainFrame.vue'
export default {
  components: { buttonMainFrame },
    
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