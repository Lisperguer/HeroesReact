import { useReducer } from "react";
import { AutchContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initialState = {
  logged: false,
};
export const AuthProvider = ({ children }) => {
  const data = {};
  const [state, dispatch] = useReducer(authReducer, initialState);
  return <AutchContext.Provider value={data}>{children}</AutchContext.Provider>;
};
