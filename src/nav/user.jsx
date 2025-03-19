import { signOut } from "firebase/auth"
import { useContextNullAuthInstance, useContextNullTestContext } from "../contexts"

export function User({show}) {
    // const authInstance = useContextNullAuthInstance()
    const authInstanceContext = useContextNullAuthInstance()
    return (
        <section role="" className={`bg-black/40 w-52 flex-initial flex-col justify-center align-top border-e-2 ${show}`}>
            <h3 className="font-bold text-2xl text-white ms-2 mt-2 text-center">{authInstanceContext}</h3>
            {/* <button type="button" className="p-2 rounded-2xl bg-white text-center hover:bg-gray-300" onClick={async () => {await signOut(authInstance)}}>
                Log Out
            </button> */}
        </section>
    )
}