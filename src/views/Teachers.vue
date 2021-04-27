<template>
<div id="LeftMenuBar"><LeftMenuBar :buttons="buttons" @buttonClick="buttonEvent = $event"></LeftMenuBar></div>
<div class="Content" v-if="buttonEvent === 1"> 
    <h1>Dodaj nauczyciela</h1>
        <input type="text" placeholder="Imie" v-model="teacher.firstName"><br>
        <input type="text" placeholder="Nazwisko" v-model="teacher.lastName"><br>
        <button @click="saveTeacher">Dodaj</button>
</div>

<div class="Content" v-if="buttonEvent === 2"> 
    <h1>Pokaż nauczycieli</h1>
    <div v-for="teacher in teachers" :key="teacher.teacherID">
        <div class="teacherShow">
            <h3>{{teacher.firstName}}  {{teacher.lastName}}</h3>
            ID: {{teacher.teacherID}}
        </div>
    </div>
</div>
</template>

<script>
import LeftMenuBar from '../components/LeftMenuBar.vue'
export default {
    components:{LeftMenuBar},

    data(){
        return{
            buttons:[{buttonName: 'Dodaj nauczyciela', buttonEvent: 1},
            {buttonName: 'Pokaż nauczycieli', buttonEvent: 2}],
            buttonEvent: 1,
            teacher: {firstName: 'dg', lastName: 'dd'}
        }
    },

    mounted(){
        this.$store.commit("setTitle", "Nauczyciele")
    },

    computed:{
        teachers: function(){
            this.$store.dispatch('updateTeachers')
            return this.$store.getters.getTeacher
        }
    },

    methods:{
        saveTeacher(){
            fetch('http://localhost:8081/teachers/add',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.teacher)})
            .then(response => response.json())
            .catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>
    .teacherShow{
        background-color: rgba(255, 68, 0, 0.342);
        width: 200px;
        height: 100px;
        padding: 20px;
        margin: 20px;
        float: left;
    }
</style>