const FiltroEstado = ({ filtroEstado, setFiltroEstado, searchTerm, setSearchTerm }) => (
  <div className="flex justify-between mb-6">
    {/* Filtro por estado */}
    <div className="w-1/2 pr-2">
      <label className="block text-gray-700 font-semibold">Filtrar por estado</label>
      <select
        value={filtroEstado}
        onChange={(e) => setFiltroEstado(e.target.value)}
        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-bg-[#dda15e] "
      >
        <option value="">Todas</option>
        <option value="aceptadas">Aceptadas</option>
        <option value="pendientes">Pendientes</option>
        <option value="rechazadas">Rechazadas</option>
      </select>
    </div>  
  </div>  
);

export default FiltroEstado;
