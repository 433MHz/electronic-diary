import { createStore } from 'vuex'

export default createStore({
  state: {
    title: 'Dziennik elektroniczny',

    teachers: [],
    classes: [],
    students: [],
    subjects: []
  },

  mutations: {
    setTitle (state, payload){
      state.title = payload
    },

    setTeachers (state, payload){
      state.teachers = payload
    },

    setClasses(state, payload){
      state.classes = payload
    },

    setStudents(state,payload){
      state.students = payload
    },

    setSubjects(state, payload){
      state.subjects = payload
    }
  },

  getters: {
    getTitle: state => {return state.title},

    getTeacher: state => {return state.teachers},

    getStudents: state => {return state.students},

    getSubjects: state => {return state.subjects},

    getClasses: state => {return state.classes}
  },

  actions: {
    updateTeachers(){
      fetch('http://localhost:8081/teachers/getAll').then(res => res.json()).then(data => this.commit('setTeachers', data))
    },
    
    updateClasses(){
      fetch('http://localhost:8081/classes/getAll').then(res => res.json()).then(data => this.commit('setClasses', data))
    },

    updateStudents(){
      fetch('http://localhost:8081/students/getAll').then(res => res.json()).then(data => this.commit('setStudents', data))
    },

    updateSubjects(){
      fetch('http://localhost:8081/subjects/getAll').then(res => res.json()).then(data => this.commit('setSubjects', data))
    }
  }
})
