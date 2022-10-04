import React, {useState} from 'react'

export const ModalContext = React.createContext({})

const ModalContextProvider = ({ children }) => {
    const [tag, setTag] = useState('')
    const [modalOpen, setModalOpen] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [more, setMore] = useState(10)
    const [currentLoggedInUser, setCurrentLogInUser] = useState([])
    const [offline, setOffline] = useState('')

    return (
        <ModalContext.Provider value={{
            tag, setTag, modalOpen, setModalOpen, showPassword, setShowPassword,
            more, setMore, currentLoggedInUser, setCurrentLogInUser, offline, setOffline
             }}>
        {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider