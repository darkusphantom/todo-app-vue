import { defineStore } from 'pinia'
import type { Task } from '../src/interface/task.model'
const state = () => {
    return {
        count: 0,
        tasks: [] as Task[]
    }
}

export const useCounterStore = defineStore('counter', {
    state,
    actions: {
        increment() {
            this.count++
        },

        /**
         * Adds a task to the list of tasks.
         *
         * @param {Task} task - The task to be added.
         */
        addTask(task: Task) {
            this.tasks.push(task)
        },

        getTasks(): Task[] {
            return this.tasks
        },

        deleteTask(index: number) {
            this.tasks.splice(index, 1);
        }
    },
})