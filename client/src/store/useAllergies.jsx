import { create } from 'zustand'

const useAllergies = create((set) => ({
  allergies: [
    {
      nombre: "nombre",
      vacuna: "Vacuna",
      inventario: "Inventario",
      nextVacuna: "Proxima vacuna",
    },
    {
      nombre: "nombre",
      vacuna: "Vacuna",
      inventario: "Inventario",
      nextVacuna: "Proxima vacuna",
    },
    {
      nombre: "nombre",
      vacuna: "Vacuna",
      inventario: "Inventario",
      nextVacuna: "Proxima vacuna",
    },
    {
      nombre: "nombre",
      vacuna: "Vacuna",
      inventario: "Inventario",
      nextVacuna: "Proxima vacuna",
    },
    {
      nombre: "nombre",
      vacuna: "Vacuna",
      inventario: "Inventario",
      nextVacuna: "Proxima vacuna",
    },
  ],
  setAllergies: (allergies) => set({ allergies }),
  clearAllergies: () => set({ allergies: [] }),
}))

export default useAllergies
