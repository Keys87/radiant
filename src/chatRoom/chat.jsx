// import { v4 } from "uuid";
// import { DBInstanceContext, UserObjectContext } from "../contexts";
// import { useContext } from "react";
// import { get, ref } from "firebase/database";
// import { db } from "../config";


// function handleOnSend() {

//   let user = useContext(UserObjectContext)
//   let db = useContext(DBInstanceContext)

//   const now = new Date();
//   let day = toString(now.getDate())
//   let month = toString(now.getMonth() + 1)
//   let year = now.getFullYear(); 
//   let hour = toString(now.getHours)
//   let minute = toString(now.getMinutes)
//   let fullDate = `${day}/${month}/${year}:${hour}:${minute}`;
//   let id = v4()

//   let lastMessage = get(ref(db, ``)) // need to get the chatrooms in rn
//   let name = user.name

//   let message = {
//     id: {
//       "id": id,
//       "sender": name,
//       "content": input,
//       "timeStamp": fullDate,
//       "messageNumber": 0
//     }
//   }     
//   set(ref(db), message)
  
// }

// function handleOnRecieve() {

// }

// export function chat({chatRoomId}) {
//   return (
//     <>
//       <section role="heading" className="bg-black/40 flex flex-col justify-center align-top w-svh h-fit border-b-2 text-left">
//         {get(ref(db, ``))}
//       </section>
//     </>
//   )
// }


