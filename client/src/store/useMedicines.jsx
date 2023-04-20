import {create} from 'zustand'

const useMedicines = create((set) => ({
    medicines: [],
    setMedicines: (medicines) => set({...medicines,medicines}),
    clearMedicines: () => set({medicines: {}}),
}))

export default useMedicines