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
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/EditContact/contacts/5');
        const data = await resp.json();
        dispatch({
          type: 'load_contacts',
          payload: {
            contacts: data.contacts || [],
          }
        });
      } catch (error) {
        console.error("Error loading contacts:", error);
      }
    };

    loadContacts();
  }, [dispatch]);

  // Función para eliminar contacto
  const handleDelete = async (id) => {
    try {
      const resp = await fetch(`https://playground.4geeks.com/contact/agendas/Ricks/contacts/8`, {
        method: 'DELETE',
      });
      if (resp.ok) {
        dispatch({ type: "delete_contact", payload: id });
      } else {
        console.error("Error deleting contact");
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

 return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Contactos</h1>

      {store.contacts.length === 0 && (
        <p className="text-center">No hay contactos disponibles</p>
      )}

      <div className="d-flex flex-column gap-3">
        {store.contacts.map((contact) => (
          <Card
            key={contact._id}
            name={contact.name}
            number={contact.phone}
            photo={contact.photo}
            onEdit={() => navigate(`/edit-contact/${contact._id}`)}
            onDelete={() => {
              if (window.confirm("¿Quieres eliminar este contacto?")) {
                fetch(
                  `https://playground.4geeks.com/contact/agendas/Ricks/contacts/8`,
                  {
                    method: "DELETE",
                  }
                )
                  .then(() => {
                    dispatch({ type: "delete_contact", payload: contact._id });
                  })
                  .catch((error) => {
                    console.error("Error al eliminar:", error);
                  });
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};