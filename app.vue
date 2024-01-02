<template>
  <div class="container">
    <h1 class="title">Todo App</h1>
    <section class="container-add-task">
      <!-- <p class="task-count">Total de tareas: {{ todos.length }}</p> -->
      <form class="task-form" @submit.prevent="addTodo">
        <input class="task-input" type="text" v-model="newTodo" placeholder="Enter a new task" />
        <button id="add-todo" class="btn-add" type="submit">+</button>
      </form>
    </section>
    <ul class="task-list" v-if="todos.length">
      <li id="task" class="container-task" v-for="(todo, index) in todos" :key="index">
        <div class="checkbox-container">
          <input class="task-checkbox" type="checkbox" v-model="todo.done" />
          <div class="checkbox-marker"></div>
        </div>
        <span class="task-name" :class="{ done: todo.done }">{{ todo.text }}</span>
        <button class="btn-delete" @click="removeTodo(index)">X</button>
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
        // store.commit("increment");
        // console.log(store.state.count);
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
:root {
  --page-background: hsl(236, 33%, 92%);
  --container-task-background: hsl(0, 0%, 98%);
  --mark-checkbox-background: linear-gradient(#57ddff, #c058f3);
  --mark-color-text: hsl(236, 9%, 61%);
  --color-text: hsl(235, 19%, 35%);
  --color-text-alternative: hsl(0, 0%, 98%);
  --normal-text-size: 1.2rem;
}

html {
  background: var(--page-background);
  margin: 0;
}

body {
  background: url('./assets/bg-mobile-light.jpg') no-repeat;
  background-size: contain;
  height: 100vh;
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
}

button {
  padding: 5px;
  color: var(--color-text);
  background: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.5rem;
}


.container {
  max-width: 600px;
  margin: 0 auto;
  padding: calc(100% - 75vw) 0 2rem;
  font-family: Arial, sans-serif;
}

.container-add-task {
  margin-bottom: 20px;
}

.title {
  margin: 0 0 2rem;
  text-align: center;
  color: var(--color-text-alternative);
  text-transform: uppercase;
  letter-spacing: 6px;
}

.container-task {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 1.5rem;
  margin-bottom: 10px;
  border-bottom: 1px solid #000;
}

.container-task:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.task-list {
  width: 90%;
  margin: 0 auto 0 auto;
  border-radius: 5px;
  background: var(--container-task-background);
}

.task-form {
  display: flex;
  margin-bottom: 20px;
  position: relative;
  width: 90%;
  margin: 0 auto;
}

.task-input {
  flex: 1;
  padding: 1.3rem;
  font-size: var(--normal-text-size);
  border-radius: 5px;
  border: none;
}

.btn-add {
  position: absolute;
  right: -1px;
  width: 60px;
  height: 100%;
  border-radius: 0 5px 5px 0;
  background: var(--mark-checkbox-background);
  color: var(--color-text-alternative);
  font-weight: 700;
}

.task-name {
  flex: 1;
  font-size: var(--normal-text-size);
  color: var(--color-text);
}

.task-name.done {
  text-decoration: line-through;
  color: #999;
}

.task-count {
  margin-bottom: 12px;
  font-size: .9rem;
  text-align: center;
}

/* Estilos para el contenedor del checkbox */
.checkbox-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Estilos para el checkbox oculto */
.task-checkbox {
  position: absolute;
  opacity: 0;
  margin: 0;
}

/* Estilos para el marcador del checkbox */
.checkbox-marker {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--mark-color-text);
  background-color: #fff;
  cursor: pointer;
}

/* Estilos para el marcador cuando el checkbox está seleccionado */
.task-checkbox:checked+.checkbox-marker {
  background: var(--mark-checkbox-background);
  border: none;
  width: 24px;
  height: 24px;
}

.task-checkbox:checked+.checkbox-marker::after {
  content: '✓';
  color: var(--color-text-alternative);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 700;
}
</style>