import React, { createContext, useState } from 'react';

export const LoaderContext = createContext({});

export default function LoaderProvider({children}) {

    
    const [loading, setLoading] = useState(false);

  

    return (
    <LoaderContext.Provider value={[loading, setLoading]}>
            {children}
        </LoaderContext.Provider>
    );
}