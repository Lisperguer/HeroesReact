import { useReducer } from "react";
import { types } from "../types/types";
import { AutchContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initialState = {
  logged: false,
};
export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const login = async (name = "") => {
    const action = {
      type: types.login,
      payload: {
        id: "ABC",
        name: name,
      },
    };
    dispatch(action);
  };
  const data = {
    ...authState,
    login: login,
  };
  return <AutchContext.Provider value={data}>{children}</AutchContext.Provider>;
};
