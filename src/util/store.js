import React,{createContext, useState, useContext} from "react"

const StoreContext = createContext(null)
const StoreProvider = ({children})=>{
    const [isLoggedIn, setIsLoggedIn]= useState(true)
    const [name, setName] = useState("")
    return (
        <StoreContext.Provider value={{isLoggedIn, setIsLoggedIn, name, setName}}>
            {children }
        </StoreContext.Provider>
    )
}

const useStoreContext = ()=>useContext(StoreContext)

export {StoreProvider, useStoreContext}