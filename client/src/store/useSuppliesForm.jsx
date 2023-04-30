import {create} from 'zustand'

const useSupplies = create((set) => ({
    supplies: [],
    setSupplies: (supplies) => set({...supplies, supplies}),
    clearSupplies: () => set({supplies: []}),
}))

export default useSupplies