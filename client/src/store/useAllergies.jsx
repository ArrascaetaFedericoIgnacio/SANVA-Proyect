import { create } from 'zustand'

const useAllergies = create((set) => ({
  allergies: [],
  setAllergies: (allergies) => set({ allergies }),
  clearAllergies: () => set({ allergies: [] }),
}))

export default useAllergies
