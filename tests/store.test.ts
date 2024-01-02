import { describe, it, expect } from 'vitest';
import { mutations } from '../store/store'

const { increment } = mutations

describe('Store', () => {
    it("Verifica si incrementa las tareas", () => {
        // mock state
        const state = { count: 0 }
        // apply mutation
        increment(state)
        // assert result
        expect(state.count).to.equal(1)
    })
});