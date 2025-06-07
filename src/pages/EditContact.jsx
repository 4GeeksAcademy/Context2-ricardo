import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { FormContact } from "../components/FormContact";

export const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate(); //agregar store para tener acceso al selectedcontact (mas adelante)
  const { dispatch,store } = useGlobalReducer();
console.log(store);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
// UseState maneja variables, el UseEffect maneja funciones, solo se ejecutan cuando ocurre un evento, onclick etc...
  useEffect(() => {
    setContact({
      name: store.selectedContacts.name || "",
      adresss: store.selectedContacts.address || "",
      email: store.selectedContacts.email || "",
      phone: store.selectedContacts.phone || "",

    })
  }, []); // este array, debe de estar vacio, para que se ejecute una vez. 

  const handleSubmit = async (updatedContact) => {
    try {
      const response = await fetch(
        `https://playground.4geeks.com/contact/agendas/Ricks/contacts/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedContact),
        }
      );
      const data = await response.json();//verificar si es _id o id
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