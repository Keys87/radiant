/* eslint-disable react/prop-types */
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../config";

export function Authenticate({ handleAfterAuth }) {
    const provider = new GoogleAuthProvider()
    auth.languageCode = 'en'

    async function handleClickLogIn() {
        // signInWithPopup(auth, provider).then(
        //     (result) => {
        //         console.log(result.UserObjectContext)
        //     }
        // )
        const result = await signInWithPopup(auth, provider)
        handleAfterAuth(result.user)
    }

    return (
        <div className="bg-transparent w-screen h-screen flex justify-center items-center">
            <section role="authentication" className="border-2 rounded-3xl border-white bg-black/40 w-[28%] h-[48%] flex justify-center items-center">
                <button type="button" className="p-2 rounded-2xl bg-white text-center hover:bg-gray-300" onClick={handleClickLogIn}>
                    Log In/Sign Up
                </button>
            </section>
        </div>
    )
}