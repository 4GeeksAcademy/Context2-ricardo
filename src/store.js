export const initialStore = () => ({
  contacts: [],
  selectedContacts: {}
});

const storeReducer = (state, action) => {
  switch (action.type) {
    case "load_contacts":
      return { ...state, contacts: action.payload.contacts };
    case "add_contact":
      return { ...state, contacts: [...state.contacts, action.payload] };
    case "edit_contact":
      return {
        ...state,
        contacts: state.contacts.map((c) =>
          c.id === action.payload.id ? action.payload : c
        ),
      };
    case "delete_contact":
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
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
