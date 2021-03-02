const initState = {
  name: "",
  email: "",
  subject: "",
  content: "",
};

const messageReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_MESSAGE_DETAILS":
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };
    case "RESET_MESSAGE_DETAILS":
      return {
        name: "",
        email: "",
        subject: "",
        content: "",
      };
    default:
      return state;
  }
};

export default messageReducer;
