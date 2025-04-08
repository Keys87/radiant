/* eslint-disable react/prop-types */
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "../config";
import { child, equalTo, onValue, orderByChild, push, query, ref, get } from "firebase/database";
import { executeQuery } from "firebase/data-connect";
/*
so basically we must searched thru all users uid(the app-specific UID, not the push().key one) using orderBy and other funcs

*/

export function Authenticate({ handleAfterAuth }) {
    const provider = new GoogleAuthProvider()
    auth.languageCode = 'en'

    async function handleClickLogIn() {
        let authResult = await signInWithPopup(auth, provider)
        let userExistQuery = query(ref(db, "userData"), orderByChild("uid"), equalTo(authResult.user.uid))

        get(userExistQuery).then(
            (snapshot) => {
                if (snapshot.exists()) {
                    console.log("user found, iniating log in")
                    let userObject =  {
                        "userName": `${authResult.user.displayName}`, 
                        "uid": `${authResult.user.uid}`,
                        "chatroomsIn": [""]
                    }
            
                    console.log(`log in success; user-object:${userObject}`)
                    handleAfterAuth(userObject)
                } else {
                    console.log("user NOT found, initiating sign up")

                    let userObject =  {
                        "userName": `${authResult.user.displayName}`, 
                        "uid": `${authResult.user.uid}`,
                        "chatroomsIn": [""]
                    }
                    let pushReferenceObject = push(ref(db, "userData"), userObject)
            
                    console.log(userObject)

                    console.log(`sign up success; user-object:${userObject}`)
                    handleAfterAuth(userObject)
                }
            }
        ).catch(
            (reason) => {
                console.log(`error happened during auth, please delete manually the data; reason:\n\n ${reason}`)
            }
        )


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