import { useNavigate } from "react-router-dom"
import { useLogin } from "../Contexts"

export const Login = () => {
   const context = useLogin();
   if (!context) throw new Error("Error");

   const { login } = context;
    const navigate = useNavigate();

    const handleLogin = () =>{
        login();
        navigate("/home");
    }
    return (
        <>
        <h1>Login</h1>
        <button onClick={handleLogin} className="bg-red-500 rounded ">Login</button>
        </>
    )
}