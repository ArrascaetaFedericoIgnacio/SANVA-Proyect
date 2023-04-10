

const Diseases = () => {
  return (
    <div className="max-w-360 mx-auto">
      <h2 className="text-center text-2xl font-bold mt-20">Enfermedades</h2>
      <div>
        <p className="text-center text-sm mt-5">
            Enfermedades
        </p>

      </div>
      <div className="flex justify-between mt-20 mb-10">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold border-none">
          Ver Enfermedades
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold border-none">
          Agregar Enfermedad
        </button>
      </div>
   
        <div className="flex justify-between items-center mt-5">
            <p className="font-bold text-lg my-0 w-3/5">Agregar</p>
        </div>
      <div className="bg-gray-200 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg my-0 w-3/5">Diabetes</p>
          <p className="text-right text-sm my-0 w-2/5">Dr. Juan Pérez</p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p className="font-bold text-lg my-0 w-3/5">Hipertensión</p>
          <p className="text-right text-sm my-0 w-2/5">Dr. Marta García</p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p className="font-bold text-lg my-0 w-3/5">Asma</p>
          <p className="text-right text-sm my-0 w-2/5">Dr. Ana Flores</p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p className="font-bold text-lg my-0 w-3/5">Artritis</p>
          <p className="text-right text-sm my-0 w-2/5">Dr. Luis González</p>
        </div>
      </div>
    </div>
  );
};

export default Diseases;