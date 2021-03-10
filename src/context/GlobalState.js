import React, { createContext, useReducer } from "react";
import { userReducer } from "./Reducer";

const initialState = {
  user: [
    {
      id: 1,
      nama: "Abdul Latif",
      email: "abdul@mail.com",
    },
    {
      id: 2,
      nama: "Prayoga",
      email: "yoga@mail.com",
    },
  ],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  function createUser(user) {
    dispatch({
      type: "CREATE_USER",
      payload: user,
    });
  }

  function deleteUser(id) {
    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  }

  function editUser(user) {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        createUser,
        editUser,
        deleteUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
