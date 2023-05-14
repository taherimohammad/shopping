import { useState, createContext, useContext, useEffect } from 'react';

export const AuthProviderContext = createContext();
export const AuthProviderContextDispatcher = createContext();

function AuthProvider({ children }) {
    const [state, setState] = useState(false);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('authState')) || false;
        setState(userData);
    }, []);

    useEffect(() => {
        localStorage.setItem("authState", JSON.stringify(state));
    }, [state])


    return (
        <AuthProviderContext.Provider value={state}>
            <AuthProviderContextDispatcher.Provider value={setState}>
                {children}
            </AuthProviderContextDispatcher.Provider>
        </AuthProviderContext.Provider>
    )
}

export default AuthProvider;

export const useAuth = () => useContext(AuthProviderContext);
export const useAuthAction = () => useContext(AuthProviderContextDispatcher);