import { useState, useContext, createContext } from "react"
import type { ReactNode } from "react";

type ProviderProps = { children: ReactNode };
const loginContext = createContext<access | null>(null);

type access = {
    login : () => void;
    logout : () => void
    authorized : boolean
}

export const Authorization = ({children} : ProviderProps) => {
    const [authorized, setAuthorized] = useState(false);

    const login = () => setAuthorized(true);
    const logout = () => setAuthorized(false);

    return(
        <loginContext.Provider value={{authorized, login, logout}}>
            {children}
        </loginContext.Provider>
    )

}
export const useLogin = ()=> useContext(loginContext);