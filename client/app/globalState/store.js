import React, {createContext, useState } from 'react';

export const StoreContext = createContext()

export default function StoreProvider(props) {

    const [open, setOpen ] = useState(false);

    return(
        <StoreContext.Provider
            value={{open, setOpen}}
        >
        {props.children}
        </StoreContext.Provider>
    );
}