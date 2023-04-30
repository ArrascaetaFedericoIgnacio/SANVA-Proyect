import {create} from 'zustand'

const useDiseases = create((set) => ({
    diseases: [],
    setDiseases: (diseases) => set({...diseases,diseases}),
    clearDiseases: () => set({diseases: {}}),
}))

export default useDiseases