import { createContext, useState } from "react";
import { nav } from "../@types";

const NavContext = createContext({});

export const NavProvider = ({children}: any) => {
    const [activeNav, setActiveNav] = useState(false);
    return (
        <NavContext.Provider value={{activeNav, setActiveNav}}>
            {children}
        </NavContext.Provider>
    )
}

export default NavContext