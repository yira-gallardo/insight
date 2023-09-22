function Desplegable(props: any) {
  const abrirCerrarServicio = (desplegableId: any) => {
    document?.getElementById(desplegableId)?.classList.toggle("active");
  };

  return (
    <div className="desplegable" onClick={() => abrirCerrarServicio(props.id)}>
      <div className="desplegable-izquierda">
        <div className="icon-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
          </svg>
        </div>
      </div>
      <div className="desplegable-centro">
        <div className="nombre-2">{props.titulo}</div>
      </div>
      <div className="desplegable-derecha">
        <div className="icon-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </svg>
        </div>
      </div>
      <div className="desplegable-contenido" id={props.id}>
        {props.texto}
      </div>
    </div>
  );
}

export default Desplegable;
