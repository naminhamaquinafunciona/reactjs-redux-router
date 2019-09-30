import { UPDATE_USER_NAME } from "../actions/user";

const INITIAL_STATE = {
  personalInfo: {
    name: "Primeiro Usuário",
    id: 1
  },
  employerInfo: {
    carrer: "Developer"
  }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_USER_NAME:
      return updateUserName(state, action.payload);
    default:
      return state;
  }
}

//respponse google login
function updateUserName(state, data) {
  const newState = { ...state }
  newState.personalInfo.name = data;
  return Object.assign({}, state, { ...newState });
}