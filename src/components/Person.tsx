import { useState } from "react"

export default function Person () {

    const [person, setPerson] = useState(' ')


    return <div>
        <h1>Perfil</h1>
        <p>Este é o perfil de {person}</p>
        <button onClick={() =>{console.log('Cláudio'); setPerson('Cláudio')}} >Cláudio</button>
        <button onClick={() =>{console.log('Victor'); setPerson('Victor')}} >Victor</button>
    </div>
}