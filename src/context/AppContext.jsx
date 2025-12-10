import React, { createContext } from 'react'
import { useMediaQuery } from "react-responsive";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext({});

export const AppProvider = ({children}) => {
    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery( {minWidth: 768, maxWidth: 1024});

    return (
        <AppContext.Provider value={{isSmall, isMobile, isTablet}}>
            {children}
        </AppContext.Provider>
    )
}
