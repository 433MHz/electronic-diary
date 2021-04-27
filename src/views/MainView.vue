<template>
    <div id="topDiv">
        <div style="height:50px"></div>
        <div id="titleDiv">{{$store.getters.getTitle}}</div>
        <div style="display:inline; float:left">
        <router-link :to="{name: 'Teachers'}"><button>Nauczyciele</button></router-link>
        <router-link :to="{name: 'Classes'}"><button>Klasy</button></router-link>
        <router-link :to="{name: 'Students'}"><button>Uczniowie</button></router-link>
        <router-link :to="{name: 'Subjects'}"><button>Przedmioty</button></router-link>
        </div>
    </div>
    <div id="bottomDiv">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
   mounted(){
       this.$store.dispatch('updateTeachers')
   }
}
</script>

<style scoped>
    #topDiv{
        border-bottom: grey solid 3px;
        width: 100%;
        height: 100px
    }

    #titleDiv{
        width: 300px;
        height: 50px;
        border: grey solid 2px;
        border-bottom: none;
        background-color: rgba(128, 128, 128, 0.192);
        border-top-right-radius: 10px;
        margin-bottom: 0px;
        font-size: 40px;
        font-weight: 400;
        margin-right: 5px;
        float: left;
    }

    button{
        width: 100px;
        height: 35px;
        margin: 5px;
        margin-top: 10px;

    }

    #bottomDiv{
        float: left;
        margin: 50px;
    }
</style>