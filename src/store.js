import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCounterStore = create(
  persist(
    (set, get) => ({
      count: 0, // Initial state
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
    }),
    {
      name: 'counter-storage', // Key to store data in localStorage
    }
  )
);

export default useCounterStore;
