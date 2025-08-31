/* eslint-disable react/prop-types */
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "../config";
import { child, equalTo, onValue, orderByChild, push, query, ref, get } from "firebase/database";
import { executeQuery } from "firebase/data-connect";

export function Authenticate({ handleAfterAuth }) {
    const provider = new GoogleAuthProvider()
    auth.languageCode = 'en'

    async function handleClickLogIn() {
        /*
        so basically we must search thru all users uid 
        using query, orderBy, and other funcs
        */

        let authResult = await signInWithPopup(auth, provider)
        let userExistQuery = query(ref(db, "userData"), orderByChild("uid"), equalTo(authResult.user.uid))
        // this is the query

        get(userExistQuery).then(
            (snapshot) => {
                if (snapshot.exists()) {
                    console.log("user found, iniating log in")
                    console.log(`log in success; user-name:${authResult.user.displayName}`)

                    // take your eyes on break

                } else {
                    console.log("user NOT found, initiating sign up")

                    let userObject =  {
                        "userName": `${authResult.user.displayName}`, 
                        "uid": ``,
                        "chatroomsIn": [""]
                    }
                    const pushRef = push(ref(db, "userData"), userObject)
                    const updates = {}
                    updates[`/userData/${pushRef.key}/uid`] = pushRef.key 

                    // line 34 till 36 
                    // they update the blank UID to use the push key

                }
            }
        ).catch(
            (reason) => {
                console.log(`error happened during auth, please delete manually the data; error-msg:\n\n ${reason}`)
                
                // error handling
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