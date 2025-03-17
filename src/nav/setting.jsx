export function Settings({show}) {
    return(
        <section role="settings" className={`bg-black/40 w-52 flex-initial flex-col justify-center align-top border-e-2 ${show}`}>
            <h3 className="font-bold text-2xl text-white ms-2 mt-2 text-center">Settings</h3>
        </section>
    )
}