export const initialStore = () => ({
  contacts: []
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
          c._id === action.payload._id ? action.payload : c
        ),
      };
    case "delete_contact":
      return {
        ...state,
        contacts: state.contacts.filter((c) => c._id !== action.payload),
      };
    default:
      return state;
  }
};

export default storeReducer;
