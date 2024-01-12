import { createContext, useState } from "react";

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