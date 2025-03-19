/*  function handleOnSend() {

    const now = new Date();
    let day = toString(now.getDate())
    let month = toString(now.getMonth() + 1)
    let year = now.getFullYear(); 
    let hour = toString(now.getHours)
    let minute = toString(now.getMinutes)
    let fullDate = `${day}/${month}/${year}:${hour}:${minute}`;
    let id = v4()

    let lastMessage = get(ref(db, ``)) // need to get the chatrooms in rn
    let name = user.name

    let message = {
      id: {
        "id": id,
        "sender": name, // handle this later | RESOLVED
        "content": input,
        "timeStamp": fullDate,
        "messageNumber": 0
      }
    }     
    set(ref(db), message)
    
  } */