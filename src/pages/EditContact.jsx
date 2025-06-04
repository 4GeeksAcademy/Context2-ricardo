import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { FormContact } from "../components/FormContact";

export const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useGlobalReducer();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const loadContact = async (id) => {
      try {
        const response = await fetch(
          `https://playground.4geeks.com/contact/agendas/Ricks/contacts/${id}`
        );
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error("Error loading contact:", error);
      }
    };
    loadContact();
  }, [id]);

  const handleSubmit = async (updatedContact) => {
    try {
      const response = await fetch(
        `https://playground.4geeks.com/contact/agendas/Ricks/contacts/${updatedContact}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedContact),
        }
      );
      const data = await response.json();
      dispatch({ type: "edit_contact", payload: data });
      navigate("/");
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <div className="container">
      <h3>Edit Contact</h3>
      <FormContact title="Edit Contact" onSubmit={handleSubmit} contact={contact} />
    </div>
  );
};