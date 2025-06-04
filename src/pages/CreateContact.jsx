import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CreateContact = () => {
  const navigate = useNavigate();
  const { dispatch } = useGlobalReducer();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://playground.4geeks.com/contact/agendas/Ricks/contacts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contact),
        }
      );
      const newContact = await response.json();
      dispatch({ type: "add_contact", payload: newContact });
      navigate("/");
    } catch (error) {
      console.error("Error creating contact:", error);
    }
  };

  return (
    <div className="container mb-3">
      <h3>Add new contact</h3>
      <form onSubmit={handleSubmit} className="form-label">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={contact.name}
          onChange={handleChange}
          placeholder="Full name"
          className="form-control mb-2"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          placeholder="Email"
          className="form-control mb-2"
          required
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="form-control mb-2"
          required
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={contact.address}
          onChange={handleChange}
          placeholder="Address"
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-primary">
          Create Contact
        </button>
      </form>
    </div>
  );
};