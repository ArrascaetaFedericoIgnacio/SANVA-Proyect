import { create } from 'zustand'

const useAllergies = create((set) => ({
  allergies: [],
  setAllergies: (allergies) => set({...allergies, allergies }),
  clearAllergies: () => set({ allergies: [] }),
}))

export default useAllergies
