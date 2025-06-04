import { useState, useEffect } from "react";

export const FormContact = ({ title, onSubmit, contact = {} }) => {
  const [name, setName] = useState(contact.name || "");
  const [email, setEmail] = useState(contact.email || "");
  const [phone, setPhone] = useState(contact.phone || "");
  const [address, setAddress] = useState(contact.address || "");

  // Actualizar estado si cambia la prop contact (al editar)
  useEffect(() => {
    setName(contact.name || "");
    setEmail(contact.email || "");
    setPhone(contact.phone || "");
    setAddress(contact.address || "");
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, phone, address });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>{title}</legend>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full name</label>
          <input
            id="name"
            className="form-control"
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            className="form-control"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            id="phone"
            className="form-control"
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            id="address"
            className="form-control"
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </fieldset>
    </form>
  );
};