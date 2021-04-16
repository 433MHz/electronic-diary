<template>
    <div id="main">
        <button id="buttonEdit" v-on:click="sendClick()">{{title}}</button>
    </div>
</template>


<script>
export default {
    props:['title'],

    methods:{
        sendClick(){
            this.$emit('click')
        }
    }
}
</script>


<style>
    #main{
        min-width: 100px;
        min-height: 50px;
        float: left;
        text-align: center;
    }

    #buttonEdit{
        min-width: 95px;
        min-height: 30px;
        font-size: 15px;
        margin-top: 18px;
        margin-left: 5px;
    }

    #buttonEdit:hover{
        cursor: pointer;
    }

</style>