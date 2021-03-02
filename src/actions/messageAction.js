export const setMessageDetails = (fieldName, fieldValue) => ({
  type: "SET_MESSAGE_DETAILS",
  fieldName: fieldName,
  fieldValue: fieldValue,
});

export const resetMessageDetails = () => ({
  type: "RESET_MESSAGE_DETAILS",
});
