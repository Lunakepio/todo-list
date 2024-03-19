import { create } from "zustand";

export const useStore = create((set) => ({
  todos: [],
  inProgress: [],
  done: [],
  dragTarget: null,
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (index) =>
    set((state) => ({
      todos: state.todos.filter((_, i) => i !== index),
    })),
  addInProgress: (todo) =>
    set((state) => ({ inProgress: [...state.inProgress, todo] })),
  removeInProgress: (index) =>
    set((state) => ({
      inProgress: state.inProgress.filter((_, i) => i !== index),
    })),
  addDone: (todo) => set((state) => ({ done: [...state.done, todo] })),
  removeDone: (index) =>
    set((state) => ({
      done: state.done.filter((_, i) => i !== index),
    })),
  setDragTarget: (target) => set({ dragTarget: target }),
}));
