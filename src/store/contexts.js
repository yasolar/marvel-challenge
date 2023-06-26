import React, {createContext, useState} from 'react';

const HerosContext = createContext({});

const HerosProvider = ({children}) => {
    const [name, setName] = useState('')
    const [infos, setInfos] = useState([])
    return(
        <HerosContext.Provider value={{name, setName, infos, setInfos}}>
            {children}
        </HerosContext.Provider>
    )
}

export { HerosContext, HerosProvider }