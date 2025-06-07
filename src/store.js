export const initialStore = () => ({
  contacts: [],
  selectedContacts: {}
});

const storeReducer = (store, action) => {
  switch (action.type) {
    case "load_contacts":
      return { ...store, contacts: action.payload.contacts };
    case "add_contact":
      return { ...store, contacts: [...store.contacts, action.payload] };
    case "edit_contact":
      return {
        ...store,
        contacts: store.contacts.map((c) =>
          c.id === action.payload.id ? action.payload : c
        ),
      };
    case "delete_contact":
      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== action.payload)
      };
    case "edit_contact":
      return {
        ...store,
        contacts: store.contacts.map(c => c.id === action.payload.id ? action.payload : c)
      };
    case "selectedContacts":
      return {
        ...store,
        selectedContacts: action.paylaod // asi por que tiene ya la informacion
      }
  }
};

export default storeReducer;
