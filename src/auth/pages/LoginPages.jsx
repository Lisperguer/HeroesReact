import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AutchContext } from "../context/AuthContext";

export const LoginPages = () => {
  const navigate = useNavigate();
  const { login } = useContext(AutchContext);
  const onLogin = () => {
    login("Felipe Lisperguer");
    navigate("/", {
      replace: true,
    });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={onLogin}>
        {" "}
        Log in
      </button>
    </div>
  );
};
