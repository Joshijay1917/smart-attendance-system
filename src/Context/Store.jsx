import { createContext, useEffect, useState } from "react";

export const Store = createContext(null)

const StoreProvider = (props) => {
    const [session, setsession] = useState(null)

    useEffect(() => {
      if(session) {
        setTimeout(() => {
            setsession(null);
        }, parseInt(session.duration) * 60 * 1000);
      }
    }, [session])
    

    const contextValue = {
        session,
        setsession
    }

    return (
        <Store.Provider value={contextValue}>
            {props.children}
        </Store.Provider>
    )
}

export default StoreProvider