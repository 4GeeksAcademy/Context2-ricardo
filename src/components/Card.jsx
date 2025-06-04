export const Card = ({ name, number, photo, onEdit, onDelete }) => {
    return (
        <div className="card mb-3 mx-auto" style={{ maxWidth: '600px' }}>
            <div className="row g-0 align-items-center">
                <div className="col-md-4">
                    <img src={photo || "https://via.placeholder.com/150"} className="img-fluid" alt="Foto" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{number}</p>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-outline-primary me-2" onClick={onEdit}>
                                ✏️
                            </button>
                            <button className="btn btn-outline-danger" onClick={onDelete}>
                                🗑️
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};