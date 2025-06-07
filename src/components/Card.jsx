export const Card = ({ name, address, phone, email, photo, onEdit, onDelete }) => {
      return (
        <div className="card mb-3 mx-auto position-relative" style={{ maxWidth: '600px' }}>
            <div className="position-absolute top-0 end-0 mt-2 me-2">
                <button className="btn btn-link p-1 me-2" onClick={onEdit} title="Editar">
                    ✏️
                </button>
                <button className="btn btn-link p-1" onClick={onDelete} title="Eliminar">
                    🗑️
                </button>
            </div>

            <div className="row g-0 align-items-center">
                <div className="col-auto">
                    <img
                        src={photo || "https://images.ctfassets.net/j4m9q0fykyy4/6Sz1qSK30f1CGJ7RPLdwTQ/735cb87b945a9249712f9eaa928a398d/2020-08-hamster-3.jpg"}
                        className="img-fluid rounded-circle m-3"
                        alt="Foto"
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                </div>
                <div className="col">
                    <div className="card-body py-3">
                        <h5 className="card-title mb-1">{name}</h5>
                        <p className="mb-1">
                            <i className="bi bi-geo-alt-fill me-2"></i>{address}
                        </p>
                        <p className="mb-1 text">
                            <i className="bi bi-telephone-fill me-2"></i>{phone}
                        </p>
                        <p className="mb-1 text-muted">
                            <i className="bi bi-envelope-fill me-2"></i>{email}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};