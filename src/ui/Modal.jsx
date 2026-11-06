export const Modal = ({ setPanelAbierto, children }) => {
  return (
    // contenedor
    <section className="fixed inset-0 z-30 bg-surface-container-lowest/70 backdrop-blur-sm" aria-label="Cerrar" onClick={setPanelAbierto}>
      {/* segundo contenedor */}
      <div
        className="fixed top-16 right-0 h-[calc(100vh-4rem)] w-full sm:w-96 bg-surface-container-high border-l border-portal-cyan/25 
            flex flex-col z-40 shadow-modal"
        onClick={(clickPanel) => clickPanel.stopPropagation()}
      >
        {children}
      </div>
      
    </section>
  );
};
