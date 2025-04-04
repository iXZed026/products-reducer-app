import React, { useRef } from 'react';
import { createContext } from 'react';

const ScrollContext = createContext()

function scrollProvide({ children }) {

    const elementRef = useRef(null)

    return (
        <ScrollContext.Provider value={elementRef}>
            {children}
        </ScrollContext.Provider>
    )
}

export { ScrollContext }
export default scrollProvide