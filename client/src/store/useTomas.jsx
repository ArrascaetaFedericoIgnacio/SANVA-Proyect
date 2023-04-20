import {create} from 'zustand'

const useTomas = create((set) => ({
    tomas: [],
    setTomas: (tomas) => set({...tomas, tomas}),
    clearTomas: () => set({tomas: []}),
}))

export default useTomas