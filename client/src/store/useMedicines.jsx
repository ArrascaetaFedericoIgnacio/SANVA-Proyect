import {create} from 'zustand'

const useMedicines = create((set) => ({
    medicines: [],
    setMedicines: (medicines) => set({ medicines }),
    clearMedicines: () => set({medicines: []}),
}))

export default useMedicines