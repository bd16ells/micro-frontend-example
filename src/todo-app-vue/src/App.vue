<template>
  <div id="app">
    <h1 class="ui dividing centered header">Vue.js Todo App</h1>
    <div class='ui'>
      <div class='column'>
        <TodoList v-bind:todos="todos"/>
        <create-todo v-on:create-todo="createTodo"></create-todo>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import CreateTodo from './components/CreateTodo.vue';
import sweetalert from "sweetalert";
export default {
  name: 'App',
  components: {
    TodoList,
    CreateTodo
  },
  data() {
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false,
      },
       {
        title: 'Todo B',
        project: 'Project B',
        done: true,
      },
       {
        title: 'Todo C',
        project: 'Project C',
        done: false,
      },
       {
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }],
    };
  },
   methods: {
    createTodo(newTodo) {
      debugger
      this.todos.push(newTodo);
      sweetalert('Success!', 'To-Do created!', 'success');
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
