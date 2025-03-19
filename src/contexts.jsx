import { createContext, useContext } from "react";
import { auth } from "./App"
// import { Auth } from "firebase/

export const authInstanceContext = createContext(setTimeout(() => {
    authInstance = auth
    return authInstance
}, 1000))
export const testContext = createContext<string | null>(null)

export function useContextNullAuthInstance() {
    const authInstance = useContext(authInstanceContext)
    
    if (authInstance === null) {
        throw new Error("context authInstance is null");
    } else {
        return authInstance
    }
}

export function useContextNullTestContext() {
    const test = useContext(testContext)
    
    if (test === null) {
        throw new Error("context test is null");
    } else {
        return test
    }
}