export const Card = ({ name, number, photo, onEdit, onDelete }) => {
  return (
    <div
      className="card mb-3 shadow-sm"
      style={{ maxWidth: "720px", margin: "auto", borderRadius: "0.75rem" }}
    >
      <div className="row g-0 align-items-center">
        {/* Foto del contacto */}
        <div className="col-auto">
          <img
            src={photo || "https://via.placeholder.com/120"}
            alt={name}
            style={{
              width: 120,
              height: 120,
              objectFit: "cover",
              borderRadius: "0.75rem 0 0 0.75rem",
            }}
          />
        </div>

        {/* Información */}
        <div className="col d-flex flex-column ps-3">
          <h5 className="mb-1">{name}</h5>
          <p className="mb-0 text-muted">Teléfono: {number}</p>
        </div>

        {/* Botones a la derecha */}
        <div className="col-auto d-flex flex-column pe-3">
          <button
            className="btn btn-outline-primary btn-sm mb-2"
            onClick={onEdit}
            aria-label={`Editar contacto ${name}`}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={onDelete}
            aria-label={`Eliminar contacto ${name}`}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};