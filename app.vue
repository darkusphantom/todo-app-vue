<template>
  <div class="container">
    <h1>Todo App</h1>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="newTodo" placeholder="Enter a new task" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

interface Todo {
  text: string;
  done: boolean;
}

export default defineComponent({
  name: "TodoApp",
  setup() {
    const store = useStore();
    const newTodo = ref("");
    const todos = ref<Todo[]>([]);

    const addTodo = () => {
      if (newTodo.value.trim()) {
        todos.value.push({ text: newTodo.value, done: false });
        newTodo.value = "";
        store.commit("increment");
      }
    };

    const removeTodo = (index: number) => {
      todos.value.splice(index, 1);
      // store.commit("decrement");
    };

    return {
      newTodo,
      todos,
      addTodo,
      removeTodo,
    };
  },
});
</script>

<style lang="scss">
.container {
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
}

form {
  display: flex;
  margin-bottom: 20px;
}

input[type="text"] {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  margin-left: 10px;
  padding: 10px;
  background-color: #0099ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

input[type="checkbox"] {
  margin-right: 10px;
}

span {
  flex: 1;
}

span.done {
  text-decoration: line-through;
  color: #999;
}

button {
  margin-left: 10px;
  padding: 5px;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>