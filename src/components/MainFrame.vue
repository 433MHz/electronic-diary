<template>
    <div>
        <div id="mainTopBar">
            <div id="top"></div>
            <div id="bottom">
                <div id="titleBar"><div id="titleBar-inside">{{title}}</div></div>
                <buttonMainFrame title="Nauczyciele" @click="showTeachers()"></buttonMainFrame>
                <buttonMainFrame title="Klasy" @click="showClasses()"></buttonMainFrame>
                <buttonMainFrame title="Uczniowie" @click="showStudents()"></buttonMainFrame>
                <buttonMainFrame title="Przedmioty" @click="showSubjects()"></buttonMainFrame>
                <div style="clear: both;"></div>
            </div>
        </div>
    </div>
</template>


<script>
import buttonMainFrame from './buttonMainFrame.vue'
export default {
  components: { buttonMainFrame },
    data(){
        return{
            title: 'title'
        }
    },

    methods:{
        showTeachers(){
            this.title = "Nauczyciele"
            this.$emit('switchContent', 1)
        },

        showClasses(){
            this.title = "Klasy"
            this.$emit('switchContent', 2)
        },

        showStudents(){
            this.title = "Uczniowie"
            this.$emit('switchContent', 3)
        },

        showSubjects(){
            this.title = "Przedmioty"
            this.$emit('switchContent', 4)
        }
    }
}
</script>


<style>
    #mainTopBar{
        width: 100%;
        height: 100px;
        border-bottom: solid 3px gray;
    }

    #top{
        height: 50px;
        width: 100%;
    }

    #bottom{
        height: 50px;
        width: 100%;
    }

    #titleBar{
        background-color: rgb(233, 233, 233);
        width: 300px;
        height: 48px;
        border: gray solid 2px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        float: left;
    }

    #titleBar-inside{
        padding-left: 20px;
        padding-top: 5px;
        font-size: 30px;
    }
</style>