import { create } from 'zustand'

const useAllergiesStore = create((set) => ({
//tiene que tener un store que contenga diferentes objetos de este tipo 
// {
//     nombre: "nombre",
//     vacuna: "Vacuna",
//     inventario: "Inventario",
//     nextVacuna: "Proxima vacuna",
//   },
    ListaAlergia: [],
    setListaAlergia: (ListaAlergia) => set({ ListaAlergia }),
}))

export default useAllergiesStore
