import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '../store/task';

describe('Store Task', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('Add tasks', () => {
        const store = useCounterStore()
        expect(store.tasks.length).toBe(0)
        store.addTask({ text: 'test', done: false })
        expect(store.tasks.length).toBe(1)
    })

    it('Remove task', () => {
        const store = useCounterStore()
        expect(store.tasks.length).toBe(0)
        store.addTask({ text: 'test', done: false })
        expect(store.tasks.length).toBe(1)
        if(store.tasks.length > 0) {
            store.deleteTask(0)
        }
        expect(store.tasks.length).toBe(0)
    })
});