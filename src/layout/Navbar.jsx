import { useContextoApi } from "../context/ApiContext";
import { ThemeSwitcher } from "../components/ThemeSwitcher"; 

export const BarraNavegacion = ({ setPanelAbierto}) => {
  const { datos } = useContextoApi();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-surface-container border-b border-primary-container/15">
      <h1 className="font-bold text-xl text-primary-container">
        Sprint 4
      </h1>
      <div className="flex items-center gap-3">
        <ThemeSwitcher />
        <button
          onClick={setPanelAbierto}
          className="bg-primary-container text-on-primary px-4 py-2 font-bold uppercase tracking-wider text-sm rounded-lg cursor-pointer hover:shadow-[0_0_20px_rgba(57,255,20,0.6)] transition"
        >
          Ver
        </button>
      </div>
    </nav>
  );
};