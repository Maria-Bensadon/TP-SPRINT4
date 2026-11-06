export const BarraBusqueda = ({ busqueda, setBusqueda }) => {
  return (
    <div className="w-full px-4 py-3 bg-surface-container-low">
      <input
        id="buscador"
        type="text"
        placeholder="Buscar personaje por nombre"
        className="w-full px-4 py-2 bg-surface-container text-on-surface border border-primary-container/15 rounded-lg outline-none placeholder:text-on-surface-variant placeholder:opacity-60 focus:border-portal-cyan focus:shadow-[0_0_8px_rgba(0,181,204,0.4)] transition"
        value={busqueda}
        onChange={(evento) => {
          setBusqueda(evento.target.value);
        }}
      />
    </div>
  );
};