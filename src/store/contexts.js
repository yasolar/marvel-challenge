import React, {createContext, useState} from 'react';

const HerosContext = createContext({});

const HerosProvider = ({children}) => {
    const [name, setName] = useState('thor')
    const [infos, setInfos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    return(
        <HerosContext.Provider value={{name, setName, infos, setInfos, isLoading, setIsLoading}}>
            {children}
        </HerosContext.Provider>
    )
}

export { HerosContext, HerosProvider }