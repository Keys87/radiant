/* eslint-disable react/prop-types */
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";



export function Authenticate({authApp}) {
    const auth = authApp
    const provider = new GoogleAuthProvider()
    auth.languageCode = 'en'

    async function handleClickLogIn() {
        // signInWithPopup(auth, provider).then(
        //     (result) => {
        //         console.log(result.user)
        //     }
        // )
        const result = await signInWithPopup(auth, provider)
        // console.log(userObject)
    }
    
    // async function handleClickSignUp() {
    // no need if there is a google log in        
    // }


    
    return (
        <div className="bg-transparent w-screen h-screen flex justify-center items-center">
            <section role="authentication" className="border-2 rounded-3xl border-white bg-black/40 w-[28%] h-[48%] flex justify-center items-center">
                <button type="button" className="p-2 rounded-2xl bg-white text-center hover:bg-gray-300" onClick={handleClickLogIn}>
                Log In/Sign Up
                </button>
                {/* <button type="button" className="border-2 rounded-3xl border-white bg-black/40 w-[28%] h-[48%] flex justify-center items-center">
                Sign Up</button> no need since there is google log in*/}
            </section>
        </div>
    )
}