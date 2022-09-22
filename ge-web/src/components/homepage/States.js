import React, {useState} from 'react'

export const ModalContext = React.createContext({})

const ModalContextProvider = ({ children }) => {
    const [selectedSignUp, setSelectedSignUp] = useState('')
    const [modalOpen, setModalOpen] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    return (
        <ModalContext.Provider value={{
            selectedSignUp, setSelectedSignUp, modalOpen, setModalOpen, showPassword, setShowPassword
             }}>
        {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider