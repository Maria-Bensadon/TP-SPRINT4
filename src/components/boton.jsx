import { useContextoApi } from "../context/ApiContext";

export const Btn = ({ url }) => {

  const contexto = useContextoApi(); // se pide todo

  const unClick = () => {
    console.log("si");
    //console.table(datosAPI);
    console.log(contexto);
    
  };
  return (
    <>
      <button onClick={unClick}>haz click</button>
    </>
  );
};
