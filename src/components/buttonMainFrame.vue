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
        width: 100px;
        height: 50px;
        float: left;
        text-align: center;
    }

    #buttonEdit{
        width: 95px;
        height: 30px;
        font-size: 15px;
        margin-top: 18px;
    }

    #buttonEdit:hover{
        cursor: pointer;
    }

</style>