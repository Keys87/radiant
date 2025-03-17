/* eslint-disable react/prop-types */
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";



export function Authenticate({authApp, handleAfterAuth}) {
    const auth = authApp
    const provider = new GoogleAuthProvider()
    auth.languageCode = 'en'

    return (
        <div className="bg-transparent w-screen h-screen flex align-middle justify-center items-center">
            <section role="authentication" className="border-2 rounded-3xl border-white bg-black/40 w-[28%] h-[48%] flex justify-center items-center">
                <button type="button"onClick={() => {
                    signInWithPopup(auth, provider).then(
                        (result) => {handleAfterAuth}
                    )}
                }  
                className="p-2 rounded-2xl bg-white text-center hover:bg-gray-300">
                Log In/Sign Up
                </button>
            </section>
        </div>
    )
}