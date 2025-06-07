import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  useEffect(() => {
    const loadContacts = async () => {
      try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/Ricks/contacts');
        const data = await resp.json();
        dispatch({
          type: 'load_contacts',
          payload: {
            contacts: data.contacts,
          }
        });
      } catch (error) {
        console.error("Error loading contacts:", error);
      }
    };

    loadContacts();
  }, []);// habia un dispatch que sobra, hace que se ejecute de nuevo la funcion.

  // Función para eliminar contacto
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/Ricks/contacts/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error al eliminar");

      dispatch({ type: "delete_contact", payload: id });
    } catch (error) {
      console.error("Fallo al eliminar contacto:", error);
    }
  };

  return (
    <div>
      {
        store.contacts.map((contact) => (
          <Card
            key={contact.id}
            name={contact.name}
            address={contact.address}
            email={contact.email}
            phone={contact.phone}
            photo={contact.photo}
            onEdit={() => {
              navigate(`/edit-contact/${contact.id}`)
              dispatch({ type: "selectedContacts", paylaod: contact })
            }}
            onDelete={() => handleDelete(contact.id)}
          />
        ))
      }

    </div>
  )

};

