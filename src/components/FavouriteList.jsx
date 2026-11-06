export const ListarFavoritos = ({ favorito, vaciarLista }) => {
  return (
    <>
      <h3 className="px-4 py-3 text-primary-container border-b border-primary-container/15">
        Favoritos
      </h3>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {favorito.map((fav) => (
          <div
            key={fav.id}
            className="flex items-center gap-3 p-2 bg-surface-container border border-primary-container/15 rounded-lg"
          >
            <img
              src={fav.image}
              alt={fav.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <p className="text-on-surface">{fav.name}</p>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-primary-container/15">
        <button
          onClick={vaciarLista}
          className="w-full px-4 py-2 font-bold rounded-lg bg-error-container/20 border border-error text-error hover:bg-error-container/40 transition cursor-pointer"
        >
          Vaciar Lista
        </button>
      </div>
    </>
  );
};
