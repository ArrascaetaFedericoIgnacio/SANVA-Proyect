import {create} from 'zustand'

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
    setallergies: (allergies) => set({...allergies,allergies}),
    clearallergies: () => set({allergies: {}}),
}))

export default useAllergies