<template>
    <div id="menu">
        <div v-for="button in buttons" :key="button">
            <button @click="ReturnButtonEvent(button.buttonEvent)">{{button.buttonName}}</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            }
    },

    props:['buttons'],

    methods:{
        ReturnButtonEvent(buttonEvent){
            this.$emit('buttonClick', buttonEvent)
            console.log(buttonEvent)
        }
    }
}
</script>

<style scoped>
    #menu{
        min-width: 150px;
        min-height: 400px;
        background-color: rgba(128, 128, 128, 0.192);
        border-radius: 15px;
        border: grey solid 3px;
    }

    button{
        min-width: 130px;
        min-height: 30px;
        margin: 5px;
    }

    
</style>