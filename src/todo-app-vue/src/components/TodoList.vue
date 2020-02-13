<template>
  <div>
    <p class="tasks">Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p class="tasks">Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <TodoItem v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="todo in todos" :todo.sync="todo"></TodoItem>
  </div>
</template>

<script type = "text/javascript" >
import sweetalert from 'sweetalert';
import TodoItem from './TodoItem.vue';
export default {
  props: ['todos'],
  components: {
    TodoItem,
  },
  methods: {
    deleteTodo(todo) {
      sweetalert({
        title: 'Are you sure?',
        text: 'This To-Do will be permanently deleted!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!',
        closeOnConfirm: false,
      },
      () => {
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex, 1);
        dispatchEvent(new CustomEvent('todo:delete', {
            detail: {
              title: todo.title,
            }
        }));
        sweetalert('Deleted!', 'Your To-Do has been deleted.', 'success');
      });
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true;
      dispatchEvent(new CustomEvent('todo:complete', {
            detail: {
              title: todo.title,
            }
        }));
      sweetalert('Success!', 'To-Do completed!', 'success');
    },
  },
};
</script>

<style scoped>
p.tasks {
  text-align: center;
}
</style>
