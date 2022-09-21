import React, {useState} from 'react'

export const ModalSignUpContext = React.createContext({})

const ModalSignUpContextProvider = ({ children }) => {
    const [selectedSignUp, setSelectedSignUp] = useState('')
    const [modalOpen, setModalOpen] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    return (
        <ModalSignUpContext.Provider value={{
            selectedSignUp, setSelectedSignUp, modalOpen, setModalOpen, showPassword, setShowPassword
             }}>
        {children}
        </ModalSignUpContext.Provider>
    )
}

export default ModalSignUpContextProvider