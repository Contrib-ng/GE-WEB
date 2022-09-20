import React, {useState} from 'react'

export const ModalSignUpContext = React.createContext({})

const ModalSignUpContextProvider = ({ children }) => {
    const [selectedSignUp, setSelectedSignUp] = useState('')
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <ModalSignUpContext.Provider value={{selectedSignUp, setSelectedSignUp, modalOpen, setModalOpen }}>
        {children}
        </ModalSignUpContext.Provider>
    )
}

export default ModalSignUpContextProvider